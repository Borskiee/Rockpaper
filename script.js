const score = JSON.parse(localStorage.getItem("score")) || {
 wins: 0,
  losses: 0,
  ties: 0
}

function updateScoreboard() {
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Draws: ${score.ties}`;
}

function showResult(text, playerEmoji, computerEmoji) {
  let result = document.getElementById("result");
  result.innerHTML = `${text}<br>You<span class="js-span">${playerEmoji} ${computerEmoji}</span>Computer`;
}

function playRock() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];

  if (computerMove === "Rock") {
    score.ties++;
    showResult("Draw.", "✊", "✊");
  } else if (computerMove === "Paper") {
    score.losses++;
    showResult("You lose.", "✊", "🖐️");
  } else {
    score.wins++;
    showResult("You win.", "✊", "✌️");
  }

  updateScoreboard();
  localStorage.setItem("score", JSON.stringify(score));
}

function playPaper() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];

  if (computerMove === "Rock") {
    score.wins++;
    showResult("You win.", "🖐️", "✊");
  } else if (computerMove === "Paper") {
    score.ties++;
    showResult("Draw.", "🖐️", "🖐️");
  } else {
    score.losses++;
    showResult("You lose.", "🖐️", "✌️");
  }

  updateScoreboard();
  localStorage.setItem("score", JSON.stringify(score));
}

function playScissors() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];

  if (computerMove === "Rock") {
    score.losses++;
    showResult("You lose.", "✌️", "✊");
  } else if (computerMove === "Paper") {
    score.wins++;
    showResult("You win.", "✌️", "🖐️");
  } else {
    score.ties++;
    showResult("Draw.", "✌️", "✌️");
  }

  updateScoreboard();
  localStorage.setItem("score", JSON.stringify(score));
}

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById("result").innerText = "";
  updateScoreboard();
}
