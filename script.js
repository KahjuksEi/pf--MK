var navMenu = document.getElementById("navMenu");
var mobileOpenBtn = document.getElementById("mobileOpenBtn");
var mobileCloseBtn = document.getElementById("mobileCloseBtn");

function openMenu() {
  navMenu.style.display = "block";
  mobileCloseBtn.style.display = "block";
  mobileOpenBtn.style.display = "none";
}
function closeMenu() {
  navMenu.style.display = "none";
  mobileCloseBtn.style.display = "none";
  mobileOpenBtn.style.display = "block";
}

var slides = document.querySelectorAll("#slides .slide");
var currSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  goToSlide(currSlide + 1);
}
function prevSlide() {
  goToSlide(currSlide - 1);
}

function goToSlide(n) {
  slides[currSlide].className = "slide";
  currSlide = (n + slides.length) % slides.length;
  slides[currSlide].className = "slide showing";
}

var next = document.getElementById("next");
var previous = document.getElementById("previous");

next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  prevSlide();
};

//anotherSlider
var slides2 = document.querySelectorAll("#slides2 .slide");
var currSlide2 = 0;
var slideInterval2 = setInterval(nextSlide2, 3000);

function nextSlide2() {
  goToSlide2(currSlide2 + 1);
}
function prevSlide2() {
  goToSlide2(currSlide2 - 1);
}

function goToSlide2(n) {
  slides2[currSlide2].className = "slide";
  currSlide2 = (n + slides2.length) % slides2.length;
  slides2[currSlide2].className = "slide showing";
}

var next2 = document.getElementById("next2");
var previous2 = document.getElementById("previous2");

next2.onclick = function () {
  nextSlide2();
};
previous2.onclick = function () {
  prevSlide2();
};
