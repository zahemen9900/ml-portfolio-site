## 🧑‍💻 David Zahemen | AI & Software Engineer Portfolio Structure

### 🏠 Homepage (`/`)

**Tagline:** "Building intelligent systems that learn, adapt, and inspire."

**Bio Section:**

> I'm out here tryna make an impact with software & AI — turning curiosity into creation. Whether it's crafting AI-powered learning systems, fine-tuning language models, or building tools that push human potential, I’m passionate about bridging intelligence and usability through code. I believe in technology that empowers, educates, and inspires.

**Sections:**

* Hero with dynamic background animation (Framer Motion gradient or particle motion).
* Short intro and CTA buttons: [View My Work] [Get In Touch]
* Tech banner: logos for Python, React, Next.js, PyTorch, TensorFlow, Supabase, Firebase, Docker, AWS, Hugging Face, Cohere.

**Theme:**

* Subtle gray gradient background (gray-900 → gray-800)
* ShadCN components for UI (Buttons, Cards, Modals, Tabs)
* Rounded edges (2xl radius), light shadowing
* Motion effects: fade-ins, gentle scaling

---

### 🧠 About Page (`/about`)

**Sections:**

* **Who I Am:** Short paragraph about being an AI & Software Engineer specializing in LLMs, MLOps, and Intelligent Learning Systems.
* **Timeline/Experience:** Interactive vertical timeline using ShadCN `Timeline` component.

  * FinSightAI (2025 – Present)
  * RobinAI (2025 – Present)
  * AdaptIQ (2024 – 2025)
  * BCG Internship (2024)
* **Skills Grid:**

  * ML/AI: Transformers, PEFT, RAG, QLoRA, Cohere, Hugging Face
  * Software: React, Next.js, Flutter, Supabase, Firebase
  * MLOps: Docker, AWS, SageMaker, GCP, Azure
  * Data: SQL, Pandas, Spark
* **Awards & Recognition:**

  * 🏆 Galactic Impact Award – NASA Space Apps Kumasi 2025
  * 🥇 Top 5 – INNGEN Hackathon (KNUST)

---

### 🚀 Projects Page (`/projects`)

**Structure:**
Grid of project cards → each opens in a full-page modal (Framer Motion + ShadCN `Dialog`)

#### 🧩 FinSightAI

* Fine-tuned financial LLM (~2B parameters) using QLoRA + PEFT
* 45% performance improvement, 60% faster inference
* Demo: Hugging Face + Colab
* Tags: LLM, Finance, Fine-Tuning, RAG, Hugging Face

#### 🚀 BioQuery

* AI-powered Space Biology Knowledge Engine
* Transforms 600+ NASA bioscience papers into an interactive, queryable RAG engine
* Built with Cohere embeddings, Knowledge Graphs, and Next.js
* Won Galactic Impact Award @ NASA Space Apps Kumasi 2025
* Tags: RAG, Space Research, Knowledge Graphs, Cohere

#### 🎓 AdaptIQ

* AI learning platform with Gemini tutors, intelligent scheduling, and adaptive learning
* Used by 500+ users; improved learning retention significantly
* Stack: React, Firebase, Gemini API, React Query
* Tags: AI Learning, Gemini, React, Firebase

#### 💻 Robin AI

* AI-powered web IDE combining Ask→Apply agent flow, inline diffs, and live previews
* Built with Flutter + Supabase + WebContainers
* 45% faster idea-to-preview time
* Tags: AI IDE, Supabase, Agent Systems, WebContainers

---

### ✍️ Blog Page (`/blog`)

**Powered by:** MDX / Contentlayer

* Sample posts:

  * Enhancing Financial Domain Performance of Small LLMs
  * Building Robin: A Chat-Embedded IDE
  * Using RAG to Power Space Bio-Research

Each post includes syntax highlighting, inline code blocks, and responsive design.

---

### 📬 Contact Page (`/contact`)

**Layout:**
Two-column card (ShadCN `Card` component)

* **Contact Info:**

  * Address: AH-16293124, Kwadaso, Kumasi
  * Phone: +233 598 020 802
  * Email: [davidzahemenyeboah@gmail.com](mailto:davidzahemenyeboah@gmail.com)
* **Social Links:** GitHub, LinkedIn, Hugging Face
* **Form:** Integrated with Next.js API route (Nodemailer / Resend)

---

### 🎨 Design System & UX Notes

* **Theme:** Subtle gray background (gray-900 base, gray-800 surfaces, gray-700 text highlights)
* **Typography:** `Inter` for text, `Space Grotesk` for headers
* **Animations:** Framer Motion transitions on scroll, modal open/close, and hover
* **Components:** Built with ShadCN/UI (Buttons, Cards, Dialogs, Tabs, Timeline)
* **Accessibility:** Keyboard navigation, reduced motion option

---

### 🧩 Technical Stack Overview

| Purpose    | Tool                     |
| ---------- | ------------------------ |
| Framework  | Next.js 15 (App Router)  |
| UI Library | ShadCN/UI + Tailwind CSS |
| Animations | Framer Motion            |
| SEO        | next-seo                 |
| Hosting    | Vercel                   |
| Analytics  | Vercel Analytics         |
| Blog       | MDX / Contentlayer       |
| Email      | Resend / Nodemailer      |

---

### ✅ Summary

A sleek, interactive portfolio built for showcasing AI/ML projects with elegance and motion. The site uses a clean gray palette, smooth animations, and powerful storytelling to reflect technical depth and creativity — just like the work it represents.
