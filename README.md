# ICHAPPI CREATIVE Portfolio

A responsive, static portfolio website for a graphic designer and web developer.

## Files
- `index.html` — page structure and project links
- `style.css` — responsive visual design
- `script.js` — mobile navigation, gallery filters and image lightbox
- `assets/` — supplied poster/design images

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Publish on Firebase Hosting
1. Put the contents of this folder in your Firebase Hosting public directory (or set this folder as `public` in `firebase.json`).
2. Run `firebase deploy --only hosting`.

## Customize before publishing
In `index.html`, replace:
- `your-email@example.com` with your actual email address.
- Instagram profile link with your actual profile URL.
- The display name or tagline if needed.

The project URLs currently point to the seven live websites supplied by the owner. The skill list is editable; keep only technologies you have actually used.

## Notes
The contact link currently opens an email draft. A working database-backed contact form would require a backend or form service.


## Update: PNG icons and mobile-first layout
- Replaced the text-only Photoshop and Illustrator hero marks with local PNG image assets.
- Replaced the software text labels in the Graphic Design skills panel with PNG images for Photoshop, Illustrator, and Canva.
- Removed the Adobe Premiere Pro (Pr) icon from the design skills section.
- Rebuilt the stylesheet mobile-first: small-screen styles are the defaults, with `min-width` breakpoints for tablet and desktop layouts.
- All icon images are stored locally in `assets/`.
