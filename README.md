# My Journey — Professional Portfolio Website

Welcome to the repository for **My Journey**, a modern, responsive multi-page portfolio website designed to showcase my path, technical skills, and software development milestones. 

The site features a premium dark-mode aesthetic with interactive hover micro-animations, glassmorphism UI card components, ambient background video rendering, and a fully functional serverless contact portal.

---

## Purpose of the Website
The primary objective of this project is to create an authentic, high-impact digital presence that bridges the gap between my current technical capabilities and industry opportunities. It acts as an interactive landing page and living résumé where mentors, tech professionals, and peers can evaluate my frontend engineering skills and get in touch with me directly.

---

## Features
* **Integrated Loading Sequence:** Features a smooth, clean intro overlay animation lifecycle (`#loader_wrapper`) that gracefully fades out when the site loads.
* **Ambient Multi-Layer Backgrounds:** The landing page blends a CSS multi-directional animated linear gradient alongside a subtle, low-opacity background video (`opacity: 0.15`) for high visual engagement.
* **Glassmorphism UI Engineering:** Uses advanced styling techniques like `backdrop-filter: blur(12px)`, translucent borders, and soft alpha-channel backgrounds to build a clean, modern workspace aesthetic.
* **Micro-Interactions & Hover Effects:** Custom-designed headers and navigation paths utilize relative pseudo-elements (`::after`) to generate smooth, width-scaling underlines and slight element translations (`translateY(-3px)`) when hovered over.
* **Functional Contact Pipeline:** Includes a live messaging block connected directly to Formspree, utilizing proper `name` validation inputs so users can reach my inbox seamlessly.
* **Fluid Page Navigation:** Seamless routing across four structural templates: `Home`, `About Me`, `Skills Gained`, and `Contact`.

---

## Technical Breakdown & Concepts Used

### HTML5 Concepts Used
* **Semantic Document Architecture:** Built utilizing modern structural containers (`<header>`, `<nav>`, `<main>`, `<section>`, `<table>`, `<footer>`) to maximize search index engine visibility and page accessibility.
* **Interactive Data Tables:** Implemented clean data grouping charts to organize skillsets into categorized structures (`<thead>`, `<tbody>`, `<tr>`, `<td>`).
* **Form Mechanics & Controls:** Configured secure, self-checking form inputs (`type="text"`, `type="email"`, `<textarea>`) reinforced with strict inline browser layout properties like `required`.

### CSS3 Concepts Used
* **Flexbox Layout Engine:** Used heavily to manage global structural grids, item alignment, block distributions, multi-column footers, and floating icon arrays.
* **Advanced Typography Mapping:** Locked design systems to a responsive layout strategy by configuring the universal system metric configuration (`html { font-size: 22px; }`) and utilizing absolute relative tracking units (`rem`).
* **Animations & Keyframes:** Programmed explicit timeline rules (`@keyframes`) managing smooth infinite background gradient shifts (`gradientBG 10s ease infinite`), uniform structural rotations (`spin 1s linear infinite`), and transparency reductions (`fadeOut`).
* **Adaptive Table Transformations:** Built custom media break boundaries allowing standard heavy content structures to transform into single vertical card blocks (`display: block`) for ultra-tight screen readouts.

---

## How to View the Project

Live Deployment
You can view the fully operational live project right now via GitHub Pages at:
 **[https://github.com/Antonio1509/Portfolio.git]**
