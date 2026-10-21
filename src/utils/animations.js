import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function isReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function createScrollParallax(element, { y = 20 } = {}) {
  if (!element || isReducedMotion()) return () => {}

  const context = gsap.context(() => {
    gsap.to(element, {
      y,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
      },
    })
  }, element)

  return () => context.revert()
}

export function createScrollCounter(element, target) {
  if (!element) return () => {}
  if (isReducedMotion()) {
    element.textContent = String(target)
    return () => {}
  }

  const value = { count: 0 }
  const context = gsap.context(() => {
    gsap.to(value, {
      count: target,
      duration: 0.9,
      ease: 'power3.out',
      snap: { count: 1 },
      onUpdate: () => {
        element.textContent = String(value.count)
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        once: true,
      },
    })
  }, element)

  return () => context.revert()
}

export function createScrollProgress(element) {
  if (!element) return () => {}
  if (isReducedMotion()) {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
        : 0
      gsap.set(element, { scaleX: progress })
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }

  const context = gsap.context(() => {
    gsap.to(element, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
  }, element)

  return () => context.revert()
}
