<script setup>
defineProps({ menuOpen: Boolean })
defineEmits(['toggle-menu', 'navigate'])
const links = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/skills', label: 'Skills' }, { to: '/contact', label: 'Contact' }]
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" @click="$emit('navigate')" aria-label="Chad Gys home"><span class="brand-mark"><span class="brand-initials">CG</span></span><span class="brand-name">CHAD<span>GYS</span></span></RouterLink>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="$emit('toggle-menu')"><span></span><span></span></button>
    <nav class="nav-links" :class="{ open: menuOpen }" aria-label="Main navigation">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="$emit('navigate')">{{ link.label }}</RouterLink>
      <RouterLink class="nav-cta" to="/contact" @click="$emit('navigate')">Let’s talk <span>↗</span></RouterLink>
    </nav>
  </header>
</template>
