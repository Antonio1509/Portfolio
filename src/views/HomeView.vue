<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import monogram from '../assets/cg-monogram.png'
import HeadingFlow from '../components/HeadingFlow.vue'
import { isReducedMotion } from '../utils/animations'

const home = ref(null)
let animationContext

onMounted(() => {
  if (isReducedMotion()) return

  animationContext = gsap.context(() => {
    const intro = gsap.timeline()
    intro.fromTo('.headline-line-inner', { yPercent: 110 }, {
      yPercent: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power4.out',
    })
    intro.fromTo('.bot-wave', {
      rotation: -8,
      svgOrigin: '50 29',
    }, {
      rotation: 28,
      duration: 0.7,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.12,
    }, 0.15)
    gsap.to('.hello-bot', {
      y: -2,
      duration: 1.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1.1,
    })
  }, home.value)
})

onBeforeUnmount(() => animationContext?.revert())
</script>

<template>
  <section id="home" ref="home" class="home-hero page-wrap">
    <div class="hero-copy">
      <div class="hero-greeting">
        <svg class="hello-bot" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path class="bot-antenna" d="M31 12V7" />
          <circle class="bot-antenna-tip" cx="31" cy="5" r="2.5" />
          <rect class="bot-head" x="12" y="14" width="38" height="31" rx="11" />
          <circle class="bot-eye" cx="24" cy="27" r="2.2" />
          <circle class="bot-eye" cx="38" cy="27" r="2.2" />
          <path class="bot-smile" d="M25 35c3.5 4 8.5 4 12 0" />
          <path class="bot-body" d="M20 46v5c0 2 1.5 3.5 3.5 3.5h15c2 0 3.5-1.5 3.5-3.5v-5" />
          <path class="bot-arm" d="M12 29H7c-1.5 0-2.5 1-2.5 2.5V37" />
          <g class="bot-wave">
            <path d="M50 29h4c1.5 0 2.5-1 2.5-2.5V22" />
            <path d="M56.5 22v-5" />
          </g>
        </svg>
        <HeadingFlow>
          <h1>
            <span class="headline-line"><span class="headline-line-inner">Hi! I'm Chad</span></span>
            <span class="headline-line"><span class="headline-line-inner">Welcome to my</span></span>
            <span class="headline-line"><span class="headline-line-inner">portfolio</span></span>
          </h1>
        </HeadingFlow>
      </div>
      <p class="hero-intro">
        Software development student at Life Choices Academy | Cape Town<br />
        Open to internships and learning opportunities.
      </p>
      <div class="hero-actions">
        <a v-magnetic class="button button-gold" href="#projects"><span class="button-label">Explore My Work</span><span>→</span></a>
        <a v-magnetic class="text-link" href="#about">About <span>→</span></a>
      </div>
    </div>

    <article v-tilt="6" class="featured-project">
      <a class="featured-image" href="#projects" aria-label="Browse Chad Gys projects">
        <img :src="monogram" alt="CG gold monogram logo" />
      </a>
      <div class="featured-caption">
        <div>
          <p class="eyebrow">My Journey</p>
          <h2>Building real products, one project at a time.</h2>
        </div>
        <a class="text-link" href="#projects">Explore My Work <span>→</span></a>
      </div>
    </article>
  </section>
</template>

<style scoped>
.home-hero {
  min-height: 680px;
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  align-items: center;
  gap: 70px;
  padding-top: 55px;
  padding-bottom: 85px;
}

.hero-copy {
  max-width: 520px;
}

.hero-greeting {
  width: fit-content;
}

.headline-line {
  display: block;
  overflow: hidden;
}

.headline-line-inner {
  display: inline-block;
}

.hello-bot {
  display: block;
  width: 55px;
  height: 55px;
  margin: 0 0 5px 4px;
  overflow: visible;
}

.bot-head {
  fill: #151515;
  stroke: var(--gold);
  stroke-width: 2;
}

.bot-antenna, .bot-smile, .bot-body, .bot-arm, .bot-wave path {
  fill: none;
  stroke: var(--gold);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bot-antenna-tip, .bot-eye {
  fill: var(--gold);
}

.bot-wave {
  transform-box: view-box;
  transform-origin: 50px 31px;
}

.hero-copy h1 {
  font: 600 clamp(46px, 6.2vw, 72px)/1.12 var(--display);
  letter-spacing: -3px;
  margin: 0 0 24px;
}

.hero-copy h1 em {
  color: var(--gold);
  font-style: normal;
}

.hero-intro {
  max-width: 450px;
  color: #aaa9a4;
  font-size: 16px;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 32px;
}

.featured-project {
  min-width: 0;
  border: 1px solid var(--line);
  background: #111214;
}

.featured-image {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(circle, rgba(216, 182, 119, .1), #111214 62%);
  aspect-ratio: 2.1 / 1;
}

.featured-image::after {
  content: "";
  position: absolute;
  inset: -55% auto -55% -45%;
  width: 38%;
  background: linear-gradient(90deg, transparent, rgba(228,201,147,.35), transparent);
  transform: translateX(-180%) rotate(20deg);
  animation: monogram-shimmer 7s cubic-bezier(.22,1,.36,1) 1s infinite;
  pointer-events: none;
}

@keyframes monogram-shimmer {
  0%, 68% { transform: translateX(-180%) rotate(20deg); }
  88%, 100% { transform: translateX(470%) rotate(20deg); }
}

.featured-image img {
  display: block;
  width: clamp(132px, 28%, 190px);
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 50%;
  mix-blend-mode: screen;
  transition: transform .25s ease;
}

.featured-project.tilt-card {
  transform: perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}

.button-gold {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.button-gold::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,.38) 50%, transparent 80%);
  transform: translateX(-120%);
  transition: transform .65s cubic-bezier(.22,1,.36,1);
}

.hero-actions .button-gold span,
.hero-actions .text-link span {
  display: inline-block;
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}

.hero-actions .button-gold > span {
  position: relative;
  z-index: 1;
}

@media (hover: hover) and (pointer: fine) {
  .featured-image:hover img { transform: scale(1.02); }
  .hero-actions .button-gold:hover::after { transform: translateX(120%); }
  .hero-actions a:hover span:not(.button-label) { transform: translateX(4px); }
}

.featured-caption {
  min-height: 96px;
  padding: 18px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.featured-caption .eyebrow {
  margin-bottom: 3px;
  font-size: 11px;
}

.featured-caption h2 {
  font: 500 17px var(--display);
  margin: 0;
}

.featured-caption .text-link {
  white-space: nowrap;
}

@media (max-width: 900px) {
  .home-hero {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 48px;
    padding-top: 64px;
    padding-bottom: 80px;
  }

  .hero-copy {
    max-width: 650px;
  }

  .featured-project {
    width: 100%;
  }
}

@media (max-width: 520px) {
  .home-hero {
    padding-top: 46px;
    gap: 36px;
  }

  .hero-actions {
    gap: 18px;
  }

  .featured-caption {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (hover: none), (prefers-reduced-motion: reduce) {
  .featured-project.tilt-card {
    transform: none;
    transition: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-image::after {
    animation: none;
  }
  .button-gold::after { display: none; }
  .featured-image:hover img,
  .hero-actions a:hover span:not(.button-label) {
    transform: none;
  }
  .hero-actions .button-gold::after,
  .hero-actions a span:not(.button-label) {
    transition: none;
  }
}
</style>
