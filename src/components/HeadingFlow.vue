<template>
  <div class="heading-flow">
    <svg class="heading-flow-lines" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        v-for="strand in 5"
        :key="strand"
        class="heading-flow-strand"
        :class="`strand-${strand}`"
        :d="`M18 ${92 + strand * 2} C5 ${45 + strand * 2} 20 ${18 + strand * 2} 75 ${18 + strand * 2} C300 ${10 + strand * 2} 700 ${10 + strand * 2} 925 ${18 + strand * 2} C980 ${18 + strand * 2} 995 ${45 + strand * 2} 982 ${85 + strand * 2} C975 ${115 + strand * 2} 945 ${126 + strand * 2} 900 ${126 + strand * 2} C650 ${135 + strand * 2} 320 ${116 + strand * 2} 85 ${126 + strand * 2} C35 ${128 + strand * 2} 13 ${112 + strand * 2} 18 ${92 + strand * 2} C21 ${125 + strand * 2} 36 ${158 + strand * 2} 58 198`"
      />
    </svg>
    <slot />
  </div>
</template>

<style scoped>
.heading-flow {
  position: relative;
  display: inline-block;
  max-width: 100%;
  isolation: isolate;
}

.heading-flow-lines {
  position: absolute;
  z-index: -1;
  top: -12px;
  left: -24px;
  width: calc(100% + 48px);
  height: calc(100% + 58px);
  overflow: visible;
  pointer-events: none;
}

.heading-flow-strand {
  fill: none;
  stroke: var(--gold);
  stroke-width: 1;
  stroke-dasharray: 155 20;
  opacity: .15;
  animation: heading-flow 18s linear infinite;
}

.strand-2 { animation-delay: -0.45s; opacity: .13; }
.strand-3 { animation-delay: -0.9s; opacity: .11; }
.strand-4 { animation-delay: -1.35s; opacity: .09; }
.strand-5 { animation-delay: -1.8s; opacity: .07; }

@keyframes heading-flow {
  to { stroke-dashoffset: -1750; }
}

@media (prefers-reduced-motion: reduce) {
  .heading-flow-strand {
    animation: none;
  }
}
</style>
