const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-image");

let counter = 0;
const size = carouselImages[0].clientWidth;

function slideImages() {
  counter++;
  if (counter >= carouselImages.length) {
    counter = 0;
  }
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

setInterval(slideImages, 3000);
