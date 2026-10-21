<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import HeadingFlow from '../components/HeadingFlow.vue'
import { createScrollCounter } from '../utils/animations'

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

const inUseCount = computed(() => skills.filter((skill) => skill.stage === 'In use').length)
const learningCount = computed(() => skills.filter((skill) => skill.stage === 'Still learning').length)
const inUseCounter = ref(null)
const learningCounter = ref(null)
let counterCleanups = []

onMounted(() => {
  counterCleanups = [
    createScrollCounter(inUseCounter.value, inUseCount.value),
    createScrollCounter(learningCounter.value, learningCount.value),
  ]
})

onBeforeUnmount(() => counterCleanups.forEach((cleanup) => cleanup()))
</script>

<template>
  <section id="skills" class="inner-page page-wrap">
    <p class="eyebrow">Skills</p>
    <div v-reveal class="inner-heading">
      <HeadingFlow><h1>What I've used</h1></HeadingFlow>
      <p class="lead">Skills shown in my projects, along with the tools and concepts I'm still learning.</p>
    </div>
    <p class="skills-summary" aria-label="Skill status summary">
      <span ref="inUseCounter">0</span> in use ·
      <span ref="learningCounter">0</span> learning
    </p>
    <div class="skills-list">
      <article v-for="(skill, index) in skills" :key="skill.name" v-reveal="index" class="skill-row">
        <h2>{{ skill.name }}</h2>
        <p>{{ skill.detail }}</p>
        <span class="skill-status" :class="{ learning: skill.stage === 'Still learning' }">
          <span class="skill-dot" aria-hidden="true"></span>
          {{ skill.stage }}
        </span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-summary {
  margin: 0 0 15px;
  color: #aaa9a4;
  font: 11px var(--mono);
}
.skills-summary span { color: var(--gold-bright); }
.skills-list { border-top: 1px solid var(--line); }
.skill-row {
  position: relative;
  min-height: 92px;
  display: grid;
  grid-template-columns: minmax(175px, .7fr) minmax(240px, 1.5fr) 120px;
  align-items: center;
  gap: 28px;
  border-bottom: 1px solid var(--line);
  transition: opacity .35s cubic-bezier(.22,1,.36,1);
}
.skill-row::after {
  content: "";
  position: absolute;
  inset: auto 0 -1px;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform .55s cubic-bezier(.22,1,.36,1);
}
.skill-row h2 {
  margin: 0;
  font: 500 19px var(--display);
  transition: transform .4s cubic-bezier(.22,1,.36,1);
}
.skill-row p { max-width: 470px; margin: 0; color: #97958f; font-size: 12px; line-height: 1.65; }
.skill-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
  color: #a9b19f;
  font: 10px var(--mono);
  letter-spacing: .04em;
}
.skill-status.learning { color: var(--gold-bright); }
.skill-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  border-radius: 50%;
  background: var(--gold);
}
.skill-status.learning .skill-dot {
  animation: skill-pulse 2s ease-in-out infinite;
}
@keyframes skill-pulse {
  0%, 100% { opacity: .55; transform: scale(.85); }
  50% { opacity: 1; transform: scale(1.2); }
}
@media (hover: hover) and (pointer: fine) {
  .skills-list:hover .skill-row:not(:hover) { opacity: .45; }
  .skill-row:hover::after { transform: scaleX(1); }
  .skill-row:hover h2 { transform: translateX(8px); }
}
@media (max-width: 800px) {
  .skill-row { grid-template-columns: 1fr auto; gap: 6px 18px; min-height: 0; padding: 17px 0; }
  .skill-row h2 { font-size: 18px; }
  .skill-row p { grid-column: 1 / -1; grid-row: 2; }
  .skill-status { grid-column: 2; grid-row: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .skill-row, .skill-row::after, .skill-row h2 { transition: none; }
  .skill-status.learning .skill-dot { animation: none; }
  .skills-list:hover .skill-row:not(:hover) { opacity: 1; }
}
</style>
