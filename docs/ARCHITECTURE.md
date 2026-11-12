# Saffron architecture

Saffron is a front-end concept: a fine-dining restaurant site with a menu, gallery and reservation form. It isn't a real restaurant.

## Components

| Part | What it does |
| --- | --- |
| `src/App.jsx` | Page order; the root element is `#top` |
| `PortfolioNotice.jsx` | Demo notice with links to the portfolio |
| `Navbar.jsx` | Scrolls to `#about`, `#menu`, `#gallery` and `#reserve` |
| `Menu.jsx`, `Gallery.jsx`, `About.jsx` | Content sections (images from Unsplash) |
| `Reservation.jsx` | Booking form; tries `POST /api/reserve.php`, and when that fails (as it always does on GitHub Pages) shows a simulated success |
| `Footer.jsx` | Section links, the portfolio credit and the Unsplash credit |
| `api/reserve.php` | Optional PHP endpoint for local experiments |

## Data flow

Static content in the components. The only request is the reservation POST, which has no server on GitHub Pages and falls back to a fake confirmation.

## Hosting

GitHub Pages through `.github/workflows/deploy.yml`: every push to `main` runs `npm ci && npm run build` and deploys `dist/`. Vite's `base` is `/saffron-restaurant/`.

## Key decisions

- **No real backend.** The demo has to cost nothing to host, so the form simulates success instead of storing anything.
- **Footer links only point at sections that exist.** Social links for a fictional restaurant were replaced with the portfolio credit and the photo credit.
- Known cleanup: `node_modules/` is committed to the repo. The CI build does a clean `npm ci`, so it's unused weight and can be removed in a later change.

## Links

- Live demo: https://youssefabotaleb20.github.io/saffron-restaurant/
- Portfolio (the site this demo is shown on): https://youssefabotaleb20.github.io/Portfolio/
- Every "View my portfolio" or "Built by Youssef Abotaleb" link in the demo points to the portfolio. There are no Linktree links any more (changed 2026-11-12).
