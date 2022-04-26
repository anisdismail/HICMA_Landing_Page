function copy(id) {
  text = document.getElementById(id);
  navigator.clipboard.writeText(text.innerText);
  showConfirmation();
}


showConfirmation = () => {
  var copied = document.createElement("div");
  copied.style.opacity = 0;
  copied.style.position = "fixed";
  copied.style.display = "flex";
  copied.style.alignItems = "center";
  copied.style.bottom = "25px";
  copied.style.right = "25px";
  copied.style.width = "240px";
  copied.style.height = "55px";
  copied.style.boxSizing = "border-box";
  copied.style.padding = "15px";
  copied.style.backgroundColor = "#cbbd78";
  copied.style.color = "white";
  copied.style.borderRadius = "8px";
  copied.style.boxShadow = "rgba(149, 157, 165, 0.15) 0px 8px 24px";
  copied.setAttribute("class", "copied");

  var clipboardIcon = document.createElement("ion-icon");
  clipboardIcon.setAttribute("name", "clipboard");
  clipboardIcon.style.fontSize = "1.3rem";

  var span = document.createElement("span");
  span.style.marginLeft = "15px";
  span.innerText = "Copied to clipboard!";

  $(copied).append(clipboardIcon);
  $(copied).append(span);
  $("body").append(copied);

  copied.style.opacity = "1";
  setTimeout(function () {
    copied.style.opacity = "0";
  }, 2000);
};