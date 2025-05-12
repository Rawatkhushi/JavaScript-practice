let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const highOrLow = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevguess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);

    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a valid number");
  } else if (guess > 100) {
    alert("please enter a valid number");
  } else {
    prevguess.push(guess);
    numGuess++;

    if (numGuess === 10) {
      displayMessage(`Game Over. Answer was ${randomNumber}`);
      displayGuess(guess);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessesd it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`The number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;

  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  highOrLow.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2> <span style="cursor:pointer ; color: #34495e; font-weight: bold" class="newGame">Start a new Game</span></h2>`;
  startOver.appendChild(p);
  playGame = false;

  const newGameButton = document.querySelector(".newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = 10;
    highOrLow.innerHTML = "";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
