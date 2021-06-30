alert("welcome to world of game!!");


function changeDice() {



    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".resultContainer").innerHTML = "Player1 wins!"



    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector(".resultContainer").innerHTML = "Player2 wins!"
    }
    else {
        document.querySelector(".resultContainer").innerHTML = "Draw!"
    }



    //console.log(randomNumber);
}
