$(document).ready(function () {
  $("#myCarousel").owlCarousel({
    items: 4, // Number of cards shown in each slide
    loop: true, // Continuously loop the carousel
    margin: 30, // Space between cards
    nav: false, // Show navigation buttons
    autoplay: true,

    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1, // Number of cards shown in the carousel for smaller screens
      },
      768: {
        items: 2, // Number of cards shown in the carousel for medium screens
      },
      992: {
        items: 4, // Number of cards shown in the carousel for large screens
      },
    },
  });
});
// Menu Button
var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {
  menu.classList.toggle("active");
};
