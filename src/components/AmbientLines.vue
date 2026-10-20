<template>
  <div class="ambient-lines" aria-hidden="true">
    <svg viewBox="0 0 1440 1000" preserveAspectRatio="none" focusable="false">
      <path class="curve curve-one" d="M-160 160C140 360 340-60 650 170S1120 430 1600 110">
        <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M-160 160C140 360 340-60 650 170S1120 430 1600 110;M-160 185C140 285 340 10 650 145S1120 500 1600 135;M-160 135C140 435 340-125 650 195S1120 350 1600 85;M-160 160C140 360 340-60 650 170S1120 430 1600 110" />
      </path>
      <path class="curve curve-two" d="M-180 560C120 260 390 850 700 570S1110 230 1600 690">
        <animate attributeName="d" dur="15.5s" repeatCount="indefinite" values="M-180 560C120 260 390 850 700 570S1110 230 1600 690;M-180 530C120 360 390 730 700 610S1110 120 1600 650;M-180 590C120 160 390 970 700 530S1110 340 1600 730;M-180 560C120 260 390 850 700 570S1110 230 1600 690" />
      </path>
      <path class="curve curve-three" d="M-180 900C100 700 400 1100 720 850S1180 560 1600 980">
        <animate attributeName="d" dur="14s" repeatCount="indefinite" values="M-180 900C100 700 400 1100 720 850S1180 560 1600 980;M-180 870C100 810 400 990 720 890S1180 650 1600 930;M-180 930C100 590 400 1210 720 810S1180 470 1600 1030;M-180 900C100 700 400 1100 720 850S1180 560 1600 980" />
      </path>
    </svg>
  </div>
</template>

<style scoped>
.ambient-lines {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

.curve {
  fill: none;
  stroke: var(--gold);
  stroke-width: 1.2;
  stroke-dasharray: 360 12;
  opacity: .11;
  animation: line-flow 26s linear infinite;
}

.curve-one {
  animation-duration: 29s;
}

.curve-two {
  opacity: .08;
  animation-duration: 36s;
  animation-direction: reverse;
}

.curve-three {
  opacity: .06;
  animation-duration: 32s;
}

@keyframes line-flow {
  to {
    stroke-dashoffset: -372;
  }
}

@media (prefers-reduced-motion: reduce) {
  .curve {
    animation: none;
  }
}
</style>
