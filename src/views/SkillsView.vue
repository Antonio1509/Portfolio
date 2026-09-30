<script setup>
const skills = [
  { name: 'HTML', detail: 'Semantic page structure and form controls used across my websites.', stage: 'In use' },
  { name: 'CSS', detail: 'Responsive layouts and visual styling with Flexbox, Grid, and media queries.', stage: 'In use' },
  { name: 'JavaScript', detail: 'Page interactions, filtering, sorting, themes, and favourites in my projects.', stage: 'In use' },
  { name: 'Vue 3', detail: 'Single-file components used in this portfolio, the marketplace, and the listings project.', stage: 'In use' },
  { name: 'Vue Router', detail: 'Page navigation in this portfolio and Vue projects.', stage: 'In use' },
  { name: 'Git and GitHub', detail: 'Version control and repositories for my projects.', stage: 'In use' },
  { name: 'Python', detail: 'Programming practice and the backend for the scraping dashboard.', stage: 'Still learning' },
  { name: 'Flask and REST APIs', detail: 'Building backend routes and serving data to a frontend.', stage: 'Still learning' },
  { name: 'Web scraping', detail: 'Collecting product data with Requests and BeautifulSoup.', stage: 'Still learning' },
  { name: 'SQLite', detail: 'Storing scraped items, history, and website data.', stage: 'Still learning' },
  { name: 'Pinia', detail: 'Managing shared state in the scraping dashboard.', stage: 'Still learning' },
  { name: 'Axios', detail: 'Making requests from a Vue frontend to backend API routes.', stage: 'Still learning' },
  { name: 'Three.js', detail: 'Creating interactive 3D scenes in the scraping dashboard.', stage: 'Still learning' },
  { name: 'Automated testing', detail: 'Writing backend tests with pytest.', stage: 'Still learning' },
  { name: 'Vite', detail: 'Running and building the Vue applications.', stage: 'Still learning' },
]
</script>

<template>
  <section class="inner-page page-wrap">
    <p class="eyebrow">Skills</p>
    <div class="inner-heading">
      <h1>What I've used</h1>
      <p class="lead">Skills shown in my projects, along with the tools and concepts I'm still learning.</p>
    </div>
    <div class="skills-list">
      <article v-for="skill in skills" :key="skill.name" class="skill-row">
        <h2>{{ skill.name }}</h2>
        <p>{{ skill.detail }}</p>
        <span class="skill-status" :class="{ learning: skill.stage === 'Still learning' }">{{ skill.stage }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-list { border-top: 1px solid var(--line); }
.skill-row {
  min-height: 92px;
  display: grid;
  grid-template-columns: minmax(175px, .7fr) minmax(240px, 1.5fr) 120px;
  align-items: center;
  gap: 28px;
  border-bottom: 1px solid var(--line);
}
.skill-row h2 { margin: 0; font: 500 19px var(--display); }
.skill-row p { max-width: 470px; margin: 0; color: #97958f; font-size: 12px; line-height: 1.65; }
.skill-status {
  justify-self: start;
  color: #a9b19f;
  font: 10px var(--mono);
  letter-spacing: .04em;
}
.skill-status.learning { color: var(--gold-bright); }
@media (max-width: 800px) {
  .skill-row { grid-template-columns: 1fr auto; gap: 6px 18px; min-height: 0; padding: 17px 0; }
  .skill-row h2 { font-size: 18px; }
  .skill-row p { grid-column: 1 / -1; grid-row: 2; }
  .skill-status { grid-column: 2; grid-row: 1; }
}
</style>
