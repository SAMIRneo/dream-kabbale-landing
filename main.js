import { renderLandingPage } from './renderLandingPage.js'

document.querySelector('#app').innerHTML = renderLandingPage()

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  },
  { threshold: 0.14 }
)

document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

const parallaxNodes = document.querySelectorAll('[data-parallax]')
window.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 10
  const y = (event.clientY / window.innerHeight - 0.5) * 10
  parallaxNodes.forEach((node) => {
    const speed = Number(node.dataset.parallax || 1)
    node.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`
  })
})
