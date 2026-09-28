# My Journey - Chad Gys Portfolio

Welcome to the repository for **My Journey**, a modern, responsive portfolio built to introduce me, share my current technical skills, and make it easy to get in touch. The site uses a dark visual theme with warm gold accents and is built with Vue 3, Vue Router, and Vite.

## Purpose

This portfolio is an online introduction and evolving record of my software development journey. It gives mentors, peers, and potential employers a place to learn about me, review the technologies I am practicing, and contact me about opportunities or collaboration.

## Features

- Four routed sections: Home, About, Skills, and Contact.
- Responsive layouts for desktop and mobile screens.
- Reusable navigation and footer components shared across the site.
- Dark theme, gold accents, and custom CG favicon.
- Skills overview covering HTML, CSS, JavaScript, Python, and Node.js.
- Contact form with browser validation and asynchronous Formspree submission, including sending, success, and error states.
- Email, GitHub, and LinkedIn links.

## Built with

- **Vue 3** single-file components for the interface.
- **Vue Router** for client-side page navigation.
- **Vite** for local development and production builds.
- **HTML** for accessible page structure and form controls.
- **CSS** for responsive layouts, typography, visual styling, and interaction states.

## Run locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Contact form setup

The contact form posts to the Formspree endpoint configured in `src/views/ContactView.vue`. The endpoint must be active and set up to deliver submissions to the portfolio owner's inbox. If you fork this project, replace the endpoint with your own Formspree form ID.

## Project structure

```text
.
|-- index.html                 # HTML entry point and page metadata
|-- package.json               # Dependencies and npm scripts
|-- vite.config.js             # Vite configuration
|-- src/
    |-- App.vue                # Top-level layout
    |-- main.js                # Vue app entry point
    |-- assets/
    |   |-- favicon.svg        # Browser tab icon
    |   `-- style.css          # Global responsive styles
    |-- components/
    |   |-- SiteHeader.vue     # Shared navigation
    |   `-- SiteFooter.vue     # Shared footer
    |-- router/
    |   `-- index.js           # Route definitions
    `-- views/
        |-- HomeView.vue
        |-- AboutView.vue
        |-- SkillsView.vue
        `-- ContactView.vue
```

## Repository

[View the source on GitHub](https://github.com/Antonio1509/Portfolio)
