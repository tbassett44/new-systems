import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import surfaceAsset from "@/assets/earth-surface.jpg.asset.json";
import cloudAsset from "@/assets/earth-weather.png.asset.json";
import normalAsset from "@/assets/earth-relief.jpg.asset.json";
import oceanAsset from "@/assets/earth-oceans.jpg.asset.json";

// Local Vite does not serve the hosted asset path; production uses same-origin CDN delivery.
const assetUrl = (url: string) => import.meta.env.DEV ? `https://id-preview--f9370550-045a-48bb-b616-30daf984e610.lovable.app${url}` : url;
const INITIAL_ROTATION = 2.4;
const SURFACE_SPEED = 0.035;
const CLOUD_SPEED = 0.048;

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function Planet({ reduced, host, atmosphere, sunlight }: { reduced: boolean; host: HTMLDivElement; atmosphere: THREE.Color; sunlight: THREE.Color }) {
  const [surface, cloud, normal, ocean] = useLoader(THREE.TextureLoader, [surfaceAsset, cloudAsset, normalAsset, oceanAsset].map(asset => assetUrl(asset.url)));
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const { gl } = useThree();
  useEffect(() => {
    surface.colorSpace = THREE.SRGBColorSpace;
    cloud.colorSpace = THREE.SRGBColorSpace;
    surface.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
    surface.needsUpdate = true;
    cloud.needsUpdate = true;
  }, [surface, cloud, gl]);
  useFrame(({ pointer }, delta) => {
    if (!reduced) elapsed.current += Math.min(delta, 0.05);
    const scroll = reduced ? 0 : Number(host.closest<HTMLElement>(".home-page")?.style.getPropertyValue("--home-scroll-progress") || 0);
    if (earthRef.current) earthRef.current.rotation.y = INITIAL_ROTATION + elapsed.current * SURFACE_SPEED;
    if (cloudRef.current) cloudRef.current.rotation.y = INITIAL_ROTATION + elapsed.current * CLOUD_SPEED;
    if (groupRef.current) {
      const smoothing = reduced ? 1 : 1 - Math.exp(-3 * Math.min(delta, 0.05));
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, reduced ? 0 : pointer.x * 0.075 + scroll * 0.14, smoothing);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0.18 + (reduced ? 0 : pointer.y * 0.035), smoothing);
    }
    // The first frame containing loaded assets sets the readiness signal.
    if (!host.hasAttribute("data-scene-ready")) {
      requestAnimationFrame(() => { host.setAttribute("data-scene-ready", "true"); host.classList.add("home-globe-ready"); });
    }
  });
  return <>
    <ambientLight intensity={0.6} />
    <directionalLight color={sunlight} position={[-3, 4, 5]} intensity={3.2} />
    <directionalLight color={atmosphere} position={[3, -1, 2]} intensity={0.25} />
    <group ref={groupRef} rotation={[0.18, 0, -0.12]}>
      <mesh ref={earthRef} rotation={[0, INITIAL_ROTATION, 0]}>
        <sphereGeometry args={[1, 96, 64]} />
        <meshPhongMaterial map={surface} normalMap={normal} normalScale={new THREE.Vector2(0.65, 0.65)} specularMap={ocean} specular={atmosphere} shininess={22} />
      </mesh>
      <mesh ref={cloudRef} scale={1.008} rotation={[0, INITIAL_ROTATION, 0]}>
        <sphereGeometry args={[1, 72, 48]} />
        <meshPhongMaterial map={cloud} transparent opacity={0.72} depthWrite={false} />
      </mesh>
      <mesh scale={1.035}>
        <sphereGeometry args={[1, 64, 48]} />
        <shaderMaterial transparent depthWrite={false} side={THREE.BackSide} blending={THREE.AdditiveBlending}
          uniforms={{ atmosphere: { value: atmosphere } }}
          vertexShader={`varying vec3 n; varying vec3 v; void main(){ vec4 p=modelViewMatrix*vec4(position,1.0); n=normalize(normalMatrix*normal); v=normalize(-p.xyz); gl_Position=projectionMatrix*p; }`}
          fragmentShader={`uniform vec3 atmosphere; varying vec3 n; varying vec3 v; void main(){ float rim=pow(1.0-abs(dot(normalize(n),normalize(v))),3.0); gl_FragColor=vec4(atmosphere,rim*0.38); }`} />
      </mesh>
    </group>
  </>;
}

export function LivingEarth() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<{ reduced: boolean; active: boolean; host: HTMLDivElement; atmosphere: THREE.Color; sunlight: THREE.Color }>();
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const tokens = getComputedStyle(host);
    const color = (name: string) => new THREE.Color(`hsl(${tokens.getPropertyValue(name).trim().split(/\s+/).join(", ")})`);
    const atmosphere = color("--home-atmosphere");
    const sunlight = color("--home-sunlight");
    let visible = true;
    const update = () => setConfig({ host, atmosphere, sunlight, reduced: preference.matches, active: visible && !document.hidden });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(host);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return <div ref={hostRef} className="home-living-earth" role="img" aria-label="A rotating Earth with realistic oceans, continents, moving clouds and a blue atmospheric rim">
    {config && <SceneBoundary><Canvas camera={{ position: [0, 0, 3.5], fov: 35 }} dpr={[1, 1.5]} frameloop={!config.active ? "never" : config.reduced ? "demand" : "always"} gl={{ alpha: true, antialias: true }} onCreated={({ gl }) => { gl.setClearAlpha(0); gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.05; }}>
      <Suspense fallback={null}><Planet {...config} /></Suspense>
    </Canvas></SceneBoundary>}
  </div>;
}
