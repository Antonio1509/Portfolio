<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <a class="footer-brand" href="#home">Chad<span>Gys</span></a>
    <p>Copyright © {{ year }} Chad Gys | Portfolio</p>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  min-height: 120px;
  width: min(1120px,88%);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 20px;
  color: #777671;
  font-size: 11px;
}

.footer-brand {
  font: 700 16px var(--display);
  color: var(--text);
}

.site-footer>p {
  margin: 0;
}

@media (max-width:800px) {
  .site-footer {
    grid-template-columns: 1fr auto;
    padding-block: 25px;
    gap: 8px;
  }
}

@media (max-width:430px) {
  .site-footer {
    width: 88%;
  }
}
</style>
