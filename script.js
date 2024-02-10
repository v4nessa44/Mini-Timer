"use strict"

let input = document.querySelector("input");
let startBtn = document.querySelector("button");
let stopwatch = document.querySelector(".number");


let time = 0;
let timeInterval;

function showElementInUi(){
    time--;
    stopwatch.innerHTML = time;

    if(time === 0){
        clearInterval(timeInterval)
    }
}

function startStopWatch(){
    time = input.value;

    

    timeInterval = setInterval(showElementInUi, 1000);
}




startBtn.addEventListener("click", startStopWatch);

