# Anas Mirza - Portfolio

A responsive, dark galactic portfolio built with Next.js, TypeScript, Tailwind CSS,
Framer Motion, Three.js, and React Three Fiber.

## Requirements

- Node.js 18.17 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the Next.js linter |

## Project structure

- `app/` - Next.js app routes and global styles
- `components/` - Portfolio sections and the Three.js scene
- `data/portfolio.ts` - Profile, projects, experience, education, and links
- `public/` - Static assets

## Customizing the portfolio

Update `data/portfolio.ts` to change the portfolio content. Before publishing, verify
the contact links, project repository URLs, internship dates, CGPA, certification
details, and any research links.

## Deployment

The site can be deployed to Vercel using the default Next.js settings. No
environment variables are required for the current static portfolio.
