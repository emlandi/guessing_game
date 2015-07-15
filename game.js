  var Game = function(name, answer){
  this.name = name;
  this.answer = answer;

  this.evaluateAnswer = function() {
    var guess;

    document.getElementById("intro").textContent = (this.name + " loves to travel. Can you guess how many countries " + this.name + " has visited?");
    document.getElementById("intro").style.fontSize = "xx-large";

    for (var i = 1; i <= 3; i++) {
      guess = prompt("Guess " + i);
      var guessEl = document.getElementById("guess");

      if (guess == this.answer) {
        guessEl.textContent = "Wow, good guess! You got it!";
        guessEl.style.color = "green";
        guessEl.align = "center";
        guessEl.style.fontSize = "xx-large";

        throw new Error("");

      } else if (guess > this.answer) {
        guessEl.textContent = "Not that many!";
        guessEl.style.color = "red";
        guessEl.align = "center";
        guessEl.style.fontSize = "xx-large";

      } else {
        guessEl.textContent = "Nope! Guess higher next time.";
        guessEl.style.color = "red";
        guessEl.align = "center";
        guessEl.style.fontSize = "xx-large";
      }
    };

    // guessEl.textContent = "The answer is " + this.answer + ".";
    // guessEl.align = "center";
    // guessEl.style.fontSize = "xx-large";
    var guess = document.getElementById("guess");
    var p = document.createElement("p");
    p.innerHTML = "The answer is " + this.answer + ".";
    guess.appendChild(p);

  };
};

//var gameEmily = new Game("Emily", 20);
//gameEmily.evaluateAnswer();

//var gameMario = new Game("Mario", 101);
//gameMario.evaluateAnswer();

var gameLuigi = new Game("Luigi", 87);
gameLuigi.evaluateAnswer();
