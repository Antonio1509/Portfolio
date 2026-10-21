import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createScrollParallax, isReducedMotion } from './utils/animations'

const cleanups = new WeakMap()
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
    const settings = typeof binding.value === 'object' && binding.value !== null
      ? binding.value
      : { delay: Math.min(Number(binding.value) || 0, 8) * 70 }
    const delay = Number(settings.delay) || 0
    const revealClass = settings.clipPath ? 'scroll-reveal-clip' : 'scroll-reveal'

    element.style.setProperty('--reveal-delay', `${delay}ms`)

    if (isReducedMotion() || !('IntersectionObserver' in window)) {
      element.classList.add(revealClass, 'scroll-reveal-visible')
      return
    }

    element.classList.add(revealClass)
    let revealed = false
    let observer
    const reveal = () => {
      if (revealed) return
      revealed = true
      observer.disconnect()
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
      element.classList.add('scroll-reveal-visible')
    }
    const checkPosition = () => {
      if (element.getBoundingClientRect().top < window.innerHeight - 32) reveal()
    }

    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) reveal()
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    observer.observe(element)
    window.addEventListener('scroll', checkPosition, { passive: true })
    window.addEventListener('resize', checkPosition)
    checkPosition()

    registerCleanup(element, () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
    })
  },
  unmounted(element) {
    cleanupElement(element)
  },
}

const tiltDirective = {
  mounted(element, binding) {
    if (!finePointer.matches || isReducedMotion()) return
    element.classList.add('tilt-card')
    const maxTilt = Number(binding.value) || 4

    const move = (event) => {
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      element.style.setProperty('--tilt-x', `${-y * maxTilt}deg`)
      element.style.setProperty('--tilt-y', `${x * maxTilt}deg`)
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
    if (!finePointer.matches || isReducedMotion()) return
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

const projectMotionDirective = {
  mounted(element) {
    const visual = element.querySelector('.project-visual')
    const parallax = element.querySelector('.project-image-parallax')
    const cleanParallax = createScrollParallax(parallax, { y: 18 })

    const move = (event) => {
      if (!visual) return
      const bounds = visual.getBoundingClientRect()
      visual.style.setProperty('--x', `${event.clientX - bounds.left}px`)
      visual.style.setProperty('--y', `${event.clientY - bounds.top}px`)
    }
    const reset = () => {
      visual?.style.removeProperty('--x')
      visual?.style.removeProperty('--y')
    }

    if (visual && finePointer.matches && !isReducedMotion()) {
      visual.addEventListener('pointermove', move, { passive: true })
      visual.addEventListener('pointerleave', reset)
    }

    registerCleanup(element, () => {
      cleanParallax()
      visual?.removeEventListener('pointermove', move)
      visual?.removeEventListener('pointerleave', reset)
      reset()
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
  .directive('project-motion', projectMotionDirective)
  .mount('#app')
