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

/**** Variables NavBar ****/

const navBar = document.querySelector(".navbar");
const logoMenu = document.querySelector(".logo-menu");
const navbarAncre = document.querySelectorAll("li");
console.log(navbarAncre);

/**** Variable Scroll ****/

const containerText = document.querySelector(".container-text-content");
const containerPic = document.querySelector(".container-pic");

const prestationContainer = document.querySelector(".card-container-left");
const evenementCard = document.querySelector(".container-card-event");
const eventDynamique = document.querySelector(".main-event");
console.log(evenementCard);

/**** Variables Services ****/

const cardMassage = document.querySelector(".card-massage");
const cardHollitique = document.querySelector(".card-hollitique");
const cardCadeau = document.querySelector(".card-cadeau");

const cardMassageHidden = document.querySelector(".card-massage-hidden");
const cardMassageFace = document.querySelector(".card-massage-visible");

const cardHollitiqueHidden = document.querySelector(".card-hollitique-hidden");
const cardHollitiqueFace = document.querySelector(".card-hollitique-visible");

const cardCadeauHidden = document.querySelector(".card-cadeau-hidden");
const cardCadeauFace = document.querySelector(".card-cadeau-visible");

/**** Variables Carrousel Citations****/

const item = document.querySelectorAll(".item");
const itemSlide = item.length;
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let count = 0;

/**** Variables Carrousel Avis Google *****/

const avis = document.querySelectorAll(".avis");
const avisSlide = avis.length;
const leftAvis = document.querySelector(".avis-left");
const rightAvis = document.querySelector(".avis-right");
let countAvis = 0;

/****** Function Carrousel Citations ******/

function slideNext() {
  item[count].classList.remove("active");

  if (count < itemSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  item[count].classList.add("active");
}

setInterval(slideNext, 5000);

/***** Function Carrousel Avis Google *****/

function slideAvisNext() {
  avis[countAvis].classList.remove("avis-active");

  if (countAvis < avisSlide - 1) {
    countAvis++;
  } else {
    countAvis = 0;
  }

  avis[countAvis].classList.add("avis-active");
}

setInterval(slideAvisNext, 3000);

/******* Card Massage ******/
cardMassage.addEventListener("mouseenter", () => {
  cardMassageHidden.classList.replace(
    "card-massage-hidden",
    "card-massage-hidden-anim"
  );

  cardMassageFace.classList.replace(
    "card-massage-visible",
    "card-massage-visible-anim"
  );
});

cardMassage.addEventListener("mouseleave", () => {
  cardMassageHidden.classList.replace(
    "card-massage-hidden-anim",
    "card-massage-hidden"
  );

  cardMassageFace.classList.replace(
    "card-massage-visible-anim",
    "card-massage-visible"
  );
});

/****** Card Hollitique  ******/

cardHollitique.addEventListener("mouseenter", () => {
  cardHollitiqueHidden.classList.replace(
    "card-hollitique-hidden",
    "card-hollitique-hidden-anim"
  );

  cardHollitiqueFace.classList.replace(
    "card-hollitique-visible",
    "card-hollitique-visible-anim"
  );
});

cardHollitique.addEventListener("mouseleave", () => {
  cardHollitiqueHidden.classList.replace(
    "card-hollitique-hidden-anim",
    "card-hollitique-hidden"
  );

  cardHollitiqueFace.classList.replace(
    "card-hollitique-visible-anim",
    "card-hollitique-visible"
  );
});

/******** Card Cadeau *******/

cardCadeau.addEventListener("mouseenter", () => {
  cardCadeauHidden.classList.replace(
    "card-cadeau-hidden",
    "card-cadeau-hidden-anim"
  );

  cardCadeauFace.classList.replace(
    "card-cadeau-visible",
    "card-cadeau-visible-anim"
  );
});

cardCadeau.addEventListener("mouseleave", () => {
  cardCadeauHidden.classList.replace(
    "card-cadeau-hidden-anim",
    "card-cadeau-hidden"
  );
  cardCadeauFace.classList.replace(
    "card-cadeau-visible-anim",
    "card-cadeau-visible"
  );
});

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

/************/

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      //console.log(entry.target, entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = 1;
      }
    }
  },
  {
    threshold: 0.5,
  }
);

observer.observe(containerText);
observer.observe(prestationContainer);
observer.observe(containerPic);
observer.observe(evenementCard);
observer.observe(eventDynamique);
