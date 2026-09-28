<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const titles = { '/': 'Chad Gys — Front-end Developer', '/about': 'About — Chad Gys', '/skills': 'Skills — Chad Gys', '/contact': 'Contact — Chad Gys' }
const menuOpen = ref(false)
watch(() => route.path, (path) => { document.title = titles[path] || titles['/']; menuOpen.value = false }, { immediate: true })
</script>

<template>
  <SiteHeader :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" @navigate="menuOpen = false" />
  <main><RouterView /></main>
  <SiteFooter />
</template>
