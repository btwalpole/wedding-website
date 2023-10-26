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

function myClick(id) {
  navLinks.forEach((link) => {
    if (link.id === id) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const idToClick = navLink.getAttribute("href").substring(1);
    myClick(idToClick);
  });
});
// window.onscroll = () => {
//   console.log("sections", sections);
//   console.log("navLinks", navLinks);
//   sections.forEach((sec) => {
//     console.log("section", sec);

//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         console.log("in navLinks forEach");
//         links.classList.remove("active-link");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active-link");
//       });
//     }
//   });
// };

// function scrollToSectionById(id) {
//   const section = document.getElementById(id);
//   section.scrollIntoView();
// }

// onclick="scrollToSectionById(`wedding`)"
