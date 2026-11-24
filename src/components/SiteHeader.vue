<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
import monogram from '../assets/cg-monogram-transparent.png'
import { isReducedMotion } from '../utils/animations'

const props = defineProps({
  menuOpen: Boolean,
  activeSection: { type: String, default: 'home' },
  theme: { type: String, default: 'dark' },
})
const emit = defineEmits(['toggle-menu', 'toggle-theme', 'navigate', 'section-change'])
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
    <a class="brand" href="#home" @click="$emit('navigate')" aria-label="Chad Gys home"><span class="brand-mark"><img class="brand-image" :src="monogram" alt="" /></span><span class="brand-name">CHAD<span>GYS</span></span></a>
    <div class="header-controls">
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
      <button
        class="theme-toggle"
        type="button"
        :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        :aria-pressed="theme === 'light'"
        @click="emit('toggle-theme')"
      >
        <span class="theme-icon" aria-hidden="true">{{ theme === 'dark' ? '☼' : '☾' }}</span>
        {{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}
      </button>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="$emit('toggle-menu')"><span></span><span></span></button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  height: 88px;
  padding: 0 max(6vw,32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--header-line);
  background: var(--header-bg);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 30px;
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
  mix-blend-mode: normal;
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
  color: var(--text-secondary);
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

.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 11px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  font: 500 11px var(--mono);
  white-space: nowrap;
  cursor: pointer;
  transition: border-color .25s ease, color .25s ease, background .25s ease;
}

.theme-icon {
  color: var(--gold);
  font-size: 15px;
  line-height: 1;
}

.theme-toggle:focus-visible,
.menu-toggle:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}

@media (hover: hover) and (pointer: fine) {
  .theme-toggle:hover {
    border-color: var(--gold);
    color: var(--gold-bright);
  }
}

.menu-toggle {
  display: none;
}

@media (max-width:800px) {
  .site-header {
    height: 74px;
    padding-inline: 6%;
  }
  .header-controls {
    gap: 12px;
  }
  .menu-toggle {
    width: 38px;
    height: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;
    border: 1px solid var(--line-strong);
    background: var(--surface);
    color: var(--text);
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
    background: var(--panel);
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
