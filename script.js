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

function scrollToSectionById(id) {
  const section = document.getElementById(id);
  section.scrollIntoView();
}

function scrollToWedding() {
  const section = document.getElementById("wedding");
  section.scrollIntoView();
}
