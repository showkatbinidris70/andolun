// loading animation
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// hero slider start
var swiper = new Swiper(".heroSwiperSwiper", {
  loop: true,
  zoom: true,
  effect: "fade",
  // spaceBetween: 30,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 3000,
  autoplayDisableOnInteraction: true,
  slidersPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// hero slider end

// latest news start
var swiper = new Swiper(".letest-new", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});

// latest news end

// all-events-slider start
var swiper = new Swiper(".all-events-slider", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
// all-events-slider end
// history scrolling slider start
var swiper = new Swiper(".history-scrolling-slider", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
// history scrolling slider end

// video section start
function showVideo() {
  // Hide the thumbnail image
  document.querySelector(".thumbnail-image").style.display = "none";
  // Show the iframe and start the video
  document.querySelector(".video-container iframe").style.display = "block";
  document.querySelector(".btn-show").style.display = "none";
}
function showVideo_2() {
  // Hide the thumbnail image
  document.querySelector(".thumbnail-image-2").style.display = "none";
  // Show the iframe and start the video
  document.querySelector(".video-container-2 iframe").style.display = "block";
  document.querySelector(".btn-show-2").style.display = "none";
}
function showVideo_3() {
  // Hide the thumbnail image
  document.querySelector(".thumbnail-image-3").style.display = "none";
  // Show the iframe and start the video
  document.querySelector(".video-container-3 iframe").style.display = "block";
  document.querySelector(".btn-show-3").style.display = "none";
}
function showVideo_4() {
  // Hide the thumbnail image
  document.querySelector(".thumbnail-image-4").style.display = "none";
  // Show the iframe and start the video
  document.querySelector(".video-container-4 iframe").style.display = "block";
  document.querySelector(".btn-show-4").style.display = "none";
}
// video section start

// Initiate Pure Counter
new PureCounter();

// somonnoyk lsit start
var showkat = new Swiper(".shamonnoyk", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },

    575: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
  },
});
// somonnoyk lsit end

// hsitory start
var historySwiperSlider = new Swiper(".historySwiperSlider", {
  direction: "vertical",
  // mousewheel: true,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// hsitory end

// upcoming event start
var countdownDate = new Date("Dec 31, 2024 10:00:00").getTime();

// Update the countdown every 1 second

function toBengaliNumerals(number) {
  const englishToBengali = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };
  return number.toString().replace(/\d/g, (digit) => englishToBengali[digit]);
}

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = toBengaliNumerals(days);
  document.getElementById("hours").innerHTML = toBengaliNumerals(hours);
  document.getElementById("minutes").innerHTML = toBengaliNumerals(minutes);
  document.getElementById("seconds").innerHTML = toBengaliNumerals(seconds);

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);
// upcoming event end

// lightbox video start
function revealVideo(div, video_id, element) {
  var videoUrl =
    "https://www.youtube.com/embed/" + element.getAttribute("data-video-id");
  document.getElementById(video_id).src = videoUrl + "?autoplay=1";
  document.getElementById(div).style.display = "block";
}

function hideVideo(div, video_id) {
  document.getElementById(video_id).src = "";
  document.getElementById(div).style.display = "none";
}
// lightbox video end

// back to top start
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top end

// counter up  start
const englishToBengali = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

// Function to convert English digits to Bengali digits
function convertToBengali(num) {
  return num
    .toString()
    .split("")
    .map((digit) => englishToBengali[digit] || digit)
    .join("");
}

const duration = 2000; // total duration for all counters to finish in milliseconds

document.querySelectorAll(".count").forEach(function (item) {
  let startNumber = 0;
  const targetNumber = parseInt(item.getAttribute("data-number"), 10);
  const increment = targetNumber / (duration / 10); // adjusts the speed

  function counterUp() {
    startNumber += increment;

    if (startNumber >= targetNumber) {
      item.innerHTML = convertToBengali(targetNumber); // Ensure it ends exactly at the target number
      clearInterval(stop);
    } else {
      item.innerHTML = convertToBengali(Math.floor(startNumber));
    }
  }

  const stop = setInterval(counterUp, 10); // update every 10ms for a smooth animation
});
// counter up  end

// aos initialization
AOS.init();

// information form

const imageInput = document.getElementById("imageInput");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imagePreview = document.getElementById("imagePreview");
const changeImageButton = document.getElementById("changeImageButton");

// Event listener to handle image selection
imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreviewContainer.style.display = "block"; // Show the image preview
    };
    reader.readAsDataURL(file);
  }
});

// Event listener to handle change image button
changeImageButton.addEventListener("click", function () {
  imageInput.value = ""; // Clear the input field
  imagePreview.src = ""; // Remove the previous image
  imagePreviewContainer.style.display = "none"; // Hide the image preview
  imageInput.click(); // Trigger the file input to open again
});
