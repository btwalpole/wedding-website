window.addEventListener("scroll", reveal);
window.onload = reveal();

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
