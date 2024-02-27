// ===== Sticky NavigationBar =======

const nav = document.querySelector("#nav-bar");
const topOfNav = nav.offsetTop;
const mobileNav = window.innerWidth;

function fixNav() {
  // If the window size is less than 960px
  if (mobileNav <= 960) {
    document.getElementById("nav-bar").style.zIndex = "1";
    if (window.scrollY >= topOfNav) {
      document.body.paddingTop = nav.offsetHeight + "px";
      document.body.classList.add("fixed-nav");
    } else {
      document.getElementById("nav-bar").style.zIndex = "0";
      document.body.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    }
  } else {
    if (window.scrollY >= topOfNav) {
      document.body.paddingTop = nav.offsetHeight + "px";
      document.body.classList.add("fixed-nav");
    } else {
      document.body.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    }
  }
}

window.addEventListener("scroll", fixNav);

// Google Fit Integration
function initGoogleFit() {
  gapi.client.init({
    apiKey: 'AIzaSyDgP3JoWMilh4fb6DWC1kPd1I3Ld6SP3_4',
    clientId: '647037879688-p5bog3s7agv892d0iis6j265r50mtoa5.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/fitness/v1/rest'],
    scope: 'https://www.googleapis.com/auth/fitness.activity.read',
  }).then(function () {
    // Additional initialization if needed
  });
}

function signInGoogleFit() {
  gapi.auth2.getAuthInstance().signIn();
}

// Carousel
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#button-next");
const prev = document.querySelector("#button-prev");

const nextSlide = () => {
  const current = document.querySelector(".current-slide");
  current.classList.remove("current-slide");
  const nextSlide = current.nextElementSibling || slides[0];
  nextSlide.classList.add('current-slide');
  setTimeout(() => current.classList.remove('current-slide'));
}

const prevSlide = () => {
  const current = document.querySelector(".current-slide");
  current.classList.remove("current-slide");
  const prevSlide = current.previousElementSibling || slides[slides.length - 1];
  prevSlide.classList.add('current-slide');
  setTimeout(() => current.classList.remove('current-slide'));
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


// Button event
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});
