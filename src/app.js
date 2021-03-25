/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { doc } from "prettier";

const possiblesCardNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "J",
  "Q",
  "K",
  "A"
];
const possiblesCardSuits = {
  diamond: "♦",
  heart: "♥",
  spade: "♠",
  club: "♣"
};

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCard(width = 12, height = 15) {
  let cardNumber = getRandom(possiblesCardNumbers);
  let cardSuit = getRandom(Object.keys(possiblesCardSuits));
  let cardSuitSymbol = possiblesCardSuits[cardSuit];

  let card = document.querySelector("#card");
  card.className = `card ${cardSuit} d-flex flex-column rounded-lg bg-white`;
  card.style["min-width"] = width + "rem";
  card.style["min-height"] = height + "rem";
  card.innerHTML = `
    <div class="d-flex justify-content-start px-1">${cardSuitSymbol}</div>
    <div class="d-flex justify-content-center align-items-center flex-grow-1 text-dark number px-1">${cardNumber}</div>
    <div class="d-flex justify-content-start bottomSymbol px-1">${cardSuitSymbol}</div>
  `;
}

window.onload = function() {
  //write your code here
  generateCard();
};

let generateButton = document.querySelector("#generateButton");
generateButton.addEventListener("click", () => {
  generateCard();
});

let timmerButton = document.querySelector("#timerButton");
timmerButton.addEventListener("click", () => {
  let divTimeDisplay = document.querySelector("#timerDiv");
  let timer = 10;
  let displayTime = setInterval(() => {
    divTimeDisplay.innerHTML = timer < 10 ? `0${timer}` : `${timer}`;
    timer--;
    timer === 0 && clearInterval(displayTime);
  }, 1000);
  setTimeout(generateCard, 10000);
  setTimeout(() => {
    divTimeDisplay.innerHTML = "00";
  }, 11000);
});

let changeSize = document.querySelector("#changeSize");
changeSize.addEventListener("click", () => {
  generateCard(
    parseInt(document.querySelector("#newWidth").value),
    parseInt(document.querySelector("#newHeight").value)
  );
  document.querySelector("#newWidth").value = "";
  document.querySelector("#newHeight").value = "";
});

let restartSize = document.querySelector("#restartSize");
restartSize.addEventListener("click", () => {
  generateCard();
});
