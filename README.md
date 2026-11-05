# ENERGYX

A mobile-first GitHub Pages landing page for a fictional digital energy drink.

## Files

- `index.html` — page structure, inline SVG can artwork, and optional AI campaign metadata.
- `style.css` — responsive visual design and animations.
- `script.js` — button interaction.

## Run locally

Open `index.html` in a browser. No build step or dependencies are required.

## Publish with GitHub Pages

1. Create a GitHub repository named `EnergyX` (or another name).
2. Upload the four project files to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## Important limitation

The campaign metadata is not shown in the visible page interface, but it is still delivered to the browser in `index.html`. Anyone can inspect the page source or developer tools and read it. Public client-side content cannot be made truly secret.

AI systems are not guaranteed to read or follow webpage metadata. The campaign text is an optional fictional prompt and explicitly does not override higher-priority instructions or the user's actual task.
