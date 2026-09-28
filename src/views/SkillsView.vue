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
    <div class="inner-heading"><h1>Tools for<br /><em>what’s next.</em></h1><p class="lead">Core skills I’m building through structured learning, personal projects, and plenty of hands-on practice.</p></div>
    <div class="skills-list"><article v-for="skill in skills" :key="skill.number" class="skill-row"><span class="skill-number">{{ skill.number }}</span><h2>{{ skill.name }}</h2><p>{{ skill.detail }}</p><span class="skill-level">{{ skill.level }}</span><span class="skill-arrow">↗</span></article></div>
    <p class="skills-note"><span>✳</span> Always learning. Always building.</p>
  </section>
</template>
