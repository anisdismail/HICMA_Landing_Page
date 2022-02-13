const loader__line = document.querySelector(".loader__line");
const main = document.querySelector(".main-content");

function init() {
  setTimeout(() => {
    loader__line.style.opacity = 0;
    loader__line.style.display = "none";

    main.style.display = "block"; 
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}

init();