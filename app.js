document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector(`#result`);

  let cardsChosen = [];
  let cardsChosenID = [];
  let cardsWon = [];
  let score = 20;

  function createBoard() {
    resultDisplay.textContent = score;
    cardArray.forEach((c, i) => {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    });
  }

  function flashScreen(status) {
    document.body.style.backgroundColor = `${status == 'match' ? 'green' : 'red'}`
    setTimeout(() => {
        document.body.style.backgroundColor = ''
    }, 250);
  }

  //   check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneID = cardsChosenID[0];
    const optionTwoID = cardsChosenID[1];
    if (cardsChosen[0] === cardsChosen[1]) {
    //   alert("You found a match!");
      score++;
        flashScreen('match')
      //   body.style.backgroundColor = 'green'
    //   setTimeout(() => {
    //       body.style.backgroundColor = 'transparent'
    //   }, 500);
      cards[optionOneID].setAttribute("src", "images/white.png");
      cards[optionTwoID].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      score--;
      flashScreen()
      cards[optionOneID].setAttribute("src", "images/blank.png");
      cards[optionTwoID].setAttribute("src", "images/blank.png");
    //   alert("Sorry, try again!");
    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = score;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Congratulations! You found them all! Click here to reset!";
      grid.innerHTML = "";
      resultDisplay.addEventListener("click", resetGame);
    }
  }

  function resetGame() {
    cardsChosen = [];
    cardsChosenID = [];
    cardsWon = [];
    createBoard();
  }

  // flip your card
  function flipCard() {
    const cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
