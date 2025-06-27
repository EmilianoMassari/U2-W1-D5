// Navbar animazione dello scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar")
  const navbarCta = document.querySelector(".navbar__cta")
  const hero = document.querySelector(".hero")

  function handleScroll() {
    const heroBottom = hero.offsetTop + hero.offsetHeight
    const scrollPosition = window.scrollY + navbar.offsetHeight

    if (scrollPosition > heroBottom) {
      navbar.classList.add("scrolled")
      navbarCta.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
      navbarCta.classList.remove("scrolled")
    }
  }

  // Aggiunge l'event listener per lo scroll
  window.addEventListener("scroll", handleScroll)

  handleScroll()
})

// Animazione delle "M" nell'header (span)
document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll("#artwork-m span")
  setInterval(() => {
    const numToHide = Math.floor(letters.length * 0.2)
    letters.forEach((letter) => (letter.style.opacity = 1))
    const indices = []
    while (indices.length < numToHide) {
      const idx = Math.floor(Math.random() * letters.length)
      if (!indices.includes(idx)) indices.push(idx)
    }
    indices.forEach((idx) => {
      letters[idx].style.opacity = 0
    })
  }, 400)
})

// Animazione delle "M" nell'SVG
document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector("svg.artwork-m")
  if (svg) {
    const mPaths = svg.querySelectorAll("path")
    setInterval(() => {
      const numToHide = Math.floor(mPaths.length * 0.2)
      mPaths.forEach((m) => m.setAttribute("opacity", 1))
      const indices = []
      while (indices.length < numToHide) {
        const idx = Math.floor(Math.random() * mPaths.length)
        if (!indices.includes(idx)) indices.push(idx)
      }
      indices.forEach((idx) => {
        mPaths[idx].setAttribute("opacity", 0)
      })
    }, 400)
  }
})
