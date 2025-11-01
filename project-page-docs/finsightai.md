## 💸 FinSightAI Project Page — Advanced Draft (Technical Showcase Edition)

> **Note:** This is an enhanced design draft for the **FinSightAI** project sub-page, focusing on an interactive and data-rich experience. This version integrates technical results, visual charts, and scroll-based animations inspired by your research paper.

---

### ⚡ **Hero Section — Precision Meets Intelligence**

**Goal:** Immediately establish FinSightAI as a high-precision, research-backed model — sleek, technical, and trustworthy.

**Layout:**

* Full-width looping background video showing abstract data flow or neural network visualizations fading into financial charts.
* Title: **“FinSightAI: Small Models. Big Financial Insight.”**
* Subtext: *Fine-tuning SmolLM2 with QLoRA to redefine domain-specific reasoning in finance.*
* CTA Buttons: [View Model on Hugging Face] [Read Model Paper]

**Visuals & Motion:**

* Background gradient pulses slowly like data throughput.
* Hero text animates with glow transitions and slight zoom-in on scroll.
* Framer Motion blur-fade for entry, subtle parallax on scroll.

---

### 📘 **Introduction & Purpose**

> **FinSightAI** was engineered to bring financial literacy and analytical depth to smaller, efficient models. Through **QLoRA fine-tuning**, it bridges the gap between performance and practicality — delivering enterprise-grade financial reasoning with minimal hardware requirements.
>
> Designed for advisory systems, report summarization, and real-time financial chat agents, FinSightAI’s architecture proves that *you don’t need massive compute to achieve massive insight.*

**Animation:** Smooth fade-in from left; animated visualization (floating tokens morphing into a graph line).

---

### 🧠 **Architecture Overview (QLoRA Fine-tuning)**

A technical breakdown, visually simplified for aesthetic impact.

**Layout:** Split view — diagram on right, technical breakdown text on left.

**Description:**

> FinSightAI builds upon **SmolLM2 (1.7B parameters)**, fine-tuned using **QLoRA**, **PEFT**, and **UnSloth**. The result is a model capable of advanced financial reasoning while remaining highly efficient.

**Animated Diagram Elements:**

* Animated QLoRA pipeline (quantization blocks + adapter layers flowing into output node).
* On-hover tooltips: Quantization, LoRA rank, adapter layers.
* Smooth transitions triggered on viewport.

---

### 📊 **Performance & Evaluation Section (Charts Carousel)**

**Goal:** Showcase measurable improvements interactively.

**Layout:** Horizontal sliding carousel (Snap or Framer Motion-based), each slide focusing on one visualization.

**Images:**

1. `radar_chart_20250306_121621.webp` — Overall metric distribution (animated zoom reveal).
2. `rouge1_comparison_20250306_121621.webp`
3. `rouge2_comparison_20250306_121621.webp`
4. `rougeL_comparison_20250306_121621.webp`
5. `bleu_comparison_20250306_121621.webp`
6. `response_distributions_20250306_121621.webp`
7. `overall_improvements_20250306_121621.webp`

**Interactions:**

* Slides move horizontally with scroll or drag gestures.
* Smooth fade transition + blur background between images.
* Caption animation: metric titles type out dynamically (e.g., *BLEU: +135.36% improvement*).

**Supporting Text:**

> FinSightAI achieved consistent, multi-dimensional improvements across all metrics — especially in precision-oriented ones like **BLEU (+135%)** and **ROUGE-2 (+79%)**, affirming the strength of QLoRA for financial domain specialization.

---

### 🧩 **Core Insights & Model Efficiency**

**Subsections (with iconography):**

1. **🧮 Efficient Fine-tuning**  — Fine-tuned on RTX 3050 GPU, completed within 8 hours.
2. **⚙️ Parameter Efficiency** — Only 280MB of additional storage through adapters.
3. **📈 Precision Boost** — Outperforms base SmolLM2 by up to 68% on BLEU.
4. **⚡ Inference Speed** — Retains near-identical latency to base model.

**Motion:** Cards enter staggered, glowing gradient on hover (ShadCN card style).

---

### 🔬 **Technical Architecture Snapshot**

| Component               | Description                           |
| ----------------------- | ------------------------------------- |
| **Base Model**          | SmolLM2-1.7B-Instruct                 |
| **Fine-tuning Method**  | QLoRA + PEFT + UnSloth                |
| **Quantization Format** | 4-bit NF4 (NormalFloat)               |
| **Training Hardware**   | NVIDIA RTX 3050 (6GB VRAM)            |
| **Training Time**       | ~8 hours                              |
| **Data Tokens**         | 16.5M tokens from 10.9K conversations |

**Visual:** Animated schematic of model layers (input → adapter → quantized weights → output), with glowing activations.

---

### 📈 **Interactive Comparison Section**

**Goal:** Let users visualize the before/after effect interactively.

**Component Idea:**

* Split-screen comparison (draggable divider): left shows base model output, right shows FinSightAI output.
* Example queries: *“Explain price-to-earnings ratio”* or *“Summarize Tesla’s 10-K highlights.”*

**Motion:** Smooth clip-path reveal + interactive slider.

---

### 🧩 **Research Integration (Model Paper)**

> The FinSightAI paper, *“Enhancing Financial Domain Performance of Small Language Models Through QLoRA Fine-tuning”*, documents the entire fine-tuning pipeline — from dataset construction to evaluation.

**Action Buttons:** [Read Full Paper] [Download PDF]

**Snippet Box:** Include key excerpts with smooth scroll fade-in:

> “FinSightAI achieves a balance between compactness and capability — proving that small models, fine-tuned intelligently, can rival larger architectures in specialized reasoning.”

**Motion:** Paragraphs fade sequentially; floating citation bubbles appear on hover.

---

### 💾 **Deployment & Accessibility**

> The fine-tuned model is live on **Hugging Face** and supports real-time evaluation through hosted inference APIs. Designed to be reproducible and transparent, FinSightAI serves as both a research artifact and a practical tool for financial AI applications.

**Visuals:**

* Animated Hugging Face embed mockup.
* Sliding cards showing “Available Models,” “API Ready,” “Quantized Adapter.”

---

### 🎬 **Reflection**

> “FinSightAI was my experiment in efficiency — a statement that precision doesn’t need scale. The success of QLoRA here shows that even small models can redefine what’s possible when fine-tuned with purpose.”

**Animation:** Typewriter text effect, concluding with a smooth scroll-to-top CTA.

---

### 🎨 **Design & Aesthetic Direction**

* Retain **deep blue / steel gray base palette** with soft gradients suggesting professionalism.
* Accent hues of electric blue or cyan for highlights.
* Focus on clarity, geometric symmetry, and consistent animation rhythm.
* Integrate subtle grid or line visuals inspired by financial data charts.
* Use **horizontal scroll carousels** and **Framer Motion shared transitions** for cohesiveness.

---

### ✅ **Summary**

This refined FinSightAI page combines your research depth with interactive, data-driven storytelling. It visually demonstrates quantitative improvements, model efficiency, and architectural elegance — transforming what could have been a static project showcase into an immersive technical experience.

> *End of Draft — ready for developer handoff and motion tuning.*
