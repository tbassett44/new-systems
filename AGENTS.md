# AGENTS.md

- Proposal pages use shared reading aids from `src/components/paper/`: reading progress mounts once beneath the buttons in `CommentSystem`; "On this page" and prev/next mount in `WhitePaperLayout`, so pages need no per-page reading-aid code.
- Prev/next order comes from the sidebar's `whitePaperItems` list — keeps navigation and reading order in sync.
- New callouts/data links should use `Callout`/`DataRef` and `tone-*` tokens, not raw Tailwind palette colors — keeps light/dark mode readable.
- Legacy raw palette classes are softened for dark mode by overrides in `index.css` — avoids rewriting every page at once.
- One Earth image serves the whole site (opening screen and proposal menu backdrop) — don't introduce a second Earth picture; the opening keeps its own `home-*` styles so changes there don't alter paper reading styles.
- Homepage motion uses passive scroll events with animation-frame CSS-variable updates and one-time intersection reveals, honoring reduced motion — keeps animation smooth without React rerenders or altering native scrolling.
- Homepage Earth weather uses a cloud texture extracted from the shared globe, CSS cloud drift and localized storm illumination; reduced motion stops weather animations and hides lightning to preserve comfortable reading.
