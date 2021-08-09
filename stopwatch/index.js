let seconds = 0,tens = 0;
let buttonStart = document.querySelector('#button-start');
let buttonStop = document.querySelector('#button-stop');
let buttonReset = document.querySelector('#button-reset');
let s = document.querySelector('#s');
let ms = document.querySelector('#ms')
let interval;

buttonStart.onclick = () => {
        this.clearInterval(interval);
        interval = setInterval(start, 20);
}

buttonStop.onclick = () => {
        this.clearInterval(interval);
}

buttonReset.onclick = () =>  {
        this.clearInterval(interval);
        tens = "00"
        seconds = "00";
        ms.innerHTML = tens;
        s.innerHTML = seconds;
}

function start() {
        tens++;

        tens < 9 ? ms.innerHTML = '0'+ tens : ms.innerHTML = tens;

        if(tens > 99){
            seconds++;
            s.innerHTML = '0' + seconds;
            tens = 0;
            ms.innerHTML = '0' + 0;
        }
        
        if(seconds > 9){
            s.innerHTML = seconds;
        }
}
