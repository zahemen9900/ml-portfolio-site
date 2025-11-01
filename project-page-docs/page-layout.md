## 🎨 Projects Page Layout Plan — Draft Overview

> **Note:** This is a conceptual draft for the overall layout and experience design of the **Projects Page** in David Zahemen’s portfolio. It outlines structure, motion flow, and interactivity, leaving room for creative flexibility during implementation.

---

### 🏁 **Opening Section — Professional but Evocative Intro**

**Goal:** Immediately establish professionalism, curiosity, and innovation without clichés.

**Opening Statement Example:**

> Every project is a story — not just of code, but of curiosity, persistence, and impact. These are the systems I’ve built to push boundaries in AI, empower learning, and explore what’s possible when data meets design.

**Layout & Animation:**

* Full-width intro card with soft gradient overlay.
* Subtle fade-in and text reveal using Framer Motion (`opacity + y offset`).
* Background: faint animated texture or motion gradient consistent with the app’s blue-based palette.

---

### 🧩 **Projects Gallery Section — Alternating Interactive Cards**

**Core Concept:**
Each project is presented as a **large alternating card** with a gradient-on-hover effect and an integrated preview of the app’s landing page. Cards alternate between left and right alignment for visual rhythm.

**Layout Structure:**

```
----------------------------------------------------------
| [Image / App Preview] [Card Content & Overlay Gradient] |
----------------------------------------------------------
```

* The **app preview** (screenshot, looping video, or hero section capture) occupies one side of the card (alternating between right and left).
* The **card content** (project title, one-liner description, CTA) fades seamlessly into the app preview image through a semi-transparent gradient overlay.
* On hover, the gradient shifts subtly, colors intensify slightly, and the image regains full opacity for a dynamic, polished look.

**Card Elements:**

* **Title:** Large, bold (e.g., *BioQuery*).
* **Tagline:** A single impactful line summarizing the project.
* **Short Description:** Two-sentence overview.
* **CTA:** “View Project →” button triggering view transition.

**Animation Behavior:**

* Hover → gradient intensifies, text slides slightly upward.
* Click → triggers Framer Motion **shared element transition** into the project’s mini sub-page.

---

### 🌀 **Transitions & Visual Flow**

**View Transitions:**

* When a card is clicked, it expands into a **full sub-page view** using `framer-motion`'s `LayoutId` transitions.
* The image or video in the card smoothly animates into the sub-page’s hero section.
* Subtle blur and opacity fade for background elements during transition.

**Scroll Flow:**

* Cards appear sequentially with staggered fade-up motion as users scroll.
* Framer Motion `whileInView` triggers to animate entry.

**Color Strategy:**

* Maintain the overall **blue-centric theme** of the site.
* Each card can use *complementary or analogous gradient hues* to subtly differentiate projects (e.g., blue-violet, cyan, teal), avoiding strict color coding but preserving harmony.

---

### 🧭 **Section Order & Spacing**

1. **Intro Statement Section** (described above)
2. **Project Cards Grid (Alternating Layout)**

   * Card 1: BioQuery
   * Card 2: FinSightAI
   * Card 3: AdaptIQ
   * Card 4: RobinAI
   * Card 5: Asaphic (locked preview state)
3. **Closing Section:** Brief reflection or call-to-collaboration.

**Example Closing Line:**

> These projects are more than milestones — they’re experiments in shaping intelligent, creative, and useful technology.

---

### 💫 **Technical & UX Implementation Notes**

| Element               | Recommendation                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| **Layout Framework**  | CSS Grid or Flexbox with alternating direction (based on index parity).                         |
| **Motion Library**    | Framer Motion (`LayoutId`, `AnimatePresence`, `whileInView`).                                   |
| **UI Components**     | ShadCN Cards, Buttons, Hover gradients, Dialog for details.                                     |
| **Preview Media**     | Use compressed MP4/WebM loops or animated screenshots for performance.                          |
| **Accessibility**     | Gradient contrast should maintain legibility; hover effects respect reduced motion preferences. |
| **Responsive Design** | On mobile: cards stack vertically; previews shift to top with gradient overlay beneath text.    |

---

### 🔒 **Special Handling: Asaphic Preview Card**

* **Design:** Locked or dimmed gradient with “Preview Coming Soon” label.
* **Hover Behavior:** Gentle tilt animation + blurred background reveal.
* **CTA:** Disabled or links to a short blurb modal about the ongoing development.

---

### 🧠 **Enhancement Ideas**

* Add a **smooth trail cursor** effect for interactivity.
* Subtle **particle motion** background that reacts to hover or scroll.
* Integrate a **light noise texture overlay** for depth.
* Optionally use **Magnetic Hover** effects (slight cursor attraction to elements) for a tactile feel.

---

### ✅ **Summary**

The Projects Page will balance professional presentation with interactive storytelling. The **alternating gradient-on-hover cards** create rhythm and visual interest, while **shared view transitions** deliver a seamless experience from overview to detail. The design will feel modern, fluid, and consistent with the site’s overall blue-toned identity — professional, yet lively and dynamic.

> *End of Layout Draft — ready for refinement once we begin crafting individual project sub-pages.*
