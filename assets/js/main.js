var gameBoard = document.getElementById("cards");
var firstCardClicked = null;
var secondCardClicked = null;
var firstCardClasses;
var secondCardClasses;

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
  }
  else {
    gameBoard.removeEventListener("click", handleClick);
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;

    if (firstCardClasses == secondCardClasses) {
      gameBoard.addEventListener("click", handleClick);
      firstCardClicked = secondCardClicked = null;
    }
    else {
      setTimeout(function delay() {
        firstCardClicked.parentElement.classList.remove("is-flipped");
        secondCardClicked.parentElement.classList.remove("is-flipped");
        firstCardClicked = secondCardClicked = null;
        gameBoard.addEventListener("click", handleClick);
      }, 1500);
    }

  }
}