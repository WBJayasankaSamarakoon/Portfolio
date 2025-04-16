document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav ul")
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (!targetElement) return
  
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
  
        // Close mobile menu if open
        if (nav.classList.contains("show")) {
          nav.classList.remove("show")
        }
  
        // Update active link
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active")
        })
        this.classList.add("active")
      })
    })
  
    // Scroll to top button
    const scrollToTopBtn = document.querySelector(".scroll-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("active")
      } else {
        scrollToTopBtn.classList.remove("active")
      }
  
      // Highlight active section in navigation
      highlightActiveSection()
  
      // Reveal elements on scroll
      revealElements()
    })
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Function to highlight active section in navigation
    function highlightActiveSection() {
      const scrollPosition = window.pageYOffset
      const headerHeight = document.querySelector("header").offsetHeight
  
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }
  
    // Function to reveal elements on scroll
    function revealElements() {
      const revealElements = document.querySelectorAll(".reveal-element")
      const windowHeight = window.innerHeight
  
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }
  
    // Initialize - reveal elements that are already in view
    setTimeout(() => {
      revealElements()
      highlightActiveSection()
    }, 100)
  
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)"
        this.style.boxShadow = "var(--shadow-md)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "var(--shadow)"
      })
    })
  
    // Add hover effect to skill cards
    const skillCards = document.querySelectorAll(".tech-skill")
    skillCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector("i").style.transform = "scale(1.2)"
        this.querySelector("i").style.color = "var(--primary-color)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.querySelector("i").style.transform = "scale(1)"
        this.querySelector("i").style.color = "var(--text-dark)"
      })
    })
  
    // Add hover effect to interest cards
    const interestCards = document.querySelectorAll(".interest-card")
    interestCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector(".interest-icon").style.transform = "scale(1.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.querySelector(".interest-icon").style.transform = "scale(1)"
      })
    })
  })
  