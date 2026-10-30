# Readability and Consistency Improvements

Each proposal page was built separately, so they look a little different from one another. Many pages also use ~585 fixed colors that don't adjust properly between dark and light mode. This plan brings every page onto one shared look.

## Recommendations

1. **One shared page template**
   Every proposal page gets the same parts in the same order: title block (icon, title, subtitle, read time), "At a glance" summary, then the main sections, High-Level Outcomes, Risks and Mitigations, Conclusion, and References.

2. **Reusable section styles**
   Shared building blocks so you get the same look everywhere:
   - Section card (same border, spacing and heading size)
   - Callout / key quote box
   - Outcomes grid (green, check icons, as on Endo Economics)
   - Risk panels (yellow / orange / red)
   - Data reference link (like the [Data 1] links)

3. **Colors that work in both modes**
   Swap fixed colors (light-blue panels, gray text) for theme colors, so text stays easy to read in dark mode and light mode. A small set of named accent colors (economy, ecology, risk, outcome).

4. **Easier reading**
   - Keep text lines a comfortable width (~70 characters)
   - Slightly larger body text and line spacing, clearer gaps between sections
   - One heading scale across all pages
   - A more readable font pairing (a serif for headings, a clean sans-serif for body text) suited to a manifesto

5. **Moving around long pages**
   - A "On this page" contents list with links to each section (sticky on desktop)
   - A reading progress bar at the top
   - "Previous / Next proposal" links at the bottom of each page

6. **Tidy-up**
   - Remove leftover template styling that squeezes and centers content
   - Make sure every page uses the same spacing around content and the same bottom padding

## Suggested order
Do 1–3 on Endo Economics first for you to review, then apply them to the other proposals one page at a time (content stays the same).

## Technical details
- New `src/components/paper/` set: `PaperHeader`, `PaperSection`, `Callout`, `OutcomesGrid`, `RiskPanel`, `DataRef`, `TableOfContents`, `PaperNav`.
- Add semantic tokens (`--accent-economy`, `--outcome`, `--risk-low/med/high`, `--callout`) in `index.css` + `tailwind.config.ts`; replace hardcoded `text-blue-*`/`bg-*-50` classes.
- Use `@tailwindcss/typography` `prose dark:prose-invert max-w-prose` for body text.
- Delete unused `App.css` `#root` rules.
- Record the shared-component rule in `AGENTS.md`.
