window.addEventListener("load", () => {
  if (window.innerWidth >= 972) {
    navBar.classList.add("navbar");
    navBar.classList.remove("navbar-mobile");
  } else {
    navBar.classList.remove("navbar");
    navBar.classList.add("navbar-mobile");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 972) {
    navBar.classList.add("navbar");
    navBar.classList.remove("navbar-mobile");
  } else {
    navBar.classList.remove("navbar");
    navBar.classList.add("navbar-mobile");
  }
});

/**** variables ****/

const navBar = document.querySelector(".navbar");
const logoMenu = document.querySelector(".logo-menu");
const navbarAncre = document.querySelectorAll("li");

/**** Event ****/

window.addEventListener("scroll", () => {
  if (window.innerWidth > 972 && window.scrollY > 100) {
    navBar.classList.add("navbar-anim");
  } else {
    navBar.classList.remove("navbar-anim");
  }
});

logoMenu.addEventListener("click", () => {
  if (window.innerWidth < 972) {
    navBar.classList.toggle("navbar-mobile-toggle");
  }
});

navbarAncre.forEach((lien) => {
  lien.addEventListener("click", () => {
    navBar.classList.toggle("navbar-mobile-toggle");
  });
});
