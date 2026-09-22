# Sanjai Ragunath — Portfolio

A responsive, interactive UI/UX portfolio with a 3D hero visual and live, embedded previews of real deployed projects.

## Structure

```
sanjai-portfolio/
├── index.html        All page content and section markup
├── css/
│   └── styles.css    Design tokens, layout, responsive rules
├── js/
│   └── script.js     Nav toggle + the 3D hero (Three.js)
└── README.md
```

## Running it locally

No build step. Open `index.html` directly in a browser, or serve the folder:

```
npx serve .
```

## Deploying

Drag the folder into Netlify/Vercel, or push it to a static host (GitHub Pages, Cloudflare Pages, etc.) — it's plain HTML/CSS/JS.

## Live project embeds

Five projects are embedded as scaled, live iframes of the real deployed sites (Sana AI, INAI Connect, PlayNlearn, Vibe Editors) plus a live Figma canvas embed (TGP Compliance Hub). Each has an "Open" link as a fallback in case a site blocks iframe embedding in the future.

To swap a project link, edit the matching `<article class="project">` block in `index.html` — update the `embed-url` text and both the `href` and `iframe src`.

## Design notes

- Palette: paper `#EEF0EA`, ink `#16181B`, violet accent `#4B3E86`, rust accent `#B8452B`.
- Type: Fraunces (display) + Inter (body), loaded from Google Fonts.
- The 3D wireframe in the hero (Three.js) is the one bold interactive moment; the rest of the page stays quiet and editorial on purpose.
