<script setup>
import portfolioScreenshot from '../assets/projects/portfolio-home.jpg'
import foodFestHomepage from '../assets/projects/food-fest-home.jpg'
import ecommerceHomepage from '../assets/projects/ecommerce-home.jpg'
import dashboardHomepage from '../assets/projects/scraping-dashboard-home.jpg'
import hrHomepage from '../assets/projects/hr-dashboard-home.jpg'
import petCareHomepage from '../assets/projects/pet-care-home.jpg'
import propertyHomepage from '../assets/projects/property-listings-home.jpg'

const projects = [
  {
    name: 'My Portfolio',
    kind: 'Personal project - This website',
    description: 'My portfolio, built with Vue single-file components and Vue Router, with shared site components and responsive styling.',
    technologies: ['Vue 3', 'Vue Router', 'CSS'],
    image: portfolioScreenshot,
    imageAlt: 'Screenshot of the portfolio homepage',
    href: 'https://github.com/Antonio1509/Portfolio',
  },
  {
    name: 'Cape Town Food Fest',
    kind: 'Ticket tier page',
    description: 'A Vue page for browsing three festival ticket tiers, with search, price sorting, theme switching, and favourites.',
    technologies: ['Vue 3', 'JavaScript', 'CSS'],
    image: foodFestHomepage,
    imageAlt: 'Screenshot of the Cape Town Food Fest homepage and ticket tiers',
    href: 'https://github.com/Antonio1509/Food-Fest-Ticket-Landing',
  },
  {
    name: 'LocalCart Marketplace',
    kind: 'Collaborative project - Module 3',
    description: 'A multi-vendor marketplace for South African makers, with product browsing, vendor storefronts, a shopping cart, checkout, and order tracking.',
    technologies: ['Vue 3', 'JavaScript', 'CSS'],
    image: ecommerceHomepage,
    imageAlt: 'Screenshot of the LocalCart e-commerce homepage',
    href: 'https://github.com/Antonio1509/Module-3-Core-Project-E-commerce',
  },
  {
    name: 'Web Scraping Dashboard',
    kind: 'Dashboard - Python and Vue',
    description: 'A dashboard for collecting and reviewing retail product and digital asset data, with a Flask API and a Vue interface.',
    technologies: ['Python', 'Flask', 'Vue 3', 'Pinia'],
    image: dashboardHomepage,
    imageAlt: 'Screenshot of the Market Pulse scraping dashboard homepage',
    href: 'https://github.com/adamjattiem12-gif/-Flask-Web-Scraping-Dashboard',
  },
  {
    name: 'HR Dashboard Management System',
    kind: 'Collaborative project - Module 1',
    description: 'An HR dashboard for employee records, attendance, payroll, and leave management, built as a Module 1 project.',
    technologies: [],
    image: hrHomepage,
    imageAlt: 'Screenshot of the ModernTech HR dashboard homepage',
    href: 'https://github.com/Caleb-Asia/module1-project-hr',
  },
  {
    name: 'Pet Care',
    kind: 'Multi-page website',
    description: 'A pet care website with separate home, services, about, contact, login, and signup pages, styled with shared CSS.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: petCareHomepage,
    imageAlt: 'Screenshot of the Pet Care homepage with its video hero',
    href: 'https://github.com/Antonio1509/Pet-care',
  },
  {
    name: 'Property Mini Listings',
    kind: 'Property listing interface',
    description: 'A Vue interface for property listings, with reusable listing cards, availability states, and bookmark controls.',
    technologies: ['Vue 3', 'Vite', 'CSS'],
    image: propertyHomepage,
    imageAlt: 'Screenshot of the Homes & Beyond property listings homepage',
    href: 'https://github.com/Antonio1509/Property-Mini-Listings',
  },
]
</script>

<template>
  <section class="projects-page inner-page page-wrap">
    <p class="eyebrow">Selected work</p>
    <div class="inner-heading">
      <h1>Projects I've worked on</h1>
      <p class="lead">A selection of coursework and personal projects. Open a repository to explore its code.</p>
    </div>

    <div class="projects-grid">
      <article v-for="project in projects" :key="project.name" class="project-card">
        <div class="project-visual">
          <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
        </div>

        <div class="project-details">
          <p class="project-kind">{{ project.kind }}</p>
          <h2>{{ project.name }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <ul v-if="project.technologies.length" class="project-tech" aria-label="Technologies used">
            <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
          </ul>
          <div class="project-links">
            <a :href="project.href" target="_blank" rel="noopener noreferrer">View GitHub repository <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-page { padding-top: 64px; }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  border-top: 1px solid var(--line);
  padding-top: 28px;
}
.project-card { min-width: 0; border: 1px solid var(--line); background: #111214; }
.project-visual { width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: #171717; }
.project-visual > img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.project-details { padding: 22px 25px 24px; }
.project-kind { margin: 0 0 9px; color: #c7aa72; font: 10px var(--mono); letter-spacing: .07em; text-transform: uppercase; }
.project-details h2 { margin: 0 0 9px; font: 500 21px var(--display); }
.project-description { margin: 0; color: #aaa9a4; font-size: 13px; line-height: 1.75; }
.project-tech { display: flex; flex-wrap: wrap; gap: 7px 16px; margin: 15px 0 0; padding: 0; list-style: none; color: #d2c4a5; font-size: 11px; }
.project-links { margin-top: 18px; padding-top: 13px; border-top: 1px solid var(--line); }
.project-links a { color: var(--text); font-size: 12px; }
.project-links a:hover { color: var(--gold-bright); }
.project-links span { margin-left: 5px; color: var(--gold); }
@media (max-width: 760px) {
  .projects-page { padding-top: 46px; }
  .projects-grid { grid-template-columns: 1fr; gap: 20px; }
  .project-visual { aspect-ratio: 16 / 10; }
}
</style>
