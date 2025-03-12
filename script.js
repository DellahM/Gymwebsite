// Toggle mobile menu
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-in');

  if (animatedElements.length === 0) {
      console.warn("No animated elements found.");
      return; // Exit if no animated elements exist
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Add visible class to trigger animation
              observer.unobserve(entry.target); // Stop observing once animated
          }
      });
  });

  animatedElements.forEach(element => {
      observer.observe(element); // Observe each animated element
  });
});

