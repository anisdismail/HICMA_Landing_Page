function copy(id) {
  text = document.getElementById(id);
  navigator.clipboard.writeText(text.innerText);

  conf = document.getElementById(`copied`);
  conf.style.opacity = "1";
  setTimeout(function () {
    conf.style.opacity = "0";
  }, 2 * 1000);
}
