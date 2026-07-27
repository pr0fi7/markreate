# markreate

Personal site of **Mark Shevchenko** — Applied AI Engineer.

Live at **https://pr0fi7.github.io/markreate/**

Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages by GitHub
Actions on every push to `main`.

## Updating the CV

The two "Download CV" buttons serve `public/assets/Mark_Shevchenko_CV.pdf`.
Replace that file (keeping the filename) and push to publish a new version.

If you would rather not publish a CV at all, delete the `Download CV` entry from
`contactLinks` in `src/data/site.ts` and the second button in
`src/components/sections/Hero.tsx`.

## Editing content

All copy lives in **`src/data/site.ts`** — experience, projects, skills,
testimonials, contact links and the availability line. You should not need to
touch the components to update the site.

Useful switches in that file:

| Value              | Effect                                          |
| ------------------ | ----------------------------------------------- |
| `AVAILABLE`        | Toggles the "open to roles" headline in the hero |
| `showTestimonials` | Hides the Testimonials section and its nav link  |

Contact buttons marked `primary: true` render solid dark; the rest are outlined.

## Local development

Requires Node 22.12 or newer (Vite 8 / ESLint 10).

```bash
npm install
npm run dev      # http://localhost:8080/markreate/
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it with the
official GitHub Pages actions. There is no second deployment path.

Enable it once, under **Settings → Pages → Build and deployment → Source**, by
selecting **GitHub Actions**. Every push to `main` then redeploys.

### Changing the URL

The site is served from the `/markreate/` subpath, set in three places:

- `base` in `vite.config.ts`
- `homepage` in `package.json`
- the canonical / Open Graph URLs in `index.html`

Renaming the repo means updating all three. Moving to a custom domain means
setting `base` to `"/"` and adding a `public/CNAME` file.

## Project layout

```
public/assets/       photo, favicon, CV
src/data/site.ts     all site content
src/pages/Index.tsx  page composition
src/components/      Header, Footer, SectionHeading
  sections/          Hero, Experience, Projects, Skills, Testimonials, Contact
src/hooks/           use-reveal (scroll-in animation)
src/lib/             cn() class merger, withBold() for **bold** in content
```

## Design notes

- Design tokens live in `src/index.css` as **space-separated RGB channels**
  (`--brand: 198 90 53`), and Tailwind maps them with
  `rgb(var(--brand) / <alpha-value>)`. This is deliberate: a token stored as a
  plain hex `var()` makes Tailwind silently drop every opacity utility such as
  `bg-paper/[0.82]`.
- The responsive breakpoint is `md` (768px), matching the original design: below
  it the nav links hide, the portrait shrinks to 176px and every grid collapses
  to one column.
- Scroll reveal degrades gracefully — content is fully visible when JS is
  unavailable, when `IntersectionObserver` is missing, or when the visitor
  prefers reduced motion.
- No client-side router, so GitHub Pages needs no `404.html` fallback.
- The project deliberately carries no UI component library; `shadcn/ui` was
  removed because nothing imported it. Re-add with `npx shadcn@latest init` if
  you ever need it.
