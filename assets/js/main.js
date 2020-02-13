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
  flipCard.className += " hide";

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
        firstCardClicked.classList.remove("hide");
        secondCardClicked.classList.remove("hide");
        firstCardClicked = secondCardClicked = null;
        gameBoard.addEventListener("click", handleClick);
      }, 1500);
    }

  }
}