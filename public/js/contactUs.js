copyPhoneNumber = () => {
  phone_number = document.getElementById("phone-number");
  navigator.clipboard.writeText(phone_number.innerText);
  conf = document.getElementById("copied");
  conf.style.opacity = "1";
  setTimeout(function () {
    conf.style.opacity = "0";
  }, 2 * 1000);
};

copyAlternativePhoneNumber = () => {
  phone_number = document.getElementById("alternative-phone-number");
  navigator.clipboard.writeText(phone_number.innerText);
  conf = document.getElementById("copied");
  conf.style.opacity = "1";
  setTimeout(function () {
    conf.style.opacity = "0";
  }, 2 * 1000);
};

copyEmail = () => {
  email = document.getElementById("email");
  navigator.clipboard.writeText(email.innerText);
  conf = document.getElementById("copied");
  conf.style.opacity = "1";
  setTimeout(function () {
    conf.style.opacity = "0";
  }, 2 * 1000);
};

const map = $("#map");

map.on("mouseover", function () {
  $(this)
    .children("#map-link")
    .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
});

map.on("mousemove", function (e) {
  $(this)
    .children("#map-link")
    .css({
      "transform-origin":
        ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
        "% " +
        ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
        "%",
    });
});

map.on("mouseout", function () {
  $(this).children("#map-link").css({ transform: "scale(1)" });
});
