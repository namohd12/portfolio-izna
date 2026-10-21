# Nor Izna Mohd Isa — Professional Portfolio

A responsive, single-page React + TypeScript portfolio, built with Vite. Content is derived from both pages of the supplied résumé. The visual direction follows the supplied editorial reference: warm white, muted sage, generous spacing, refined serif headings and a restrained career timeline.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production build is in `dist/`. No backend or environment variables are needed.

## Update content

- Edit `src/data.ts` for professional information, work, skills, projects and contacts.
- Edit `src/styles.css` for design tokens and responsive styling.
- Replace `public/nor-izna-resume.pdf` to update the download. The supplied download omits the résumé's mobile number, address line and reference section; professional content, email and LinkedIn are retained.
- The supplied portrait is optimised as `public/images/nor-izna.webp`.
- Decorative project photography is from Unsplash; it illustrates subject areas and does not depict client work. Attribution is in `public/images/credits.txt`.
- Update the canonical URL, structured data and Open Graph URLs in `index.html` when moving to another domain.
- Open Graph previews on third-party services require a publicly accessible site. The Sites deployment starts private.

## Deploy

Sites publishing uses the existing identity in `.openai/hosting.json` and publishes the static `dist` directory.

For Vercel, import the repository, choose the Vite preset, use `npm run build` as the build command and `dist` as the output directory. For Netlify, use the same build command and publish directory. For GitHub Pages, set Vite's `base` to the repository subpath if applicable, and upload `dist` using the official Pages workflow. Root-absolute asset URLs must also use that subpath for a project Pages deployment; a custom domain or root deployment works without changes.

## Verification

`npm run build` checks TypeScript and produces the production build. Browser smoke checks are in `scripts/smoke.mjs`; run a preview on port 4173, then `node scripts/smoke.mjs` using an installed Microsoft Edge browser. They cover desktop/mobile navigation, project disclosures, résumé download, reduced motion and horizontal overflow.
