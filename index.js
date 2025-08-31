// Grab elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Add click event to toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});