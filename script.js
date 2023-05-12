const btns = document.querySelectorAll('.button');
const resultText = document.querySelector(".result");
const playerScoreDisplay = document.querySelector("#playerscore");
const computerScoreDisplay = document.querySelector("#computerscore");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector(".computerText");
const restartBtn = document.querySelector(".restartBtn");
const update = document.querySelector(".update");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

// UI

restartBtn.disabled = true;
restartBtn.style.opacity = 0.5;
playerText.style.color = "blue";
computerText.style.color = "green";

// Changing name function

let name = 'Player';

function updateName() {
  const input = document.getElementById("nameInput");
  if (input.value !== '') {
    name = input.value;
  }
  document.getElementById("playerText").innerHTML = `${name}: ?`;
  input.value = '';
}


// Counting scors and showing results

btns.forEach(button => button.addEventListener("click", (e) => {
    const chosenButton = e.currentTarget;
    player = chosenButton.id;
    computerTurn();
    playerText.innerHTML = `${name}: <img src="images/${player}.png" alt="${player.charAt(0).toUpperCase() + player.slice(1)}" class="img image-small">`;
    computerText.innerHTML = `Matrix: <img src="images/${computer}.png" alt="${computer.charAt(0).toUpperCase() + computer.slice(1)}" class="img image-small">`;
    result = checkWinner();
    resultText.textContent = result;
    nameInput.disabled = true;
    nameInput.style.opacity = 0.7;
    update.disabled = true;
    update.style.opacity = 0.7;

    if (result === `You won! ${player} beats ${computer}`) {
        playerScore++;
    } else if (result === `You lost! ${computer} beats ${player}`) {
        computerScore++;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            resultText.textContent = `${player} beats ${computer}, You win the game! Congooo, you escaped the Matrix!!!`;
        } else {
            resultText.textContent = `${computer} beats ${player}, Matrix wins the game! Try again to escape the Matrix!!!`;
        }
        btns.forEach(button => {
            button.disabled = true;
            button.classList.add("button-disabled");
          });

        btns.forEach(button => button.style.opacity = 0.5);
        restartBtn.disabled = false;
        restartBtn.style.opacity = 1;
    }
}));

// Game Logic

function computerTurn() {
    const randNumber = Math.floor(Math.random() * 3) + 1;

    switch (randNumber) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}
// Commented code but also can be used if you want but need to be replaced by the other checkwinner() function

// function checkWinner() {
//     if (player === computer) {
//         return "Draw";
//     } else if (computer === "rock") {
//         return (player === "paper") ? "You win!" : "You lose!";
//     } else if (computer === "paper") {
//         return (player === "scissors") ? "You win!" : "You lose!";
//     } else if (computer === "scissors") {
//         return (player === "rock") ? "You win!" : "You lose!";
//     }
// }

// Game logic
function checkWinner() {
    if (player === computer) {
        return `It's a tie!  ${player} ties with ${computer}`;
    } else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper") 
    ) {
        return `You won! ${player} beats ${computer}`;
    } else {
        return `You lost! ${computer} beats ${player}`;
    }
}

// Restart Button 

restartBtn.addEventListener("click", restartGame);

function restartGame() {
    playerText.textContent = `${name}: ?`;
    computerText.textContent = "Matrix: ?";
    resultText.textContent = "Result: ?";
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    btns.forEach(button => {
        button.disabled = false;
        button.classList.remove("button-disabled");
      });

    btns.forEach(button => button.style.opacity = 1);
    restartBtn.disabled = true;
    restartBtn.style.opacity = 0.5;
    nameInput.disabled = false;
    nameInput.style.opacity = 1;
    update.disabled = false;
    update.style.opacity = 1;
}
// Footer
const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear()





