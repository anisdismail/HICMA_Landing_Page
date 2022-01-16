$(".one-time").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  prevArrow: false,
  nextArrow: false,
  pauseOnHover: false,
  fade: true,
  responsive: "unslick",
});

copyCitation = () => {
  navigator.clipboard.writeText(
    `Ismail, A.. (2022). HICMA, Lebanese American University.`
  );

  conf = document.getElementById("copied");
  conf.style.opacity = "1";
  setTimeout(function () {
    conf.style.opacity = "0";
  }, 2 * 1000);
};

copyBibTex = () => {
  navigator.clipboard.writeText(`@misc{hicma_dataset,
        author={Ismail, A.},
        title={{HICMA}},
        year={2022},
        howpublished={Lebanese American University}
      }`);

  conf = document.getElementById("copied");
  conf.style.opacity = "1";
  setTimeout(function () {
    conf.style.opacity = "0";
  }, 2 * 1000);
};

download_btn = document.querySelector(".download__btn");

download_btn.onclick = () => {
    document.querySelector("#zip").click();
}