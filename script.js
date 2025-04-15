const slides = document.querySelectorAll(".slide");
let current = 0;

function showNextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(showNextSlide, 3000); // change image every 3 seconds
// Get the button
const backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 200px from the top, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // This enables smooth scrolling
  });
}
