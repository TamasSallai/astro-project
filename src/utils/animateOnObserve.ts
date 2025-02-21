export const animateOnObserve = (parentSelector: string = 'body') => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const parentElement = document.querySelector(parentSelector)
  if (!parentElement) {
    console.log('No parent element found for animations')
    return
  }

  if (parentElement.querySelectorAll('[data-animate]').length === 0) {
    console.log('No child elements found for animations')
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatableElements = entry.target.querySelectorAll('[data-animate]')

          animatableElements.forEach((element) => {
            element.classList.add('animate-in')
          })

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
    },
  )

  observer.observe(parentElement)
}
