alert("welcome to my clock")


var digiClock = setInterval(clock, 1000);

function clock() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    var timing = hours + ":" + minutes + ":" + seconds;
    document.getElementById('inner-div').textContent = timing;
}