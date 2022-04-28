submitForm = () => {
  const form = document.getElementById("form");
  form.submit();
};

// The below code is to allow scaling when users hover on the image

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
