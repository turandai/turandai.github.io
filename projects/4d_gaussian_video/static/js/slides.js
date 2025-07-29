let slideIndex = 1;

// Next/previous controls
function plusSlides(group, n) {
  pauseCurrentSlide(group)
  showSlides(group, slideIndex += n);
}
  
// Thumbnail image controls
function currentSlide(group, n) {
  pauseCurrentSlide(group)
  showSlides(group, slideIndex = n);
}

function pauseCurrentSlide(group) {
  let slides = document.getElementsByClassName("mySlides" + group.toString());
  const currentSlide = slides[slideIndex - 1];
  const video = currentSlide.querySelector("video");
  if (video) {
    video.pause()
  }
}

function showSlides(group, n) {
  let i;
  let slides = document.getElementsByClassName("mySlides" + group.toString());
  let dots = document.getElementsByClassName("dot" + group.toString());

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Fade out all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transition = "opacity 0.2s ease";
    slides[i].style.opacity = 0;
  }

  // After fade out, hide all and show the selected slide
  setTimeout(() => {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    const currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";
    currentSlide.style.opacity = 0;
    currentSlide.style.transition = "opacity 0.2s ease";

    // Lazy load the video
    const video = currentSlide.querySelector("video");
    if (video) { // Check if a video exists in the slide
      if (!video.src) {
        video.src = video.getAttribute("data-src");
        video.load();
      }
      video.currentTime = 0;
      video.play();

      video.onended = function() {
        video.pause()
        showSlides(group, slideIndex += 1);
      };
    }
    currentSlide.style.opacity = 1;

  }, 200);

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
    video.style.transition = "opacity 0.2s ease";
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

