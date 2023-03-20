/**** variables *****/

const cardLeftMassage = document.querySelector(".card__top__massage");
const cardRightMassage = document.querySelector(".card__bottom__massage");
const cardRightMassageP = document.querySelector(".card__bottom__massage__p");
const cardLeftMassageBtn = document.querySelector(".btn__massage");

const cardLeftHollitique = document.querySelector(".card__top__hollitique");
const cardRightHollitique = document.querySelector(".card__bottom__hollitique");
const cardRightHollitiqueP = document.querySelector(
  ".card__bottom__hollitique__p"
);
const cardLeftHollitiqueBtn = document.querySelector(".btn__hollitique");

const cardLeftCadeau = document.querySelector(".card__top__cadeau");
const cardRightCadeau = document.querySelector(".card__bottom__cadeau");
const cardRightCadeauP = document.querySelector(".card__bottom__cadeau__p");
const cardLeftCadeauBtn = document.querySelector(".btn__cadeau");

/**** Event ****/

cardLeftMassage.addEventListener("mouseenter", () => {
  cardLeftMassage.style.transform = "translateX(-200%)";
  cardRightMassage.style.width = "60%";
  cardRightMassage.style.transform = "translateX(-30%)";
  cardRightMassageP.style.opacity = 1;
  cardRightMassageP.style.transitionDelay = "1s";
  cardLeftMassageBtn.style.opacity = 1;
  /*** reverse ****/
  cardLeftHollitique.style.transform = "translateX(0%)";
  cardRightHollitique.style.width = "0%";
  cardRightHollitique.style.transform = "translateX(0%)";
  cardRightHollitiqueP.style.opacity = 0;
  cardRightHollitiqueP.style.transition = "0.3s ease";
  cardLeftHollitiqueBtn.style.opacity = 0;
  /*** reverse ***/
  cardLeftCadeau.style.transform = "translateX(0%)";
  cardRightCadeau.style.width = "0%";
  cardRightCadeau.style.transform = "translate(0%)";
  cardRightCadeauP.style.opacity = 0;
  cardRightCadeauP.style.transition = "0.3s ease";
  cardLeftCadeauBtn.style.opacity = 0;
});

cardLeftHollitique.addEventListener("mouseenter", () => {
  cardLeftHollitique.style.transform = "translateX(-200%)";
  cardRightHollitique.style.width = "60%";
  cardRightHollitique.style.transform = "translateX(-30%)";
  cardRightHollitiqueP.style.opacity = 1;
  cardRightHollitiqueP.style.transitionDelay = "1s";
  cardLeftHollitiqueBtn.style.opacity = 1;
  /*** reverse ****/
  cardLeftMassage.style.transform = "translateX(0%)";
  cardRightMassage.style.width = "0%";
  cardRightMassage.style.transform = "translateX(0%)";
  cardRightMassageP.style.opacity = 0;
  cardRightMassageP.style.transition = "0.3s ease";
  cardLeftMassageBtn.style.opacity = 0;
  /*** reverse ****/
  cardLeftCadeau.style.transform = "translateX(0%)";
  cardRightCadeau.style.width = "0%";
  cardRightCadeau.style.transform = "translateX(0%)";
  cardRightCadeauP.style.opacity = 0;
  cardRightCadeauP.style.transition = "0.3s ease";
  cardLeftCadeauBtn.style.opacity = 0;
});

cardLeftCadeau.addEventListener("mouseenter", () => {
  cardLeftCadeau.style.transform = "translateX(-200%)";
  cardRightCadeau.style.width = "60%";
  cardRightCadeau.style.transform = "translateX(-30%)";
  cardRightCadeauP.style.opacity = 1;
  cardRightCadeauP.style.transitionDelay = "1s";
  cardLeftCadeauBtn.style.opacity = 1;
  /*** reverse ****/
  cardLeftHollitique.style.transform = "translateX(0%)";
  cardRightHollitique.style.width = "0%";
  cardRightHollitique.style.transform = "translateX(0%)";
  cardRightHollitiqueP.style.opacity = 0;
  cardRightHollitiqueP.style.transition = "0.3s ease";
  cardLeftHollitiqueBtn.style.opacity = 0;
  /*** reverse ****/
  cardLeftMassage.style.transform = "translateX(0%)";
  cardRightMassage.style.width = "0%";
  cardRightMassage.style.transform = "translateX(0%)";
  cardRightMassageP.style.opacity = 0;
  cardRightMassageP.style.transition = "0.3s ease";
  cardLeftMassageBtn.style.opacity = 0;
});
