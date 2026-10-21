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
import monogram from './assets/cg-monogram.png'
import { createScrollProgress, isReducedMotion } from './utils/animations'

const menuOpen = ref(false)
const cursorGlow = ref(null)
const progress = ref(null)
const activeSection = ref('home')
const introVisible = ref(false)
let glowFrame = 0
let introTimer
let sectionObserver
let cleanupProgress = () => {}
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
  if (!isReducedMotion()) {
    introVisible.value = true
    introTimer = window.setTimeout(() => {
      introVisible.value = false
    }, 850)
  }

  cleanupProgress = createScrollProgress(progress.value)

  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)
      if (visibleSections[0]) activeSection.value = visibleSections[0].target.id
    }, { threshold: [0.05, 0.1, 0.25], rootMargin: '-15% 0px -55% 0px' })

    document.querySelectorAll('main > section[id]').forEach((section) => sectionObserver.observe(section))
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('pointermove', updateCursorGlow, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.clearTimeout(introTimer)
  sectionObserver?.disconnect()
  cleanupProgress()
  window.removeEventListener('pointermove', updateCursorGlow)
  if (glowFrame) cancelAnimationFrame(glowFrame)
})
</script>

<template>
  <AmbientLines />
  <div ref="progress" class="scroll-progress" aria-hidden="true"></div>
  <div ref="cursorGlow" class="cursor-glow" aria-hidden="true"></div>
  <div v-if="introVisible" class="page-intro" aria-hidden="true">
    <img :src="monogram" alt="" />
  </div>
  <SiteHeader
    :menu-open="menuOpen"
    :active-section="activeSection"
    @toggle-menu="menuOpen = !menuOpen"
    @navigate="menuOpen = false"
    @section-change="activeSection = $event"
  />
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

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity .55s ease var(--reveal-delay, 0ms),
    transform .55s cubic-bezier(.2,.7,.2,1) var(--reveal-delay, 0ms);
}

.scroll-reveal-visible {
  opacity: 1;
  transform: none;
}

.scroll-reveal-clip {
  clip-path: inset(100% 0% 0% 0%);
  transform: scale(1.15);
  transition:
    clip-path .9s cubic-bezier(.22,1,.36,1) var(--reveal-delay, 0ms),
    transform .9s cubic-bezier(.22,1,.36,1) var(--reveal-delay, 0ms);
}

.scroll-reveal-clip.scroll-reveal-visible {
  clip-path: inset(0% 0% 0% 0%);
  transform: none;
}

.page-intro {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  background: var(--bg);
  animation: intro-exit .85s cubic-bezier(.22,1,.36,1) forwards;
}

.page-intro img {
  width: 92px;
  height: 92px;
  object-fit: contain;
  animation: intro-mark .75s cubic-bezier(.22,1,.36,1) both;
}

@keyframes intro-mark {
  from { opacity: 0; transform: scale(.82); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes intro-exit {
  0%, 70% { opacity: 1; }
  100% { opacity: 0; }
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
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}

.button-gold {
  background: var(--gold);
  color: #171613;
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

@media (hover: hover) and (pointer: fine) {
  .button:hover {
    transform: translateY(-2px);
  }
  .button-gold:hover {
    background: var(--gold-bright);
  }
  .text-link:hover span {
    transform: translateX(3px);
  }
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
  .page-intro,
  .page-intro img { animation: none; }
  .hero-intro,
  .hero-actions,
  .featured-project { animation: none; opacity: 1; transform: none; }
  .cursor-glow {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal,
  .scroll-reveal-clip {
    opacity: 1;
    clip-path: none;
    transform: none;
    transition: none;
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
