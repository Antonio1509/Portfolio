<script setup>
const skills = [
  { number: '01', name: 'HTML', detail: 'I can build well-structured, semantic pages with accessible markup.', level: 'CONFIDENT' },
  { number: '02', name: 'CSS', detail: 'I can style responsive interfaces using Flexbox, Grid, and modern CSS.', level: 'CONFIDENT' },
  { number: '03', name: 'JavaScript', detail: 'Core programming logic and dynamic client-side interactivity.', level: 'LEARNING' },
  { number: '04', name: 'Python', detail: 'Programming fundamentals, scripting, and problem-solving.', level: 'LEARNING' },
  { number: '05', name: 'Node.js', detail: 'Backend development and setting up APIs.', level: 'LEARNING' },
]
</script>

<template>
  <section class="inner-page page-wrap">
    <p class="eyebrow"><span>02</span> / SKILLS</p>
    <div class="inner-heading"><h1>Tools for<br /><em>what’s next.</em></h1>
      <p class="lead">Core skills I’m building through structured learning, personal projects, and plenty of hands-on practice.</p></div>
    <div class="skills-list"><article v-for="skill in skills" :key="skill.number" class="skill-row"><span class="skill-number">{{ skill.number }}</span>
      <h2>{{ skill.name }}</h2><p>{{ skill.detail }}</p><span class="skill-level">{{ skill.level }}</span><span class="skill-arrow">↗</span></article></div>
    <p class="skills-note"><span>✳</span> Always learning. Always building.</p>
  </section>
</template>

<style scoped>
.skills-list {
  border-top: 1px solid var(--line);
}

.skill-row {
  min-height: 116px;
  display: grid;
  grid-template-columns: 60px .85fr 1.4fr 120px 20px;
  align-items: center;
  gap: 22px;
  border-bottom: 1px solid var(--line);
  transition: padding .2s;
}

.skill-row:hover {
  padding-inline: 10px;
}

.skill-number {
  font: 10px var(--mono);
  color: var(--gold);
}

.skill-row h2 {
  font: 500 24px var(--display);
  letter-spacing: -.5px;
  margin: 0;
}

.skill-row p {
  margin: 0;
  color: #97958f;
  font-size: 12px;
  max-width: 350px;
}

.skill-level {
  font: 9px var(--mono);
  letter-spacing: 1px;
  color: #8e8a80;
}

.skill-arrow {
  color: var(--gold);
  font-size: 15px;
}

.skills-note {
  margin-top: 32px;
  color: #97958f;
  font-size: 12px;
}

.skills-note span {
  color: var(--gold);
  font-size: 19px;
  vertical-align: middle;
  margin-right: 10px;
}

@media (max-width:800px) {
  .skill-row {
    grid-template-columns: 35px 1fr 20px;
    gap: 10px;
    padding: 18px 0;
    min-height: 0;
  }
  .skill-row h2 {
    font-size: 21px;
  }
  .skill-row p {
    grid-column: 2;
    grid-row: 2;
  }
  .skill-level {
    grid-column: 2;
    grid-row: 3;
    margin-top: 6px;
  }
  .skill-arrow {
    grid-column: 3;
    grid-row: 1;
  }
}
</style>
