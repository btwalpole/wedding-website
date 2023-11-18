window.addEventListener("scroll", reveal);
window.onload = reveal();

const leftTop = document.getElementById("left-top");
const rightTop = document.getElementById("right-top");

window.onscroll = function () {
  var scrollLimit = 100;

  console.log("scrolling");
  console.log(leftTop);
  console.log("rightTop", rightTop);

  if (window.scrollY >= scrollLimit) {
    console.log("past scrollLimit");

    if (
      !leftTop.classList.contains("visible") &&
      !rightTop.classList.contains("visible")
    ) {
      leftTop.classList.add("visible");
      rightTop.classList.add("visible");
    }
  }
  if (window.scrollY < scrollLimit) {
    console.log("above scrollLimit");

    if (
      leftTop.classList.contains("visible") &&
      leftTop.classList.contains("visible")
    ) {
      leftTop.classList.remove("visible");
      rightTop.classList.remove("visible");
    }
  }
};

function reveal() {
  const nav = document.querySelector("#nav-menu");
  var revealTop = wedding.getBoundingClientRect().top;

  function onPageLoad(str) {
    if (
      !nav.classList.contains("nav-active") &&
      !nav.classList.contains("nav-inactive")
    ) {
      nav.classList.add(str);
    }
  }

  if (revealTop <= 150) {
    onPageLoad("nav-active");
    if (nav.classList.contains("nav-inactive")) {
      nav.classList.add("nav-active");
      nav.classList.remove("nav-inactive");
    }
  } else if (revealTop > 150) {
    onPageLoad("nav-inactive");
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      nav.classList.add("nav-inactive");
    }
  }
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

function onClickLink(id) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href").substring(1) === id) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const idToClick = navLink.getAttribute("href").substring(1);
    onClickLink(idToClick);
  });
});

const chevron = document.getElementById("chevron");
chevron.addEventListener("click", function () {
  onClickLink("wedding");
});
