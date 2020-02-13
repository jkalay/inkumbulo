var cards = document.getElementById("cards");

cards.addEventListener("click", function handleClick(event) {
  if (!event.target.className.includes("card-back")) {
    return;
  }

  var card = event.target;
  card.className += "hide";
});