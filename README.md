# Benediction — Personal Portfolio

A modern, high-performance, responsive personal portfolio website for **Benediction**, Computer Science student at Accra Technical University and aspiring software developer.

Built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4**.

---

## Live Deployments & URLs

- **Development Preview URL**: [https://ais-dev-6nn5nqqrx4lt3wlhxrwfbc-414048251302.europe-west1.run.app](https://ais-dev-6nn5nqqrx4lt3wlhxrwfbc-414048251302.europe-west1.run.app)
- **Shared App URL**: [https://ais-pre-6nn5nqqrx4lt3wlhxrwfbc-414048251302.europe-west1.run.app](https://ais-pre-6nn5nqqrx4lt3wlhxrwfbc-414048251302.europe-west1.run.app)

---

## Project Status: All 12 Segments Completed

1. **Segment 1**: Environment Inspection & Project Structure — **Done**
2. **Segment 2**: Design System & Styling Foundations — **Done**
3. **Segment 3**: Responsive Navigation Bar & Mobile Menu — **Done**
4. **Segment 4**: Homepage & Hero Section — **Done**
5. **Segment 5**: About Me Section — **Done**
6. **Segment 6**: Skills & Technologies — **Done**
7. **Segment 7**: Projects & Experiments — **Done**
8. **Segment 8**: Experience & Learning Journey — **Done**
9. **Segment 9**: Contact Section & Direct Communication — **Done**
10. **Segment 10**: Footer & Final Visual Polish — **Done**
11. **Segment 11**: Testing, Optimization & Deployment Readiness — **Done**
12. **Segment 12**: Deployment & Publishing Preparation — **Done**

---

## Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`typescript` v7.0.2)
- **Build Tool**: Vite 8 with Rolldown / ESBuild
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React (`lucide-react`)
- **Accessibility**: WCAG 2.1 AA compliant, `.focus-ring`, reduced-motion support

---

## Project Structure Overview

```text
├── public/                # Static assets (images, documents, favicon, icons)
├── src/
│   ├── assets/            # Bundled images, icons, and fonts
│   ├── components/        # Reusable UI & layout components (Navbar, Footer, BackToTop)
│   ├── sections/          # Portfolio sections (Hero, About, Skills, Projects, Experience, Contact)
│   ├── pages/             # Page containers
│   ├── styles/            # Theme tokens (theme.ts) and index.css
│   ├── data/              # Typed data models (profile, about, skills, projects, experience, contact)
│   ├── utils/             # Helper utilities (cn.ts)
│   ├── App.tsx            # Main root application orchestrator
│   ├── main.tsx           # React entry point
│   └── index.css          # Tailwind CSS global styles & theme tokens
├── docs/
│   ├── PROJECT_ROADMAP.md # 12-segment roadmap
│   ├── DEVELOPMENT_RULES.md # 18 mandatory development rules
│   ├── ARCHITECTURE.md    # Architecture and technical blueprint
│   └── DESIGN_SYSTEM.md   # Design tokens & typography guide
├── vercel.json            # Vercel SPA routing configuration
├── netlify.toml           # Netlify SPA routing configuration
├── package.json
└── vite.config.ts
```

---

## Local Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Type check & lint
npm run lint

# 4. Compile optimized production build
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## Free External Hosting Deployment Guides

The project is fully pre-configured for instant zero-config deployment on any leading free static web host:

### Option A: Deploy to Vercel (Recommended)
1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your repository.
4. Vercel will automatically detect **Vite** and configure `npm run build` and `dist` output.
5. Click **"Deploy"**. Your site will be live on a free `*.vercel.app` domain in seconds!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Click **"Add new site"** > **"Import an existing project"** and select your GitHub repository.
3. The included `netlify.toml` automatically specifies build command `npm run build` and publish directory `dist`.
4. Click **"Deploy site"**. Your site will be live on a free `*.netlify.app` domain.

### Option C: Deploy to GitHub Pages
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Choose the standard **Static HTML** or **Node.js** workflow to publish the `dist/` folder on push.
