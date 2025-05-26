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

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Fade out current slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transition = "opacity 0.1s ease";
    slides[i].style.opacity = 0;
  }

  // Delay hiding slides and showing new one
  setTimeout(() => {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 0;
    slides[slideIndex - 1].style.transition = "opacity 0.1s ease";

    // setTimeout(() => {
    slides[slideIndex - 1].style.opacity = 1;
    // }, 0);
  }, 100);

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}


let videoIndex = 1;
function changevideo(path, n)
{
    videoIndex = n;
    let i;
    let dots = document.getElementsByClassName("demo");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[videoIndex-1].className += " active";
    
    var video = document.getElementById("ref_demo");
    // video.src = path
    // video.play();

    // Fade out
    video.style.transition = "opacity 0.1s ease";
    video.style.opacity = 0;

    video.addEventListener("transitionend", function handler() {
        video.removeEventListener("transitionend", handler);
        // Change video src and play
        video.src = path;
        video.play();
        // Fade in
        video.style.opacity = 1;
    }, { once: true });

}

