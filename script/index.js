/**** Variables ****/
const navbar = document.querySelector("nav");
const logo = document.querySelector(".nav-logo");
const aboutImgMid = document.querySelector(".about-middle-left");
const aboutTextMid = document.querySelector(".about-middle-right");
const aboutImgBot = document.querySelector(".about-bottom-right");
const aboutTextBot = document.querySelector(".about-bottom-left");

/**** Anim Dom ****/
window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    navbar.classList.add("navBar-js");
  } else if (scrollY < 80) {
    navbar.classList = "";
  }
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (scrollY < 750) {
    aboutImgMid.style.transform = "translateX(-100%)";
    aboutImgMid.style.opacity = 0;
    aboutTextMid.style.transform = "translateX(100%)";
    aboutTextMid.style.opacity = 0;
  } else if (scrollY > 750) {
    aboutImgMid.style.transform = "translateX(0)";
    aboutImgMid.style.opacity = 1;
    aboutTextMid.style.transform = "translateX(0)";
    aboutTextMid.style.opacity = 1;
  }
  if (scrollY < 1430) {
    aboutTextBot.style.transform = "translateX(-100%)";
    aboutTextBot.style.opacity = 0;
    aboutImgBot.style.transform = "translateX(100%)";
    aboutImgBot.style.opacity = 0;
  } else if (scrollY > 1430) {
    aboutTextBot.style.transform = "translateX(0)";
    aboutTextBot.style.opacity = 1;
    aboutImgBot.style.transform = "translateX(0)";
    aboutImgBot.style.opacity = 1;
  }
});
