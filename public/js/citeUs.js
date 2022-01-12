function copy(id) {
  text = document.getElementById(id);
  navigator.clipboard.writeText(text.innerText);
}