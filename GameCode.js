// JavaScript source code

var presentNumb = randomNumb;




function rng() {
    var randomNumb = Math.floor(Math.random()* 10) + 1;


    document.getElementById("rn").innerHTML = randomNumb;
};



var randomArray = [];
var randomSum = 0;
randomArray.push(rng());
randomArray.push(rng());
randomArray.push(rng());

for (var i = 0; i < randomArray.lenth; i++) {
    randomSum += randomArray[i];
}


function higher() {
    var nextNumb = randomArray;

    if (nextNumb > presentNumb) {
        document.getElementById("wintext").innerHTML = "You win!";
    } else 
    {
        document.getElementById("wintext").innerHTML = "You lose!";
    }
    
    rng();
  
}






document.getElementById("butt2").onclick = rng();
