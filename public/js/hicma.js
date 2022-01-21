const loader = document.querySelector(".loader");
const main = document.querySelector(".main-content");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}

init();
