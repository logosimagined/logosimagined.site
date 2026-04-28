const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileNav.classList.contains("hidden");
    mobileNav.classList.toggle("hidden");
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}
