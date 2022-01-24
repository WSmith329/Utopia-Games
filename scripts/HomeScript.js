// Home page specific script

// SPLASH SCREEN ANIMATION
$(document).ready(function () {
  $('#splashLogo').hide();
  $('#splashLogo').delay(500).fadeIn(1000, function () {
    $('.splash').delay(500).fadeOut(1000)
  });
});



// SLIDESHOW //
// Variables
let slides = ['img/slides/FIFA.jpg', 'img/slides/FC6.jpg', 'img/slides/DL.jpg', 'img/slides/DyL2.jpg'];
let links = ['FIFA-22.html', 'Far-Cry-6.html', 'Deathloop.html', 'Dying-Light-2.html'];
let slideImg = document.querySelector('.slideImage');
let slideRef = document.querySelector('.slideReference');

// Getting control buttons
let prevBtn = document.querySelector('.prevSlide');
let nextBtn = document.querySelector('.nextSlide');

var currentImage = 0;
changeSlide(currentImage);

// Go to previous slide when button clicked
prevBtn.addEventListener('click', () => {
  clearTimeout(slideTimer);
  changeSlide(currentImage += -1);
});

// Go to next slide when button clicked
nextBtn.addEventListener('click', () => {
  clearTimeout(slideTimer);
  changeSlide(currentImage += 1);
});

// Showing the current slide and hiding the others
function changeSlide(n) {

  // Automatic timer doesn't define n
  if (n == undefined) {
    n = ++currentImage
  }

  // Stop index becoming too great or too small
  if (n > slides.length - 1) {
    currentImage = 0
  }
  else if (n < 0) {
    currentImage = slides.length - 1
  }

  // Display current slide
  slideImg.src = slides[currentImage];
  slideRef.href = links[currentImage];

  // Automatic slideshow timer
  slideTimer = setTimeout(changeSlide, 6000);
}