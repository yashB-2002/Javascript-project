
//alert("hello, welcome to world of music!");

var numberOfDrums = document.querySelectorAll("button").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        btnHtml = this.innerHTML;
        keyPressed(btnHtml);
        var divElem = document.querySelector(".feedback").innerHTML = "DO YOU LIKE IT Hmmm!"

    });
}
document.addEventListener("keypress", function (event) {
    var divElem = document.querySelector(".feedback").innerHTML = "HOW ABOUT KEYPRESS MODE!"

    keyPressed(event.key);
})


function keyPressed(key) {
    switch (key) {
        case "A":


            var a = new Audio("music/1.mp3");
            a.play();

            break;
        case "B":

            var b = new Audio("music/2.mp3");
            b.play();



            break;
        case "C":

            var c = new Audio("music/3.mp3");
            a.play();
            break;
        case "D":
            var d = new Audio("music/4.mp3");
            d.play();
            break;
        case "E":
            var e = new Audio("music/5.mp3");
            e.play();
            break;
        case "F":
            var f = new Audio("music/6.mp3");
            f.play();
            break;
        default:
            alert("music not found!");

    }
}