var gameBoard = document.getElementById("cards");
var firstCardClicked = null;
var secondCardClicked = null;
var firstCardClasses;
var secondCardClasses;
var animals = [
  "crocodile",
  "dog",
  "elephant",
  "giraffe",
  "hippo",
  "leopard",
  "lion",
  "rhino",
  "zebra"
];
var deck = animals.concat(animals);

shuffle();
addCardClassesToDOM();
gameBoard.addEventListener("click", handleClick);

function handleClick(event) {
  if (!event.target.className.includes("card-back")) {
    return;
  }

  var flipCard = event.target;
  flipCard.parentElement.classList.add("is-flipped");

  if (firstCardClicked == null) {
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    gameBoard.removeEventListener("click", handleClick);
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;

    if (firstCardClasses == secondCardClasses) {
      gameBoard.addEventListener("click", handleClick);
      firstCardClicked = secondCardClicked = null;
    } else {
      setTimeout(function delay() {
        firstCardClicked.parentElement.classList.remove("is-flipped");
        secondCardClicked.parentElement.classList.remove("is-flipped");
        firstCardClicked = secondCardClicked = null;
        gameBoard.addEventListener("click", handleClick);
      }, 1500);
    }
  }
}

function shuffle() {
  // Fisher-Yates
  for (let i = deck.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[rand]] = [deck[rand], deck[i]];
  }
}

function addCardClassesToDOM() {
  var cards = document.querySelectorAll(".card-front");

  cards.forEach((card, index) => {
    card.classList.add(`card-${deck[index]}`);
  })
}