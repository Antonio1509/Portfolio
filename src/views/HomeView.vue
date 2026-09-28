<script setup>
const stack = ['HTML', 'CSS', 'JavaScript', 'Python', 'Node.js']
</script>

<template>
  <section class="hero page-wrap">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-dot"></span> Available for opportunities <span class="eyebrow-line"></span> Cape Town, ZA</p>
      <h1>Building digital<br />experiences with <em>purpose.</em></h1>
      <p class="hero-intro">I’m Chad, an emerging front-end developer turning thoughtful ideas into clean, engaging web experiences.</p>
      <div class="hero-actions"><RouterLink class="button button-gold" to="/contact">Let’s work together <span>↗</span></RouterLink><RouterLink class="text-link" to="/about">A little about me <span>→</span></RouterLink></div>
      <div class="hero-stack"><span class="stack-label">CURRENT TOOLKIT</span><span v-for="item in stack" :key="item" class="stack-item">{{ item }}</span></div>
    </div>
    <div class="hero-visual" aria-label="Abstract gold line artwork">
      <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div><div class="visual-orbit orbit-three"></div>
      <div class="visual-core"><span>CG</span><i>✳</i></div>
      <span class="visual-caption">DESIGN · DEVELOP · REFINE</span><span class="visual-index">01 / 04</span>
      <div class="visual-note"><span class="note-mark">✦</span><span>Curiosity<br />meets craft.</span></div>
    </div>
    <div class="hero-bottom"><span>SCROLL TO EXPLORE</span><span class="scroll-line"></span><span>01 — INTRODUCTION</span></div>
  </section>
  <section class="home-strip page-wrap"><p class="eyebrow">A PRACTICAL, PEOPLE-FIRST APPROACH</p><div class="strip-content"><h2>Good work starts<br />with <em>good questions.</em></h2><p>From semantic structure to the final responsive details, I enjoy making the web feel clear, useful, and a little more human.</p><RouterLink class="round-link" to="/skills" aria-label="Explore my skills">↗</RouterLink></div></section>
</template>
