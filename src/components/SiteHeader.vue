<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { isReducedMotion } from '../utils/animations'

const props = defineProps({ menuOpen: Boolean, activeSection: { type: String, default: 'home' } })
const emit = defineEmits(['toggle-menu', 'navigate', 'section-change'])
const links = [{ to: '#home', label: 'Home' }, { to: '#about', label: 'About' }, { to: '#skills', label: 'Skills' }, { to: '#projects', label: 'Projects' }, { to: '#contact', label: 'Contact' }]
const nav = ref(null)
const indicator = ref(null)
let resizeHandler

function moveIndicator(animate = true) {
  const activeLink = nav.value?.querySelector(`a[href="#${props.activeSection}"]`)
  if (!activeLink || !indicator.value) return
  const x = activeLink.offsetLeft
  const width = activeLink.offsetWidth
  const y = activeLink.offsetTop + activeLink.offsetHeight + 2
  gsap.to(indicator.value, {
    x,
    y,
    scaleX: width,
    duration: animate && !isReducedMotion() ? 0.5 : 0,
    ease: 'power3.out',
    overwrite: true,
  })
}

function selectSection(target) {
  emit('section-change', target.slice(1))
  emit('navigate')
}

watch(() => [props.activeSection, props.menuOpen], async () => {
  await nextTick()
  moveIndicator()
})

onMounted(() => {
  nextTick(() => moveIndicator(false))
  resizeHandler = () => moveIndicator(false)
  window.addEventListener('resize', resizeHandler, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  if (indicator.value) gsap.killTweensOf(indicator.value)
})
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#home" @click="$emit('navigate')" aria-label="Chad Gys home"><span class="brand-mark"><img class="brand-image" src="/src/assets/cg-monogram.png" alt="" /></span><span class="brand-name">CHAD<span>GYS</span></span></a>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="$emit('toggle-menu')"><span></span><span></span></button>
    <nav ref="nav" class="nav-links" :class="{ open: menuOpen }" aria-label="Main navigation">
      <a
        v-for="link in links"
        :key="link.to"
        :href="link.to"
        :class="{ active: activeSection === link.to.slice(1) }"
        @click="selectSection(link.to)"
      >{{ link.label }}</a>
      <span ref="indicator" class="nav-indicator" aria-hidden="true"></span>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  height: 88px;
  padding: 0 max(6vw,32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,.07);
  background: rgba(12,13,15,.91);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 13px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  overflow: hidden;
  border: 1px solid #766342;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
}

.brand-image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  mix-blend-mode: screen;
}

.brand-name {
  font: 700 12px var(--display);
  letter-spacing: 2px;
}

.nav-links {
  position: relative;
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-links>a {
  font-size: 13px;
  color: #aaa9a4;
}

.nav-links>a:focus-visible, .nav-links>a.active {
  color: var(--gold-bright);
}

@media (hover: hover) and (pointer: fine) {
  .nav-links>a:hover { color: var(--gold-bright); }
}

.nav-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
}

.menu-toggle {
  display: none;
}

@media (max-width:800px) {
  .site-header {
    height: 74px;
    padding-inline: 6%;
  }
  .menu-toggle {
    width: 38px;
    height: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;
    border: 1px solid #393936;
    background: none;
    color: white;
  }
  .menu-toggle span {
    height: 1px;
    width: 16px;
    background: var(--gold);
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 73px;
    left: 0;
    right: 0;
    padding: 22px 6% 27px;
    background: #111214;
    border-bottom: 1px solid var(--line);
    align-items: stretch;
    gap: 17px;
    flex-direction: column;
  }
  .nav-links.open {
    display: flex;
  }
  .nav-links .nav-cta {
    align-self: flex-start;
  }
}
</style>
