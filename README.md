# SkyAir Courier Landing Page

Single-page React landing site for **SkyAir Courier**, built with:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)

## Setup

```bash
npm install
npm run dev
```

Then open the printed localhost URL in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

Enjoy! ✈️

## Deploying to Vercel

1. Install the [Vercel CLI](https://vercel.com/docs/cli) if you plan to deploy from your terminal: `npm i -g vercel`.
2. Run `vercel` and follow the prompts, or connect the repository to Vercel from the dashboard.
3. Ensure the **Build Command** is set to `npm run build` and the **Output Directory** is `dist` (already configured in `vercel.json`).
4. For single-page routing, the included `vercel.json` rewrites all paths to `index.html`.

Once deployed, Vercel will automatically rebuild the site on every push to the linked branch.
