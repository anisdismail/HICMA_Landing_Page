const navMenu = document.getElementById("nav-menu"),
  openMenu = document.getElementById("open-nav"),
  closeMenu = document.getElementById("close-nav");

openMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});