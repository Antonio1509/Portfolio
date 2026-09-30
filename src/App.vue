<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const titles = { '/': 'Chad Gys — Front-end Developer', '/about': 'About — Chad Gys', '/skills': 'Skills — Chad Gys', '/contact': 'Contact — Chad Gys' }
titles['/projects'] = 'Projects - Chad Gys'
const menuOpen = ref(false)
watch(() => route.path, (path) => { document.title = titles[path] || titles['/']; menuOpen.value = false }, { immediate: true })
</script>

<template>
  <SiteHeader :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" @navigate="menuOpen = false" />
  <main><RouterView /></main>
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

body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.7;
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

@media (max-width:800px) {
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
