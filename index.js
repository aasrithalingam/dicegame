var randomnumberfirst = Math.random();
var randomnumber1 = Math.floor((randomnumberfirst * 6) + 1);
var randomdiceimage1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomdiceimage1);
var randomnumbersecond = Math.random();
var randomnumber2 = Math.floor((randomnumbersecond * 6) + 1);
var randomdiceimage2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2);
// if (randomnumber1 > randomnumber2) {
//   document.querySelector("h1").innerHtml = "Player one Wins!";
//
// } else if (randomnumber2 > randomnumber1) {
//   document.querySelector("h1").innerHtml = "Player 2 Wins!";
// } else {
//   document.querySelector("h1").innerHtml = "It is a draw!";
// }
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
