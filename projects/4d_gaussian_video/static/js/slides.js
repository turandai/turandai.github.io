let slideIndex = 1;

// Next/previous controls
function plusSlides(group, n) {
    showSlides(group, slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(group, n) {
    showSlides(group, slideIndex = n);
  }
  
  function showSlides(group, n) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + group.toString());
    let dots = document.getElementsByClassName("dot" + group.toString());
    // console.log(slides.length);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }