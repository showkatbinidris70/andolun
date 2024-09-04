/**
 * Template Name: Multi
 * Template URL: https://bootstrapmade.com/multi-responsive-bootstrap-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

// Initialize Swiper

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document
    .querySelectorAll(".carousel-indicators")
    .forEach((carouselIndicator) => {
      carouselIndicator
        .closest(".carousel")
        .querySelectorAll(".carousel-item")
        .forEach((carouselItem, index) => {
          if (index === 0) {
            carouselIndicator.innerHTML += `<li data-bs-target="#${
              carouselIndicator.closest(".carousel").id
            }" data-bs-slide-to="${index}" class="active"></li>`;
          } else {
            carouselIndicator.innerHTML += `<li data-bs-target="#${
              carouselIndicator.closest(".carousel").id
            }" data-bs-slide-to="${index}"></li>`;
          }
        });
    });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

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

  var swiper = new Swiper(".mySwiper", {
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

  var shahidListSwiper = new Swiper(".shahidListSwiper", {
    cssMode: true,
    loop: true,
    speed: 5000,
    slidesPerView: 6,
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

  // upcoming event start
  var countdownDate = new Date("Dec 31, 2024 10:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 6 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

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

  // video gallery start
  // document.addEventListener("DOMContentLoaded", function () {
  //   const links = document.querySelectorAll("a[data-image]");
  //   const images = document.querySelectorAll(".slider-image");
  //   let isDragging = false;
  //   let startX = 0;
  //   let currentIndex = 0;

  //   function activateImage(targetId) {
  //     images.forEach((image) => {
  //       if (image.id === targetId) {
  //         image.classList.add("active");
  //       } else {
  //         image.classList.remove("active");
  //       }
  //     });
  //     links.forEach((link) => {
  //       link.classList.remove("active-link");
  //     });
  //     document
  //       .querySelector(`a[data-image="${targetId}"]`)
  //       .classList.add("active-link");
  //   }

  //   function handleLinkClick(event) {
  //     event.preventDefault();
  //     const targetId = this.getAttribute("data-image");
  //     activateImage(targetId);
  //   }
  //   links.forEach((link) => {
  //     link.addEventListener("click", handleLinkClick);
  //   });
  //   activateImage("image_1");
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[data-video]");
    const videos = document.querySelectorAll(".slider-video");

    function activateVideo(targetId) {
      // Remove active class from all videos
      videos.forEach((video) => {
        if (video.id === targetId) {
          video.classList.add("active");
        } else {
          video.classList.remove("active");
        }
      });

      // Remove active class from all links
      links.forEach((link) => {
        link.classList.remove("active-link");
      });

      // Add active class to the corresponding link
      document
        .querySelector(`a[data-video="${targetId}"]`)
        .classList.add("active-link");
    }

    function handleLinkClick(event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-video");
      activateVideo(targetId);
    }

    // Add click event to links
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
    activateVideo("video_1"); // Set the initial video to be active
  });
  // vidoe gallery end
})();

// ---------------------------------------------------------------------

//css scroll animation start
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
//css scroll animation end

// latest news slider start
$(document).ready(function () {
  $(".latest-news-slider").slick({
    autoplay: true, // Auto-play the slides
    arrows: true, // Show navigation arrows
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// latest news slider end

// lightbox video start
// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + "&autoplay=1"; // adding autoplay to the URL
  document.getElementById(div).style.display = "block";
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace("&autoplay=1", ""); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = "none";
}
// lightbox video end
// important links slider start
$(document).ready(function () {
  $(".important-links-slider").slick({
    autoplay: true, // Auto-play the slides
    arrows: true, // Show navigation arrows
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 7, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// important links slider end
