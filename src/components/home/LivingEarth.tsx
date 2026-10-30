import { useEffect, useRef } from "react";
import * as THREE from "three";
import earthImage from "@/assets/earth.jpg";
import cloudImage from "@/assets/earth-clouds.png";

// Project the site's shared disk photograph onto a shallow-turning sphere.
// Small rotations preserve the visible hemisphere without inventing a second map.
const vertexShader = `
  varying vec2 imageUv;
  varying vec3 surfaceNormal;
  varying vec3 viewDirection;
  void main() {
    imageUv = vec2(position.x * 0.405 + 0.5, position.y * 0.405 + 0.5);
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    surfaceNormal = normalize(normalMatrix * normal);
    viewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = `
  uniform sampler2D image;
  uniform vec3 atmosphere;
  uniform float clouds;
  varying vec2 imageUv;
  varying vec3 surfaceNormal;
  varying vec3 viewDirection;
  void main() {
    vec4 photo = texture2D(image, imageUv);
    vec3 n = normalize(surfaceNormal);
    float facing = max(dot(n, normalize(viewDirection)), 0.0);
    float daylight = smoothstep(-0.5, 0.8, dot(n, normalize(vec3(-0.5, 0.65, 1.0))));
    float rim = pow(1.0 - facing, 3.0);
    if (clouds > 0.5) {
      gl_FragColor = vec4(photo.rgb, photo.a * 0.28 * daylight * smoothstep(0.0, 0.15, facing));
    } else {
      vec3 color = photo.rgb * (0.64 + daylight * 0.36);
      color += atmosphere * rim * 0.3;
      gl_FragColor = vec4(color, smoothstep(0.0, 0.035, facing));
    }
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function LivingEarth() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // Keep the shared photograph visible when WebGL is unavailable.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20);
    camera.position.z = 3.65;
    const root = new THREE.Group();
    scene.add(root);
    const geometry = new THREE.SphereGeometry(1, 72, 48);
    const loader = new THREE.TextureLoader();
    let disposed = false;
    let ready = false;
    const earth = loader.load(earthImage, () => {
      if (disposed) return;
      ready = true;
      render();
      host.classList.add("home-globe-ready");
    });
    const clouds = loader.load(cloudImage);
    earth.colorSpace = THREE.SRGBColorSpace;
    clouds.colorSpace = THREE.SRGBColorSpace;
    const colorToken = getComputedStyle(host).getPropertyValue("--home-atmosphere").trim();
    const atmosphere = new THREE.Color(`hsl(${colorToken.split(/\s+/).join(", ")})`);
    const makeMaterial = (image: THREE.Texture, cloudLayer: boolean) => new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { image: { value: image }, atmosphere: { value: atmosphere }, clouds: { value: cloudLayer ? 1 : 0 } },
      transparent: true,
      depthWrite: !cloudLayer,
    });
    const surfaceMaterial = makeMaterial(earth, false);
    const cloudMaterial = makeMaterial(clouds, true);
    const globe = new THREE.Mesh(geometry, surfaceMaterial);
    const weather = new THREE.Mesh(geometry, cloudMaterial);
    weather.scale.setScalar(1.008);
    root.add(globe, weather);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let elapsed = 0;
    let lastTime = 0;
    let pointerX = 0;
    let pointerY = 0;
    let easedX = 0;
    let easedY = 0;

    function render() {
      renderer.render(scene, camera);
    }
    const animate = (time: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      elapsed += Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      easedX += (pointerX - easedX) * 0.035;
      easedY += (pointerY - easedY) * 0.035;
      const page = host.closest<HTMLElement>(".home-page");
      const scroll = Number(page?.style.getPropertyValue("--home-scroll-progress") || 0);
      root.rotation.y = Math.sin(elapsed * 0.055) * 0.055 + easedX * 0.035 + scroll * 0.045;
      root.rotation.x = Math.sin(elapsed * 0.04) * 0.012 + easedY * 0.018;
      weather.rotation.z = Math.sin(elapsed * 0.045) * 0.025;
      weather.rotation.y = Math.sin(elapsed * 0.06) * 0.02;
      render();
      if (!preference.matches) frame = requestAnimationFrame(animate);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = performance.now();
      if (preference.matches) {
        root.rotation.set(0, 0, 0);
        weather.rotation.set(0, 0, 0);
        render();
      } else if (visible && !document.hidden) frame = requestAnimationFrame(animate);
    };
    const resize = new ResizeObserver(() => {
      renderer.setSize(host.clientWidth, host.clientHeight);
      camera.aspect = host.clientWidth / Math.max(host.clientHeight, 1);
      camera.updateProjectionMatrix();
      if (ready) render();
    });
    resize.observe(host);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    intersection.observe(host);
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerX = event.clientX / window.innerWidth * 2 - 1;
      pointerY = event.clientY / window.innerHeight * 2 - 1;
    };
    const resetPointer = () => { pointerX = 0; pointerY = 0; };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetPointer);
    document.addEventListener("visibilitychange", start);
    preference.addEventListener("change", start);
    start();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", start);
      preference.removeEventListener("change", start);
      geometry.dispose();
      surfaceMaterial.dispose();
      cloudMaterial.dispose();
      earth.dispose();
      clouds.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      host.classList.remove("home-globe-ready");
    };
  }, []);

  return <div ref={hostRef} className="home-living-earth" role="img" aria-label="Earth from space, with gently moving clouds and a sunlit atmosphere">
    <img src={earthImage} alt="" className="home-earth home-earth-fallback" width={1920} height={1920} />
  </div>;
}