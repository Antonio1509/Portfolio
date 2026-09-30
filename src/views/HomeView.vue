<script setup>
const stack = ['HTML', 'CSS', 'JavaScript', 'Python', 'Node.js']
</script>

<template>
  <section class="hero page-wrap">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-dot"></span> Available for opportunities <span class="eyebrow-line"></span> Cape Town, ZA</p>
      <h1>Building digital<br />experiences with <em>purpose.</em></h1>
      <p class="hero-intro">I’m Chad, an emerging front-end developer turning thoughtful ideas into clean, engaging web experiences.</p>
      <div class="hero-actions"><RouterLink class="button button-gold" to="/contact">Let’s work together <span>↗</span></RouterLink>
        <RouterLink class="text-link" to="/about">A little about me <span>→</span></RouterLink></div>
      <div class="hero-stack"><span class="stack-label">CURRENT TOOLKIT</span><span v-for="item in stack" :key="item" class="stack-item">{{ item }}</span></div>
    </div>
    <div class="hero-visual" aria-label="Abstract gold line artwork">
      <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div><div class="visual-orbit orbit-three"></div>
      <div class="visual-core"><img class="visual-monogram" src="/src/assets/cg-monogram.png" alt="" /><i>✳</i></div>
      <span class="visual-caption">DESIGN · DEVELOP · REFINE</span><span class="visual-index">01 / 04</span>
      <div class="visual-note"><span class="note-mark">✦</span><span>Curiosity<br />meets craft.</span></div>
    </div>
    <div class="hero-bottom"><span>SCROLL TO EXPLORE</span><span class="scroll-line"></span><span>01 — INTRODUCTION</span></div>
  </section>
  <section class="home-strip page-wrap"><p class="eyebrow">A PRACTICAL, PEOPLE-FIRST APPROACH</p>
  <div class="strip-content"><h2>Good work starts<br />with <em>good questions.</em>
  </h2><p>From semantic structure to the final responsive details, I enjoy making the web feel clear, useful, and a little more human.</p>
  <RouterLink class="round-link" to="/skills" aria-label="Explore my skills">↗</RouterLink></div></section>
</template>

<style scoped>
.hero {
  min-height: 690px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  position: relative;
  padding-top: 35px;
  padding-bottom: 90px;
}

.hero-copy {
  position: relative;
  z-index: 1;
  padding-bottom: 28px;
}

.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8da27b;
  margin: 0 8px 1px 0;
  box-shadow: 0 0 10px #8da27b66;
}

.eyebrow-line {
  display: inline-block;
  width: 28px;
  height: 1px;
  background: #484642;
  vertical-align: middle;
  margin: 0 10px;
}

.hero-intro {
  font-size: 16px;
  max-width: 445px;
  color: #a5a39e;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 34px;
}

.hero-stack {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 76px;
  color: #a5a39e;
  font-size: 11px;
}

.stack-label {
  font: 9px var(--mono);
  letter-spacing: 1px;
  color: #74736f;
  margin-right: 5px;
}

.stack-item {
  border-left: 1px solid #47453f;
  padding-left: 13px;
}

.hero-visual {
  height: 490px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 50%,#22201b 0%,#151513 37%,#0c0d0f 72%);
}

.visual-orbit {
  position: absolute;
  border: 1px solid rgba(213,181,121,.18);
  border-radius: 50%;
  transform: rotate(-27deg);
}

.orbit-one {
  width: 260px;
  height: 410px;
}

.orbit-two {
  width: 360px;
  height: 510px;
  border-color: rgba(213,181,121,.11);
}

.orbit-three {
  width: 458px;
  height: 615px;
  border-color: rgba(213,181,121,.075);
}

.visual-core {
  width: 126px;
  height: 126px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  background: radial-gradient(circle at 35% 30%,#403725,#191815 68%);
  border: 1px solid #705e3e;
  box-shadow: 0 0 55px #d5b57918,inset 0 0 35px #e3c47e12;
  overflow: hidden;
}

.visual-monogram {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  mix-blend-mode: screen;
}

.visual-core i {
  position: absolute;
  right: -24px;
  top: 0;
  font-style: normal;
  color: #f0d9a1;
  font-size: 19px;
  z-index: 1;
}

.visual-caption, .visual-index {
  position: absolute;
  font: 9px var(--mono);
  letter-spacing: 1.2px;
  color: #817d72;
}

.visual-caption {
  bottom: 28px;
}

.visual-index {
  right: 24px;
  top: 24px;
}

.visual-note {
  position: absolute;
  left: 11%;
  top: 20%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c1b9a9;
  font-size: 10px;
  line-height: 1.4;
}

.note-mark {
  color: var(--gold);
  font-size: 22px;
}

.hero-bottom {
  position: absolute;
  bottom: 27px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  font: 9px var(--mono);
  letter-spacing: 1.1px;
  color: #777671;
}

.hero-bottom>span:last-child {
  margin-left: auto;
}

.scroll-line {
  width: 44px;
  height: 1px;
  background: #5a5549;
}

.home-strip {
  border-top: 1px solid var(--line);
  padding: 44px 0 100px;
}

.home-strip>.eyebrow {
  color: #777671;
}

.strip-content {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  gap: 40px;
}

.strip-content h2 {
  font: 600 36px/1.25 var(--display);
  letter-spacing: -1.5px;
  margin: 13px 0;
}

.strip-content>p {
  font-size: 14px;
  color: var(--muted);
  max-width: 360px;
}

.round-link {
  width: 42px;
  height: 42px;
  border: 1px solid #5a5141;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--gold);
  transition: background .2s;
}

.round-link:hover {
  background: #262219;
}

@media (max-width:800px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 62px;
    min-height: 0;
    padding-bottom: 75px;
  }
  .hero-copy {
    padding: 0;
  }
  .hero-visual {
    height: 350px;
    margin-top: 37px;
  }
  .orbit-one {
    width: 210px;
    height: 325px;
  }
  .orbit-two {
    width: 285px;
    height: 410px;
  }
  .orbit-three {
    width: 365px;
    height: 490px;
  }
  .hero-stack {
    margin-top: 43px;
  }
  .hero-bottom {
    bottom: 26px;
  }
  .strip-content {
    grid-template-columns: 1fr auto;
    gap: 8px 22px;
  }
  .strip-content h2 {
    grid-column: 1;
  }
  .strip-content>p {
    grid-column: 1;
    grid-row: 2;
  }
  .round-link {
    grid-column: 2;
    grid-row: 1/3;
  }
}

@media (max-width:430px) {
  .hero-intro {
    font-size: 14px;
  }
  .hero-actions {
    gap: 18px;
  }
  .hero-visual {
    height: 300px;
  }
  .hero-bottom {
    font-size: 7px;
  }
  .stack-label {
    width: 100%;
  }
  .stack-item:first-of-type {
    border: 0;
    padding: 0;
  }
  .strip-content h2 {
    font-size: 30px;
  }
}
</style>
