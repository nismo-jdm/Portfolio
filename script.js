const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Graphic design gallery filters
const filterButtons = document.querySelectorAll(".filter-btn");
const designCards = document.querySelectorAll(".design-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    designCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

// Accessible image lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxTitle = lightbox.querySelector(".lightbox-title");
const closeLightbox = lightbox.querySelector(".lightbox-close");
let previousFocus = null;

function openLightbox(card) {
  previousFocus = document.activeElement;
  lightboxImage.src = card.dataset.image;
  lightboxImage.alt = card.querySelector("img").alt;
  lightboxTitle.textContent = card.dataset.title;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  closeLightbox.focus();
  document.body.style.overflow = "hidden";
}
function hideLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
  if (previousFocus) previousFocus.focus();
}
designCards.forEach(card => card.addEventListener("click", () => openLightbox(card)));
closeLightbox.addEventListener("click", hideLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) hideLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) hideLightbox();
});

// Reveal sections gently as they enter the viewport.
const revealTargets = document.querySelectorAll(".intro-grid, .section-heading, .design-card, .project-row, .skill-panel");
revealTargets.forEach(el => el.classList.add("reveal"));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => observer.observe(el));
