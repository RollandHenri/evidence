/**** Variables ****/
const navbar = document.querySelector("nav");
const logo = document.querySelector(".nav-logo");

/**** Anim Dom ****/
window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    navbar.classList.add("navBar-js");
  } else if (scrollY < 80) {
    navbar.classList = "";
  }
});
