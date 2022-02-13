const navMenu = document.getElementById("sidebar"),
  openMenu = document.getElementById("open__sidebar"),
  closeMenu = document.getElementById("close__sidebar");

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