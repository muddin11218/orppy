
var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');
var thirdSlide = document.querySelector('.third-slide');
var fourthSlide = document.querySelector('.fourth-slide');
var lastSlide = document.querySelector('.last-slide');

function hideFirstSlide() {
  // Get the element with the class "first-slide"

  // Check if the element exists before trying to hide it
  if (firstSlide && secondSlide) {
    // Hide the first slide
    firstSlide.style.display = 'none';

    // Show the second slide
    secondSlide.style.display = 'block';
}
}

function thirdslide() {

  if (thirdSlide && secondSlide) {
    // Hide the first slide
    secondSlide.style.display = 'none';

    // Show the second slide
    thirdSlide.style.display = 'block';
}

}

function fourthslide() {

  if (thirdSlide && fourthSlide) {
    // Hide the first slide
    thirdSlide.style.display = 'none';

    // Show the second slide
    fourthSlide.style.display = 'block';
}

}

function resizeButton() {
  var button = document.getElementById('resizableButton');
  var copy = document.querySelector('.last-copy');
  // Get the current width, height, and font size
  var currentWidth = button.offsetWidth;
  var currentHeight = button.offsetHeight;
  var currentFontSize = parseInt(window.getComputedStyle(button).fontSize);

  // Increase width, height, and font size by 5 pixels
  var newWidth = currentWidth + 20;
  var newHeight = currentHeight + 20;
  var newFontSize = currentFontSize + 3;

  // Apply the new styles
  button.style.width = newWidth + 'px';
  button.style.backgroundColor = 'red';
  button.style.height = newHeight + 'px';
  button.style.fontSize = newFontSize + 'px';
  copy.innerHTML = 'HMMMMMMMMMMMMMMMMM...';
}


function lastslide() {

  if (firstSlide || secondSlide || thirdSlide || fourthSlide) {
    // Hide the first slide
    firstSlide.style.display = 'none';
    secondSlide.style.display = 'none';
    thirdSlide.style.display = 'none';
    fourthSlide.style.display = 'none';

    // Show the second slide
    lastSlide.style.display = 'block';
}

}


function hearts() {
  var heartBtn = document.querySelector('.hearts');
  heartBtn.style.display = 'block';

}