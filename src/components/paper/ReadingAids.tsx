import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface PaperLink {
  title: string;
  url: string;
}

function getScroller(): HTMLElement | null {
  return document.querySelector("[data-scroll-container]");
}

/** Thin bar at the top of the screen showing how far through the page you are. */
export function ReadingProgress() {
  const [pct, setPct] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const el = getScroller();
    const update = () => {
      const docEl = document.documentElement;
      const useEl = el && el.scrollHeight > el.clientHeight + 1;
      const top = useEl ? el!.scrollTop : window.scrollY;
      const max = useEl ? el!.scrollHeight - el!.clientHeight : docEl.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, (top / max) * 100) : 0);
    };
    update();
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
    };
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none" aria-hidden>
      <div className="h-full bg-reading-progress transition-[width] duration-150" style={{ width: `${pct}%` }} />
    </div>
  );
}

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);

/** "On this page" list built from the section headings of the current page. */
export function TableOfContents() {
  const { pathname } = useLocation();
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      const root = document.querySelector(".comment-highlighted-content");
      if (!root) return;
      const heads = Array.from(root.querySelectorAll<HTMLElement>("h2, h3")).filter(
        (h) => (h.textContent || "").trim().length > 2 && !h.closest("[data-toc-ignore]")
      );
      const used = new Set<string>();
      const list = heads.slice(0, 40).map((h) => {
        let id = h.id || slug(h.textContent || "section");
        while (used.has(id)) id += "-x";
        used.add(id);
        h.id = id;
        h.classList.add("scroll-mt-6");
        return { id, text: (h.textContent || "").trim() };
      });
      setItems(list);
    }, 300);
    return () => clearTimeout(t);
  }, [pathname]);

  if (items.length < 3) return null;

  return (
    <nav
      data-toc-ignore
      aria-label="On this page"
      className="hidden xl:block fixed right-4 top-20 w-56 max-h-[70vh] overflow-y-auto text-sm z-10"
    >
      <p className="font-semibold text-foreground mb-2 uppercase tracking-wide text-xs">On this page</p>
      <ul className="space-y-1.5 border-l border-border">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="block pl-3 -ml-px border-l border-transparent text-muted-foreground hover:text-foreground hover:border-foreground leading-snug"
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Previous / next proposal links at the bottom of each proposal page. */
export function PaperNav({ papers }: { papers: PaperLink[] }) {
  const { pathname } = useLocation();
  const idx = papers.findIndex((p) => p.url === pathname);
  if (idx === -1) return null;
  const prev = papers[idx - 1];
  const next = papers[idx + 1];

  return (
    <nav data-toc-ignore aria-label="More proposals" className="mt-16 pt-8 border-t border-border grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link to={prev.url} className="group rounded-lg border border-border p-4 hover:bg-accent transition-colors">
          <span className="flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
            <ArrowLeft className="h-3 w-3" /> Previous proposal
          </span>
          <span className="block mt-1 font-heading text-lg text-foreground">{prev.title}</span>
        </Link>
      ) : <div />}
      {next && (
        <Link to={next.url} className="group rounded-lg border border-border p-4 hover:bg-accent transition-colors sm:text-right">
          <span className="flex items-center gap-1 sm:justify-end text-xs uppercase tracking-wide text-muted-foreground">
            Next proposal <ArrowRight className="h-3 w-3" />
          </span>
          <span className="block mt-1 font-heading text-lg text-foreground">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
