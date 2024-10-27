var timerFrJs = 60;
var score = 0;
var no;

function hit() {
  no = Math.floor(Math.random() * 10);
  document.querySelector("#hitno").textContent = no;
}
function makeBubble() {
  var clutter = "";

  for (var i = 0; i < 160; i++) {
    var n = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${n}</div>`;
  }
  document.querySelector(".panelbtm").innerHTML = clutter;
}

function runTimer() {
  var interval = setInterval(function () {
    if (timerFrJs > 0) {
      timerFrJs--;
      document.querySelector("#timer").textContent = timerFrJs;
    } else {
      document.querySelector(
        ".panelbtm"
      ).innerHTML = `<div><h1>Game Over</h1></div>
        <div><h2>Score: ${score}</h2></div>`;
      //   document.querySelector(".panelbtm").innerHTML = `<h2>score${score}</h2>`;

      document.clearInterval(interval);
    }
  }, 1000);
}
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
document.querySelector(".panelbtm").addEventListener("click", function (dets) {
  var clickno = Number(dets.target.textContent);
  if (clickno == no) {
    increaseScore();
    hit();
    makeBubble();
  }
});

// increaseScore();
hit();
runTimer();
makeBubble();
