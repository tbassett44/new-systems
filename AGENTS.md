# AGENTS.md

- Proposal pages use shared reading aids from `src/components/paper/`: reading progress mounts once beneath the buttons in `CommentSystem`; "On this page" and prev/next mount in `WhitePaperLayout`, so pages need no per-page reading-aid code.
- Prev/next order comes from the sidebar's `whitePaperItems` list — keeps navigation and reading order in sync.
- New callouts/data links should use `Callout`/`DataRef` and `tone-*` tokens, not raw Tailwind palette colors — keeps light/dark mode readable.
- Legacy raw palette classes are softened for dark mode by overrides in `index.css` — avoids rewriting every page at once.
- The opening uses a live textured globe; the proposal menu retains its existing static Earth backdrop, and isolated `home-*` styles keep animation changes out of reading pages.
- Homepage motion uses passive scroll events with animation-frame CSS-variable updates and one-time intersection reveals, honoring reduced motion — keeps animation smooth without React rerenders or altering native scrolling.
- Homepage Earth uses React Three Fiber in `LivingEarth` with equirectangular surface, normal, ocean and independent cloud maps stored as asset pointers; real axial rotation replaces the rejected photograph projection.
- Globe rendering pauses offscreen or in hidden tabs; reduced motion renders a static globe to preserve comfortable reading.
