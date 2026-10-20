<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AmbientLines from './components/AmbientLines.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import SkillsView from './views/SkillsView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'

const menuOpen = ref(false)
const cursorGlow = ref(null)
let glowFrame = 0
let cursorPosition = { x: 0, y: 0 }

function updateCursorGlow(event) {
  cursorPosition = { x: event.clientX, y: event.clientY }
  if (glowFrame) return
  glowFrame = requestAnimationFrame(() => {
    cursorGlow.value?.style.setProperty('--cursor-x', `${cursorPosition.x}px`)
    cursorGlow.value?.style.setProperty('--cursor-y', `${cursorPosition.y}px`)
    glowFrame = 0
  })
}

onMounted(() => {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('pointermove', updateCursorGlow, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', updateCursorGlow)
  if (glowFrame) cancelAnimationFrame(glowFrame)
})
</script>

<template>
  <AmbientLines />
  <div ref="cursorGlow" class="cursor-glow" aria-hidden="true"></div>
  <SiteHeader :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" @navigate="menuOpen = false" />
  <main>
    <HomeView />
    <AboutView />
    <SkillsView />
    <ProjectsView />
    <ContactView />
  </main>
  <SiteFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'DM Sans',sans-serif;
  color: #eeece6;
  background: #0c0d0f;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  font-optical-sizing: auto;
  font-weight: 400;
  --bg: #0c0d0f;
  --panel: #121315;
  --text: #eeece6;
  --muted: #92918d;
  --gold: #d5b579;
  --gold-bright: #e4c993;
  --line: #292a29;
  --mono: 'DM Mono',monospace;
  --display: 'Manrope',sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

main > section[id] {
  scroll-margin-top: 104px;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.7;
}

main, .site-header, .site-footer {
  position: relative;
  z-index: 1;
}

.cursor-glow {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(circle, rgba(213,181,121,.075), rgba(213,181,121,0) 68%);
  transform: translate3d(var(--cursor-x, -600px), var(--cursor-y, -600px), 0) translate(-50%, -50%);
  transition: opacity .35s ease;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .cursor-glow {
    opacity: 1;
  }
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .55s ease var(--reveal-delay, 0ms), transform .55s cubic-bezier(.2,.7,.2,1) var(--reveal-delay, 0ms);
}

.scroll-reveal-visible {
  opacity: 1;
  transform: none;
}

.magnetic {
  transition: transform .28s cubic-bezier(.2,.7,.2,1);
}

.magnetic.is-magnetic {
  transform: translate3d(var(--mag-x, 0), var(--mag-y, 0), 0);
}

.button.magnetic.is-magnetic:hover {
  transform: translate3d(var(--mag-x, 0), calc(var(--mag-y, 0px) - 2px), 0);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, textarea {
  font: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: var(--gold);
  color: #121212;
}

.brand-name span, .footer-brand span {
  color: var(--gold);
}

.page-wrap {
  width: min(1120px,88%);
  margin-inline: auto;
}

.eyebrow {
  font-size: 13px;
  color: #aaa9a4;
  margin: 0 0 16px;
}

.hero h1, .inner-heading h1, .contact-copy h1 {
  font: 600 clamp(46px,6.5vw,79px)/1.1 var(--display);
  letter-spacing: -3px;
  margin: 29px 0 20px;
}

.hero h1 em, .inner-heading h1 em, .contact-copy h1 em, .strip-content h2 em {
  font-style: normal;
  color: var(--gold);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border: 0;
  cursor: pointer;
  padding: 14px 19px;
  font-size: 12px;
  font-weight: 600;
  transition: background .2s,transform .2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button-gold {
  background: var(--gold);
  color: #171613;
}

.button-gold:hover {
  background: var(--gold-bright);
}

.text-link {
  font-size: 12px;
  color: #dedbd4;
}

.text-link span {
  color: var(--gold);
  padding-left: 8px;
  display: inline-block;
  transition: transform .25s ease;
}

.text-link:hover span {
  transform: translateX(3px);
}

.inner-page {
  padding-top: 64px;
  padding-bottom: 110px;
  min-height: calc(100vh - 208px);
}

.inner-page>.eyebrow span {
  color: var(--gold);
}

.inner-heading {
  display: grid;
  grid-template-columns: 1fr .8fr;
  align-items: end;
  gap: 70px;
  margin: 36px 0 60px;
}

.inner-heading h1 {
  font-size: clamp(54px,7vw,82px);
  margin: 0;
}

.lead {
  color: #a5a39e;
  font-size: 15px;
  line-height: 1.9;
  max-width: 430px;
  margin: 0 0 9px;
}

.contact-copy h1 {
  font-size: clamp(50px,6.3vw,74px);
  margin: 0 0 22px;
}

.router-link-active {
  outline-color: transparent;
}

@keyframes hero-enter {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-greeting h1 {
  animation: hero-enter .65s cubic-bezier(.2,.7,.2,1) both;
}

.hero-intro {
  animation: hero-enter .65s cubic-bezier(.2,.7,.2,1) .13s both;
}

.hero-actions {
  animation: hero-enter .65s cubic-bezier(.2,.7,.2,1) .26s both;
}

.featured-project {
  animation: hero-enter .75s cubic-bezier(.2,.7,.2,1) .39s both;
}

#netlify-badge,
#nl-badge,
[id*="netlify" i],
[class*="netlify" i],
[data-netlify-badge],
[aria-label*="netlify" i],
netlify-badge,
a[href*="netlify.com" i],
iframe[title*="Netlify" i],
iframe[src*="netlify" i] {
  display: none !important;
}

@media (max-width:800px) {
  main > section[id] {
    scroll-margin-top: 88px;
  }
  .hero h1 {
    font-size: clamp(48px,10vw,72px);
    letter-spacing: -3px;
  }
  .inner-page {
    padding-top: 47px;
    padding-bottom: 76px;
  }
  .inner-heading {
    grid-template-columns: 1fr;
    gap: 18px;
    margin: 30px 0 42px;
  }
  .inner-heading h1 {
    font-size: clamp(55px,11vw,76px);
  }
  .contact-copy h1 {
    font-size: clamp(52px,10vw,70px);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .scroll-reveal,
  .hero-greeting h1,
  .hero-intro,
  .hero-actions,
  .featured-project {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
  .cursor-glow {
    display: none;
  }
  .button:hover {
    transform: none;
  }
  .text-link:hover span {
    transform: none;
  }
}

@media (max-width:430px) {
  .page-wrap {
    width: 88%;
  }
  .hero h1 {
    font-size: 47px;
  }
  .eyebrow {
    font-size: 8px;
    letter-spacing: 1px;
  }
  .button {
    gap: 15px;
    padding: 13px 14px;
  }
  .inner-heading h1 {
    font-size: 53px;
  }
}
</style>
