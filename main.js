const body = document.body;
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

const highResImage = new Image();
highResImage.src = "./src/bg-high.jpeg";

highResImage.onload = () => {
  body.style.setProperty("--background-image", `url(${highResImage.src})`);
  body.classList.add("high-res-loaded");
};

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const navbar = document.getElementById("navbar");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navbar.classList.toggle("active");
  });
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
