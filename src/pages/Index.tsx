import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, BookOpen, Github, Heart, Leaf, LogIn, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LivingEarth } from "@/components/home/LivingEarth";

const principles = [
  { icon: Heart, title: "Dignity-centered", text: "Human dignity and the inherent worth of all beings, at the heart of every proposal." },
  { icon: Leaf, title: "Regenerative", text: "Systems that heal, restore, and enhance life rather than extract from it." },
  { icon: Users, title: "Participatory", text: "Communities co-creating the systems that serve them." },
];

const Index = () => {
  const { user, signOut } = useAuth();
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "New Systems and Structures | Living Blueprint for Systems Redesign";
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const updateParallax = () => {
      frame = 0;
      const opening = page.querySelector<HTMLElement>(".home-opening");
      if (!opening) return;
      const distance = Math.min(Math.max(-opening.getBoundingClientRect().top, 0), opening.offsetHeight);
      page.style.setProperty("--home-earth-offset", `${distance * 0.24}px`);
      page.style.setProperty("--home-scroll-progress", `${distance / opening.offsetHeight}`);
      page.style.setProperty("--home-earth-scale", `${1 + distance / opening.offsetHeight * 0.12}`);
      page.style.setProperty("--home-title-offset", `${distance * 0.1}px`);
      page.style.setProperty("--home-cue-opacity", `${Math.max(0, 1 - distance / 200)}`);
      page.style.setProperty("--home-text-emphasis", `${Math.min(1, distance / 300)}`);
    };
    const onScroll = () => {
      if (!motionPreference.matches && !frame) frame = window.requestAnimationFrame(updateParallax);
    };
    const configureMotion = () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      frame = 0;
      page.classList.toggle("home-motion", !motionPreference.matches);
      if (motionPreference.matches) {
        page.style.removeProperty("--home-earth-offset");
        page.style.removeProperty("--home-scroll-progress");
        page.style.removeProperty("--home-earth-scale");
        page.style.removeProperty("--home-cue-opacity");
        page.style.removeProperty("--home-title-offset");
        page.style.removeProperty("--home-text-emphasis");
        return;
      }
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-revealed");
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      page.querySelectorAll(".home-reveal").forEach((element) => observer?.observe(element));
      updateParallax();
    };
    configureMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motionPreference.addEventListener("change", configureMotion);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionPreference.removeEventListener("change", configureMotion);
    };
  }, []);

  const scrollToVision = () => {
    document.getElementById("our-vision")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <div ref={pageRef} className="home-page min-h-screen bg-background text-foreground">
      <section className="home-opening" aria-labelledby="home-title">
        <div className="home-earth-layer">
          <div className="home-earth-scene">
            <LivingEarth />
          </div>
        </div>
        <div className="home-earth-shade" aria-hidden="true" />
        <header className="home-header">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Actualize Earth home">
            <Leaf className="h-5 w-5" />
            <span className="text-sm font-semibold">ACTUALIZE EARTH</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs opacity-70">Systems Regeneration Manifesto</span>
            {user ? <Button variant="ghost" size="sm" onClick={signOut} className="home-nav-button">Sign Out</Button> :
              <Button asChild variant="ghost" size="sm" className="home-nav-button"><Link to="/auth"><LogIn />Sign In</Link></Button>}
          </div>
        </header>
        <div className="home-title-block">
          <p className="home-eyebrow">A LIVING BLUEPRINT FOR SYSTEMS REDESIGN</p>
          <h1 id="home-title">New Systems<br />and Structures<span className="home-title-dot">.</span></h1>
          <p className="home-intro">For human flourishing.<br className="sm:hidden" /> For our shared home.</p>
          <Button asChild size="lg" className="home-primary-button"><Link to="/papers"><BookOpen />Explore the Manifesto<ArrowRight /></Link></Button>
        </div>
        <Button variant="ghost" onClick={scrollToVision} className="home-scroll" aria-label="Scroll to our vision">
          <span>ONE EARTH. MANY POSSIBILITIES.</span><ArrowDown className="home-scroll-arrow" />
        </Button>
      </section>

      <main className="home-content">
        <section id="our-vision" className="home-vision scroll-mt-8">
          <div className="home-reveal"><p className="home-section-label">OUR SHARED FUTURE</p><h2>A living planet.<br />Life-affirming systems.</h2></div>
          <div className="home-vision-copy home-reveal"><p>We are living in a pivotal evolutionary moment. Like a caterpillar becoming a butterfly, our civilization has the potential to transform.</p><p>These proposals reimagine how we govern, share resources, and care for one another, supporting better feedback, effective governance, and improved wellbeing.</p><Button asChild variant="link" className="px-0"><Link to="/papers">Enter the living blueprint<ArrowRight /></Link></Button></div>
        </section>
        <section aria-label="Core principles" className="home-principles">
          {principles.map(({ icon: Icon, title, text }) => <article key={title} className="home-principle home-reveal"><Icon className="h-6 w-6 text-primary" /><h3>{title}</h3><p>{text}</p></article>)}
        </section>
        <section className="home-invitation home-reveal">
          <p className="home-section-label">AN OPEN INVITATION</p>
          <h2>The future is something<br />we create together.</h2>
          <p>This is a living manifesto, not a finished answer. Explore the proposals, question the ideas, and help shape what comes next.</p>
          <div className="flex flex-wrap justify-center gap-3"><Button asChild size="lg"><Link to="/papers">Explore the Manifesto<ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><a href="https://github.com/tbassett44/new-systems" target="_blank" rel="noopener noreferrer"><Github />Contribute on GitHub</a></Button></div>
        </section>
        <footer className="home-footer">
          <div><Link to="/" className="inline-flex items-center gap-2 font-semibold text-sm"><Leaf className="h-4 w-4 text-primary" />Actualize Earth</Link><p className="mt-3 text-sm text-muted-foreground">By <a href="mailto:juicy@actualize.earth" className="hover:text-primary">Juicy Life</a> & Aether, an AI collaborator powered by GPT-4 by OpenAI.</p></div>
        </footer>
      </main>
    </div>
  );
};
export default Index;
