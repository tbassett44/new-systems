# AGENTS.md

- Proposal pages use shared reading aids (progress bar, "On this page" list, prev/next) from `src/components/paper/`, mounted once in `WhitePaperLayout` — so every page gets them without per-page code.
- Prev/next order comes from the sidebar's `whitePaperItems` list — keeps navigation and reading order in sync.
- New callouts/data links should use `Callout`/`DataRef` and `tone-*` tokens, not raw Tailwind palette colors — keeps light/dark mode readable.
- Legacy raw palette classes are softened for dark mode by overrides in `index.css` — avoids rewriting every page at once.
- Homepage presentation uses scoped `home-*` styles and a dedicated Earth image, independent of proposal layouts — changes to the opening must not alter paper reading styles.
- Homepage motion uses passive scroll events with animation-frame CSS-variable updates and one-time intersection reveals, honoring reduced motion — keeps animation smooth without React rerenders or altering native scrolling.
