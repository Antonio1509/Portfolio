<script setup>
defineProps({ menuOpen: Boolean })
defineEmits(['toggle-menu', 'navigate'])
const links = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/skills', label: 'Skills' }]
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" @click="$emit('navigate')" aria-label="Chad Gys home"><span class="brand-mark"><img class="brand-image" src="/src/assets/cg-monogram.png" alt="" /></span><span class="brand-name">CHAD<span>GYS</span></span></RouterLink>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="$emit('toggle-menu')"><span></span><span></span></button>
    <nav class="nav-links" :class="{ open: menuOpen }" aria-label="Main navigation">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="$emit('navigate')">{{ link.label }}</RouterLink>
      <RouterLink class="nav-cta" to="/contact" @click="$emit('navigate')">Let’s talk <span>↗</span></RouterLink>
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
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-links>a {
  font-size: 13px;
  color: #aaa9a4;
  transition: color .2s;
}

.nav-links>a:hover, .nav-links>a.router-link-exact-active {
  color: var(--gold-bright);
}

.nav-links .nav-cta {
  color: var(--text);
  border: 1px solid #45433e;
  padding: 10px 16px;
  border-radius: 2px;
}

.nav-cta span {
  color: var(--gold);
  margin-left: 9px;
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
