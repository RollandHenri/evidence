const cardMassage = document.querySelector(".card-massage");
const cardHollitique = document.querySelector(".card-hollitique");
const cardCadeau = document.querySelector(".card-cadeau");

const cardMassageHidden = document.querySelector(".card-massage-hidden");
const cardMassageFace = document.querySelector(".card-massage-visible");

const cardHollitiqueHidden = document.querySelector(".card-hollitique-hidden");
const cardHollitiqueFace = document.querySelector(".card-hollitique-visible");

const cardCadeauHidden = document.querySelector(".card-cadeau-hidden");
const cardCadeauFace = document.querySelector(".card-cadeau-visible");

console.log(cardMassage);

console.log(cardMassageHidden);

/*** Event ***/

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
