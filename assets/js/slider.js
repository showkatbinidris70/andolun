// hero slider start
var swiper = new Swiper(".heroSwiperSwiper", {
  cssMode: true,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
// hero slider end

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
  mousewheel: true,
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
