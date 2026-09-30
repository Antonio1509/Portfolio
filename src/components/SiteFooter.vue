<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <RouterLink class="footer-brand" to="/">Chad<span>Gys</span></RouterLink>
    <p>Thoughtful interfaces. Built with care.</p>
    <div class="footer-meta"><span>© {{ year }} Chad Gys</span><span>Cape Town, South Africa</span><a href="mailto:gyschad206@email.com">Email ↗</a></div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  min-height: 120px;
  width: min(1120px,88%);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
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

.footer-meta {
  display: flex;
  gap: 22px;
  align-items: center;
  font: 9px var(--mono);
  letter-spacing: .5px;
}

.footer-meta a {
  color: var(--gold);
}

@media (max-width:800px) {
  .site-footer {
    grid-template-columns: 1fr auto;
    padding-block: 25px;
    gap: 8px;
  }
  .site-footer>p {
    grid-column: 1;
    grid-row: 2;
  }
  .footer-meta {
    grid-column: 1/-1;
    justify-content: space-between;
    gap: 10px;
    padding-top: 14px;
    border-top: 1px solid var(--line);
    margin-top: 10px;
  }
}

@media (max-width:430px) {
  .site-footer {
    width: 88%;
  }
  .footer-meta {
    font-size: 8px;
  }
}
</style>
