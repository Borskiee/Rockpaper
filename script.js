let wins = 0;
let losses = 0;
let ties = 0;

function updateScoreboard() {
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}

function showResult(text, playerEmoji, computerEmoji) {
  let result = document.getElementById("result");
  result.innerHTML = `${text}<br>You<span class="js-span">${playerEmoji} ${computerEmoji}</span>Computer`;
}

function playRock() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];

  if (computerMove === "Rock") {
    ties++;
    showResult("Tie.", "✊", "✊");
  } else if (computerMove === "Paper") {
    losses++;
    showResult("You lose.", "✊", "🖐️");
  } else {
    wins++;
    showResult("You win.", "✊", "✌️");
  }

  updateScoreboard();
}

function playPaper() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];

  if (computerMove === "Rock") {
    wins++;
    showResult("You win.", "🖐️", "✊");
  } else if (computerMove === "Paper") {
    ties++;
    showResult("Tie.", "🖐️", "🖐️");
  } else {
    losses++;
    showResult("You lose.", "🖐️", "✌️");
  }

  updateScoreboard();
}

function playScissors() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];

  if (computerMove === "Rock") {
    losses++;
    showResult("You lose.", "✌️", "✊");
  } else if (computerMove === "Paper") {
    wins++;
    showResult("You win.", "✌️", "🖐️");
  } else {
    ties++;
    showResult("Tie.", "✌️", "✌️");
  }

  updateScoreboard();
}

function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;

  document.getElementById("result").innerText = "";
  updateScoreboard();
}
