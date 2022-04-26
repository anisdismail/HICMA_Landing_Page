// Slick, a jQuery plugin, is used for the slideshow
$(".one-time").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  prevArrow: $('#prev__btn'),
  nextArrow: $('#next__btn'),
  fade: true,
  responsive: "unslick",
});

document.querySelector(".download__btn").onclick = () => {
  // Downloads the file whose path is in the anchor #zip.
  document.querySelector("#zip").click();
};

openCitation = () => {
  // This is the copy icon of Citation. When clicked,
  // it copies the text to clipboard, and closes the
  // bibtex__modal if opened, and opens the citation__modal.
  navigator.clipboard.writeText(
    `Ismail, A.. (2022). HICMA, Lebanese American University.`
  );
  document.querySelector(".bibtex__modal").style.display = "none";
  document.querySelector(".citation__modal").style.display = "table";
  document.querySelector(".container").style.filter = "blur(1px)";
  document.querySelector("#navbars").style.filter = "blur(1px)";
};

closeCitation = () => {
  // It closes the citation__modal
  document.querySelector(".citation__modal").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0px)";
  document.querySelector("#navbars").style.filter = "blur(0px)";
};

openBibtex = () => {
  // This is the copy icon of Bibtex. When clicked,
  // it copies the text to clipboard, and closes the
  // citation__modal if opened, and opens the bibtex__modal.
  navigator.clipboard.writeText(`@misc{hicma_dataset,
    author={Ismail, A.},
    title={{HICMA}},
    year={2022},
    howpublished={Lebanese American University}
  }`);
  document.querySelector(".citation__modal").style.display = "none";
  document.querySelector(".bibtex__modal").style.display = "table";
  document.querySelector(".container").style.filter = "blur(1px)";
  document.querySelector("#navbars").style.filter = "blur(1px)";
};

closeBibtex = () => {
  // It closes the bibtex__modal
  document.querySelector(".bibtex__modal").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0px)";
  document.querySelector("#navbars").style.filter = "blur(0px)";
};
