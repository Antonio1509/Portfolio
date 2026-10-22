<script setup>
import HeadingFlow from '../components/HeadingFlow.vue'
import portfolioScreenshot from '../assets/projects/portfolio-home.png'
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
    description: 'My portfolio, built with Vue single-file components and Vue Router, with shared site components and responsive styling. Built as a team',
    technologies: ['Vue 3', 'Vue Router', 'CSS'],
    image: portfolioScreenshot,
    imageAlt: 'Screenshot of the portfolio homepage',
    href: 'https://github.com/Antonio1509/Portfolio',
    liveHref: 'https://cgpersonalportfolio.netlify.app/',
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
    description: 'A multi-vendor marketplace for South African makers, with product browsing, vendor storefronts, a shopping cart, checkout, and order tracking. Built as a team',
    technologies: ['Vue 3', 'JavaScript', 'CSS'],
    image: ecommerceHomepage,
    imageAlt: 'Screenshot of the LocalCart e-commerce homepage',
    href: 'https://github.com/Antonio1509/Module-3-Core-Project-E-commerce',
  },
  {
    name: 'Web Scraping Dashboard',
    kind: 'Dashboard - Python and Vue',
    description: 'A dashboard for collecting and reviewing retail product and digital asset data, with a Flask API and a Vue interface. Built as a team',
    technologies: ['Python', 'Flask', 'Vue 3', 'Pinia'],
    image: dashboardHomepage,
    imageAlt: 'Screenshot of the Market Pulse scraping dashboard homepage',
    href: 'https://github.com/adamjattiem12-gif/-Flask-Web-Scraping-Dashboard',
    liveHref: 'https://market-pulse-11gq.onrender.com/',
  },
  {
    name: 'HR Dashboard Management System',
    kind: 'Collaborative project - Module 1',
    description: 'An HR dashboard for employee records, attendance, payroll, and leave management, built as a Module 1 project. Built as a team',
    technologies: [],
    image: hrHomepage,
    imageAlt: 'Screenshot of the ModernTech HR dashboard homepage',
    href: 'https://github.com/Caleb-Asia/module1-project-hr',
  },
  {
    name: 'Pet Care',
    kind: 'Multi-page website',
    description: 'A pet care website with separate home, services, about, contact, login, and signup pages, styled with shared CSS. Built as a team',
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
  <section id="projects" class="projects-page inner-page page-wrap">
    <p class="eyebrow">Selected work</p>
    <div v-reveal class="inner-heading">
      <HeadingFlow><h1>Projects I've worked on</h1></HeadingFlow>
      <p class="lead">A selection of coursework and personal projects. Open a repository to explore its code.</p>
    </div>

    <div class="projects-grid">
      <article v-for="(project, index) in projects" :key="project.name" v-reveal="index" v-tilt v-project-motion class="project-card">
        <div class="project-visual">
          <div class="project-image-parallax">
            <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
          </div>
          <a class="project-view" :href="project.liveHref || project.href" target="_blank" rel="noopener noreferrer">
            {{ project.liveHref ? 'View live site' : 'View project' }} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div class="project-details">
          <p class="project-kind">{{ project.kind }}</p>
          <h2>{{ project.name }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <ul v-if="project.technologies.length" class="project-tech" aria-label="Technologies used">
            <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
          </ul>
          <div class="project-links">
            <a
              v-if="project.liveHref"
              v-magnetic
              class="project-live-link"
              :href="project.liveHref"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site <span aria-hidden="true">&rarr;</span>
            </a>
            <a v-magnetic :href="project.href" target="_blank" rel="noopener noreferrer">View GitHub repository <span aria-hidden="true">&rarr;</span></a>
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
.project-card {
  min-width: 0;
  position: relative;
  border: 1px solid var(--line);
  background: #111214;
  transform: perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateY(var(--card-lift, 0));
  transition: transform .35s cubic-bezier(.22,1,.36,1);
  transform-style: preserve-3d;
}
.project-card::before {
  content: "";
  position: absolute;
  z-index: 2;
  inset: 0;
  border: 1px solid rgba(213,181,121,.5);
  opacity: 0;
  transform: scale(.985);
  transition: opacity .45s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1);
  pointer-events: none;
}
.project-visual { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: #171717; }
.project-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  background: radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(213,181,121,.16), transparent 75%);
  transition: opacity .4s cubic-bezier(.22,1,.36,1);
}
.project-image-parallax {
  position: absolute;
  top: -6%;
  left: 0;
  width: 100%;
  height: 112%;
}
.project-image-parallax img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform .8s cubic-bezier(.22,1,.36,1);
}
.project-view {
  position: absolute;
  z-index: 1;
  left: 18px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-size: 12px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .4s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1);
}
.project-view span {
  color: var(--gold);
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}
.project-links a {
  display: inline-block;
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}
.project-card:active { transform: perspective(900px) scale(.99); }
.project-details { padding: 22px 25px 24px; }
.project-kind { margin: 0 0 9px; color: #c7aa72; font: 10px var(--mono); letter-spacing: .07em; text-transform: uppercase; }
.project-details h2 { margin: 0 0 9px; font: 500 21px var(--display); }
.project-description { margin: 0; color: #aaa9a4; font-size: 13px; line-height: 1.75; }
.project-tech { display: flex; flex-wrap: wrap; gap: 7px 16px; margin: 15px 0 0; padding: 0; list-style: none; color: #d2c4a5; font-size: 11px; }
.project-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  margin-top: 18px;
  padding-top: 13px;
  border-top: 1px solid var(--line);
}
.project-links a { color: var(--text); font-size: 12px; }
.project-links span { margin-left: 5px; color: var(--gold); }
.project-links .project-live-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--gold);
  color: var(--gold-bright);
}
.project-links .project-live-link span { margin: 0; }
@media (hover: hover) and (pointer: fine) {
  .project-links a:hover { color: var(--gold-bright); }
  .project-links .project-live-link:hover { background: rgba(213,181,121,.1); }
  .project-card:hover {
    --card-lift: -7px;
    box-shadow: 0 18px 42px rgba(0,0,0,.28);
    border-color: rgba(213,181,121,.3);
  }
  .project-card:hover::before { opacity: 1; transform: scale(1); }
  .project-card:hover .project-visual::after { opacity: 1; }
  .project-card:hover .project-image-parallax img { transform: scale(1.05); }
  .project-card:hover .project-view,
  .project-card:focus-within .project-view { opacity: 1; transform: translateY(0); }
  .project-card:hover .project-view span { transform: translateX(4px); }
  .project-card:hover .project-links a { transform: translateY(-2px); }
  .project-card:hover .project-links a.magnetic.is-magnetic {
    transform: translate3d(var(--mag-x, 0), calc(var(--mag-y, 0px) - 2px), 0);
  }
}
@media (max-width: 760px) {
  .projects-page { padding-top: 46px; }
  .projects-grid { grid-template-columns: 1fr; gap: 20px; }
  .project-visual { aspect-ratio: 16 / 10; }
}
@media (min-width: 761px) {
  .project-card:nth-child(even) { margin-top: 24px; }
}
@media (hover: none) {
  .project-view { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .project-card {
    transform: none;
    transition: none;
    box-shadow: none;
  }
  .project-card:active { transform: none; }
  .project-card::before, .project-view, .project-view span,
  .project-image-parallax img { transition: none; }
  .project-card:hover { --card-lift: 0; }
  .project-card:hover .project-image-parallax img,
  .project-card:hover .project-view { transform: none; }
  .project-visual::after { display: none; }
}
</style>
