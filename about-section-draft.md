## 🧭 Draft Timeline Write-up for About Page (Interactive Version)

> **Note:** This is a draft structure that can be improved upon during implementation. The goal is to design an *interactive, visually engaging timeline* that blends storytelling, motion, and imagery to showcase David Zahemen Yeboah’s journey as an AI & Software Engineer.

---

### **Intro Section (Framer Motion Fade-In + Staggered Text Reveal)**

**Component Type:** ShadCN `Card` + Framer Motion `AnimatePresence`

> During my time at **KNUST (Kwame Nkrumah University of Science and Technology)**, I’ve majored in *Software Engineering, Artificial Intelligence, and Cybersecurity*. My journey there sparked a deep interest in building systems that learn and adapt — from early experiments with transformers to launching full-scale AI applications. Beyond academics, I’ve been actively involved in community projects and hackathons that connect innovation with real-world impact.

Transition: *Smooth fade-in from bottom + slight text stagger to emphasize rhythm.*

---

### **Community Engagement with GhanaNLP (2024 – Present)**

**Component Type:** Interactive Timeline Item + Expandable Image Carousel

**Transition Effect:** *Slide-in from left + fade background overlay when expanded*

**Description:**

> I’ve been fortunate to collaborate with **GhanaNLP**, contributing to projects focused on democratizing NLP tools for African languages. Our goal was to make machine learning models more inclusive and representative of local dialects. My involvement ranged from dataset curation and model fine-tuning to deploying APIs that bring these models closer to the people who need them most.
>
> This initiative solidified my passion for responsible AI — ensuring that technology doesn’t just speak for the world but also *understands* it.

**Visuals:**

* Expandable **gallery timeline preview** using a ShadCN `Dialog` with a `Carousel` component.
* Images: team collaborations, community events, dataset annotation sessions.

**Interactive Elements:**

* Hover = preview images.
* Click = expands to modal with lightbox gallery (Framer Motion zoom-in transition). Show one picture on the first stack, and can be expanded to see more; do a similar thing for the others

---

### **Hackathon: INNGEN Tech Week (TWEEK 2024)**

**Component Type:** ShadCN `Timeline` node + `Card` with layered parallax effect

**Transition Effect:** *Parallax scroll + fade overlay when card enters viewport*

**Description:**

> During **INNGEN Hackathon (TWEEK 2024)**, my team and I were tasked with creating a **universal document understanding model** capable of analyzing and interpreting complex documents like PDFs and scanned images. We built our solution using **LayoutLMv2**, integrating multiple components such as preprocessing, feature extraction, and post-processing to create a full document pipeline.
>
> Our model could extract structured information — like text, entities, and layout relationships — with high accuracy on the **FUNSD dataset**, making it useful for applications like invoice automation, legal document parsing, and business intelligence. This was my first deep dive into **multimodal transformers**, where I learned to combine text, vision, and spatial features for document-level understanding.
>
> We finished among the **Top 5 teams**, proving that innovation and precision can come together in record time.

**Visuals:**

* Horizontal **scroll gallery** below the text, showing team collaboration, whiteboard sessions, and document model demos.
* Light motion blur effect to evoke a sense of technical focus and progress.

**Interactive Elements:**

* Hover = parallax lift on the card.
* Click = open full `Dialog` with image gallery and detailed write-up.

---

### **NASA Space Apps Challenge (Kumasi, 2025)**

**Component Type:** Hero Timeline Card + Dual-Layer Gallery with Expandable Modal

**Transition Effect:** *Slide-in from right + motion blur overlay + subtle confetti animation on load*

**Description:**

> In **October 2025**, I participated in the **NASA Space Apps Challenge (Kumasi)** as part of Team *Astro-Voyagers*, where we built **BioQuery** — an AI-powered Space Biology Knowledge Engine that transforms over 600 NASA bioscience publications into an intelligent search experience. The project won the **Galactic Impact Award**, honoring solutions that advance humanity’s journey beyond Earth.
>
> BioQuery was built using **Retrieval-Augmented Generation (RAG)**, **Cohere embeddings**, and **knowledge graphs**, allowing scientists to ask natural questions and instantly discover insights about how life adapts beyond our planet.
>
> That weekend taught me what’s possible when AI meets ambition — a fusion of science, code, and purpose.

**Visuals:**

* Embedded short clip or image carousel of the hackathon, team presentation, and the award moment.
* Overlay of NASA Space Apps Kumasi logo for subtle branding.

**Interactive Elements:**

* Image gallery expands via ShadCN `Dialog` using a Framer Motion spring animation.
* Optional “Learn more” button linking to BioQuery’s website.

---

### **Closing Statement (Fade-up + Text Type Animation)**

**Component Type:** `Card` + Type Animation Text

> From campus labs to hackathon floors and international competitions, my journey has been about one thing — using **AI to make impact**. I’ve learned that the most powerful systems aren’t just intelligent — they’re *purpose-driven*.

**Transition:** Gentle fade-up with delayed typewriter animation for the final line:
“Here’s to building the next generation of intelligent systems that learn, adapt, and inspire.” ⚡

---

### **Implementation Notes:**

* Use **ShadCN/UI** for all cards, dialogs, and timelines for consistency.
* Manage animations using **Framer Motion** (variants for stagger, fade, and parallax effects).
* Consider **React Intersection Observer** to trigger animations when each section scrolls into view.
* Store images in `/public/images/timeline/` and reference them dynamically.
* Add a fallback for low-motion users (reduce heavy animation intensity).

---

**Next Steps:**

* Collect curated images from GhanaNLP, INNGEN, and NASA Space Apps.
* Review timeline tone — ensure the language reflects authenticity and enthusiasm.
* Add personal touch quotes or reflections between sections for warmth and personality.

---

> *End of Draft — ready for refinement and visual alignment once assets (images, colors, animations) are finalized.*
