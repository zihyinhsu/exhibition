$(document).ready(function () {
   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
});