const nav = document.querySelector("#nav-bar");
const topOfNav = nav.offsetTop;
const mobileNav = window.innerWidth;

function fixNav() {
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
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});
