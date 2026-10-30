import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "info" | "outcome" | "risk-low" | "risk-med" | "risk-high";

const toneClass: Record<Tone, string> = {
  info: "border-tone-info bg-tone-info/10",
  outcome: "border-tone-outcome bg-tone-outcome/10",
  "risk-low": "border-tone-risk-low bg-tone-risk-low/10",
  "risk-med": "border-tone-risk-med bg-tone-risk-med/10",
  "risk-high": "border-tone-risk-high bg-tone-risk-high/10",
};

/** Highlighted box for key statements, quotes, or risk panels. */
export function Callout({ tone = "info", title, children, className }: { tone?: Tone; title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("border-l-4 rounded-r-lg p-5 my-6", toneClass[tone], className)}>
      {title && <p className="font-heading font-semibold text-lg mb-2 text-foreground">{title}</p>}
      <div className="text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}

/** Inline link to a [Data N] reference section. */
export function DataRef({ n, target }: { n: number | string; target?: string }) {
  return (
    <a href={`#${target ?? `data-${n}`}`} className="text-tone-info underline underline-offset-2 hover:opacity-80 font-medium">
      [Data {n}]
    </a>
  );
}
