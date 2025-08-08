document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // HERO animations
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-title .line", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  })
  .from(".hero-subtitle .line", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15
  }, "-=0.4")
  .from(".cta-button", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5
  }, "-=0.2");

  // Parallax background
  document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(".hero-bg-layer", {
      x: x,
      y: y,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // SCROLL REVEALS
  gsap.utils.toArray(".tech-grid img, .project-card").forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  });
});
