import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const cleanups = new WeakMap()
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

function registerCleanup(element, cleanup) {
  const elementCleanups = cleanups.get(element) || []
  elementCleanups.push(cleanup)
  cleanups.set(element, elementCleanups)
}

function cleanupElement(element) {
  cleanups.get(element)?.forEach((cleanup) => cleanup())
  cleanups.delete(element)
}

const revealDirective = {
  mounted(element, binding) {
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      element.classList.add('scroll-reveal-visible')
      return
    }

    const index = Number(binding.value) || 0
    element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`)
    element.classList.add('scroll-reveal')

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      element.classList.add('scroll-reveal-visible')
      observer.unobserve(element)
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    observer.observe(element)
    registerCleanup(element, () => observer.disconnect())
  },
  unmounted(element) {
    cleanupElement(element)
  },
}

const tiltDirective = {
  mounted(element) {
    if (!finePointer.matches || prefersReducedMotion.matches) return
    element.classList.add('tilt-card')

    const move = (event) => {
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      element.style.setProperty('--tilt-x', `${-y * 4}deg`)
      element.style.setProperty('--tilt-y', `${x * 4}deg`)
    }
    const reset = () => {
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
    }

    element.addEventListener('pointermove', move, { passive: true })
    element.addEventListener('pointerleave', reset)
    registerCleanup(element, () => {
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', reset)
    })
  },
  unmounted(element) {
    cleanupElement(element)
  },
}

const magneticDirective = {
  mounted(element) {
    if (!finePointer.matches || prefersReducedMotion.matches) return
    element.classList.add('magnetic')

    const move = (event) => {
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12
      const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12
      element.style.setProperty('--mag-x', `${Math.max(-7, Math.min(7, x))}px`)
      element.style.setProperty('--mag-y', `${Math.max(-7, Math.min(7, y))}px`)
      element.classList.add('is-magnetic')
    }
    const reset = () => {
      element.style.removeProperty('--mag-x')
      element.style.removeProperty('--mag-y')
      element.classList.remove('is-magnetic')
    }

    element.addEventListener('pointermove', move, { passive: true })
    element.addEventListener('pointerleave', reset)
    registerCleanup(element, () => {
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', reset)
    })
  },
  unmounted(element) {
    cleanupElement(element)
  },
}

createApp(App)
  .use(router)
  .directive('reveal', revealDirective)
  .directive('tilt', tiltDirective)
  .directive('magnetic', magneticDirective)
  .mount('#app')
