# Development Roadmap

## Sprint 1: Project Foundation

- **Goal:** Initialize Next.js workspace, tooling, and shared configs.
- **Implementation Tasks:**
  - Scaffold Next.js 15 App Router project with TypeScript.
  - Configure TailwindCSS with base theme tokens from the plan.
  - Install ShadCN/UI and generate initial component folders.
  - Add dependencies for Framer Motion, Resend or Nodemailer, and Contentlayer.
  - Set up base GitHub repository structure with CI lint/test workflow.
- **Dependencies:** None.
- **Deliverables:** Running Next.js app with Tailwind, ShadCN generator ready, CI pipeline, shared dependency baseline.

## Sprint 2: Global UI and Layout System

- **Goal:** Establish global styling, navigation shell, and design tokens.
- **Implementation Tasks:**
  - Implement root layout with gradient background and typography setup.
  - Create reusable components such as Navbar, Footer, and CTA buttons using ShadCN.
  - Configure Tailwind theme extensions for colors, radii, and shadows.
  - Add global motion primitives (fade and scale variants) via Framer Motion.
- **Dependencies:** Sprint 1.
- **Deliverables:** Fully styled layout shell, global theme tokens, shared motion configurations.

## Sprint 3: Homepage Experience

- **Goal:** Build hero, intro, and tech banner interactions for the homepage.
- **Implementation Tasks:**
  - Implement hero section with dynamic background animation.
  - Add bio snippet, CTAs, and responsive layout.
  - Create tech logo marquee or banner with hover animations.
  - Configure page-level SEO metadata placeholder.
- **Dependencies:** Sprint 2.
- **Deliverables:** Responsive homepage matching plan with animations and CTAs.

## Sprint 4: About Page and Timeline

- **Goal:** Deliver About content with timeline, skills, and awards.
- **Implementation Tasks:**
  - Build "Who I Am" section using typography presets.
  - Implement vertical timeline using ShadCN Timeline component.
  - Create skills grid with categories and badges.
  - Add awards list with iconography.
- **Dependencies:** Sprint 2.
- **Deliverables:** Fully responsive About page with interactive timeline and skills grid.

## Sprint 5: Projects Grid and Modal Interactions

- **Goal:** Implement projects page with interactive cards and detail modals.
- **Implementation Tasks:**
  - Build project cards grid leveraging Tailwind utilities.
  - Wire Framer Motion entrance animations for the grid.
  - Implement ShadCN Dialog full-screen modals with content per project.
  - Add tag chips, metrics, and external links.
- **Dependencies:** Sprint 2.
- **Deliverables:** Animated projects page with populated modals for all four projects.

## Sprint 6: Blog System Integration

- **Goal:** Enable MDX or Contentlayer blog workflow.
- **Implementation Tasks:**
  - Configure Contentlayer for the blog collection.
  - Create MDX components for typography and code blocks.
  - Build blog index page with cards and motion transitions.
  - Implement dynamic blog post route with SEO metadata and reading progress.
- **Dependencies:** Sprint 1 (packages) and Sprint 2 (layout components).
- **Deliverables:** Contentlayer pipeline, blog index, and sample posts rendered with styling.

## Sprint 7: Contact Page and Messaging Backend

- **Goal:** Build contact interface with functional email delivery.
- **Implementation Tasks:**
  - Design two-column contact card with info and social links.
  - Implement form with validation, loading states, and success/error toasts.
  - Create Next.js API route using Resend or Nodemailer.
  - Add rate limiting or basic spam prevention.
- **Dependencies:** Sprint 1 (packages) and Sprint 2 (global styles).
- **Deliverables:** Contact page with working email submission flow and feedback states.

## Sprint 8: SEO, Analytics, QA, and Deployment

- **Goal:** Final polish, observability, and deployment.
- **Implementation Tasks:**
  - Configure next-seo defaults and per-page overrides.
  - Integrate Vercel Analytics or Plausible snippet.
  - Run accessibility and performance audits; address issues.
  - Set up environment variables and deploy to Vercel with preview and live checks.
- **Dependencies:** All prior sprints.
- **Deliverables:** SEO-ready site, analytics enabled, audited build deployed on Vercel.

## Roadmap Summary

| Sprint | Goal | Duration | Key Deliverables |
|--------|------|----------|------------------|
| Sprint 1 | Project Foundation | 3 days | Next.js app, Tailwind, ShadCN, CI |
| Sprint 2 | Global UI and Layout System | 3 days | Layout shell, theme tokens, navigation |
| Sprint 3 | Homepage Experience | 3 days | Animated hero, CTAs, tech banner |
| Sprint 4 | About Page and Timeline | 3 days | Timeline, skills grid, awards section |
| Sprint 5 | Projects Grid and Modal Interactions | 4 days | Animated cards, modal details |
| Sprint 6 | Blog System Integration | 4 days | Contentlayer setup, blog index/posts |
| Sprint 7 | Contact Page and Messaging Backend | 3 days | Contact card, API email flow |
| Sprint 8 | SEO, Analytics, QA, and Deployment | 3 days | next-seo config, analytics, Vercel launch |

## Optional Stretch Sprint

- **Enhancements:** Add dark/light theme toggle, AI chatbot assistant section with custom agent UI, and live ML model demo using Hugging Face Spaces or hosted endpoints with streaming status.
