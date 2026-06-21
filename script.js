// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Header & Title Animation (On page load)
gsap.from("header", {
  duration: 1.2,
  y: -50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from("header h1", {
  duration: 1.5,
  opacity: 0,
  scale: 0.8,
  delay: 0.3,
  ease: "elastic.out(1, 0.5)" // Slight bounce effect
});

// 2. 3D Spline Container Animation (Slow fade in)
gsap.from(".spline-container", {
  duration: 2,
  opacity: 0,
  delay: 0.8, // Appears after the header
  ease: "power2.inOut"
});

// 3. About Section Animation (On scroll)
gsap.from(".about h2", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%", // Animation starts when the section hits 80% of the viewport
  },
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".about p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
  },
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.2, // Paragraph appears right after the heading
  ease: "power3.out"
});

// 4. Projects Section Animation
gsap.from(".projects h2", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
  },
  duration: 1,
  y: -30,
  opacity: 0,
  ease: "power3.out"
});

// Project Cards - Stagger Animation (Cards appear one after another)
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 85%",
  },
  duration: 0.8,
  y: 50, // Slides up from bottom
  opacity: 0,
  stagger: 0.2, // Time gap between each card's animation
  ease: "back.out(1.5)" // Premium pop effect at the end
});

// 5. Footer Animation
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%",
  },
  duration: 1,
  opacity: 0,
  y: 30,
  ease: "power2.out"
});