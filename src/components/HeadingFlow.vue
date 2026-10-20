<template>
  <div class="heading-flow">
    <svg class="heading-flow-lines" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        v-for="strand in 5"
        :key="strand"
        class="heading-flow-strand"
        :class="`strand-${strand}`"
        :transform="`translate(0 ${(strand - 1) * 3})`"
        d="M18 100C-15 60 20 0 95 15C180 35 140 80 240 38C330-5 310 25 450 20C610 15 560-5 725 16C875 30 825 0 925 17C1005 32 995 88 970 102C940 132 995 152 910 146C790 132 845 102 700 134C555 166 580 116 440 138C300 160 355 110 210 144C90 163 135 133 50 145C12 130 0 110 18 100C26 140 42 168 58 198"
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
  stroke-width: 1.1;
  stroke-dasharray: 210 18;
  opacity: .2;
  animation: heading-flow 16s linear infinite;
}

.strand-2 { animation-delay: -0.4s; opacity: .17; }
.strand-3 { animation-delay: -0.8s; opacity: .14; }
.strand-4 { animation-delay: -1.2s; opacity: .11; }
.strand-5 { animation-delay: -1.6s; opacity: .08; }

@keyframes heading-flow {
  to { stroke-dashoffset: -2280; }
}

@media (prefers-reduced-motion: reduce) {
  .heading-flow-strand {
    animation: none;
  }
}
</style>
