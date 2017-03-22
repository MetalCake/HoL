




// JavaScript source code

var firstNumber = [];
var previousNumber = [];



firstNumber = 1
function rng() {
  
    var randomNumb = Math.floor(Math.random() * 10) + 1;
    previousNumber.push(randomNumb);
    console.log(previousNumber);
    document.getElementById("rn").innerHTML = randomNumb;
};



function higher() {
    if (rng < previousNumber) {
        document.getElementById("wintext").innerHTML = "You win!";
    } else {
        document.getElementById("wintext").innerHTML = "You lose!";

    }
};
function lower() {
    if (rng < previousNumber) {
        document.getElementById("wintext").innerHTML = "You win!";
    } else {
        document.getElementById("wintext").innerHTML = "You lose";

    }
};


document.getElementById("butt3").onclick = rng();
higher();
document.getElementById("butt4").onclick = rng();
lower();

