let hr = min = sec = ms = "0" + 0, startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", pushReset);
stopBtn.addEventListener("click", pushStop);
startBtn.addEventListener("click", pushStart);

function pushStart(){
    startBtn.classList.add("active")
    stopBtn.classList.remove("stopActive")

    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;
        putValue();

        if (ms == 100) {
            sec++
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++
            min = "0" + 0;
        }


    }, 10) //1000ms = 1s
}

function pushStop(){
    startBtn.classList.remove("active")
    stopBtn.classList.remove("stopActive")
    clearInterval(startTimer)
}


function pushReset(){
    startBtn.classList.remove("active")
    stopBtn.classList.add("stopActive")
    clearInterval(startTimer)
    let hr = min = sec = ms = "0" + 0;
    putValue();
}



function putValue () {
    document.querySelector(".hr").innerHTML = ms;
    document.querySelector(".sec").innerHTML = min;
    document.querySelector(".min").innerHTML = sec;
    document.querySelector(".ms").innerHTML = hr;
}


