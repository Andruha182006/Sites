document.addEventListener("DOMContentLoaded", () => {
  // ===== Плавна поява всього контейнера =====
  const main = document.querySelector(".main-container");
  main.classList.add("page-loaded");

  // ===== Анімація зображень при скролі (з попереднього прикладу) =====
  const images = document.querySelectorAll(".images img");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  images.forEach(img => observer.observe(img));

  // ===== Пульсація заголовків =====
  const headers = document.querySelectorAll(".header h1, .header h2");
  headers.forEach(h => {
    h.addEventListener("mouseenter", () => h.classList.add("pulse"));
    h.addEventListener("mouseleave", () => h.classList.remove("pulse"));
  });

  // ===== Підсвічування посилань =====
  document.querySelectorAll(".cat-list a").forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("link-hover");
    });
    link.addEventListener("mouseleave", () => {
      link.classList.remove("link-hover");
    });
  });
});

