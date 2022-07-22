let cookie = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter");
let countClicks = 0;

function changeSizes () {   
  if (countClicks % 2 === 0) {
    cookie.width = 400;
  } else {cookie.width = 200;}   
}

function counter () {
    countClicks += 1; 
    clicker__counter.textContent = countClicks;
}

const divClickSpeed = document.createElement("div");
divClickSpeed.textContent = "Скорость клика: ";
const clicker__status = document.querySelector(".clicker__status");
clicker__status.appendChild(divClickSpeed);

divClickSpeed.insertAdjacentHTML("beforeEnd", "<span>0</span>");
let ClickSpeed = divClickSpeed.querySelector("span");

let PreviousClickTime, CurrentClickTime; 
function ClickSpeedScore () {
  if (countClicks === 1) {
    PreviousClickTime = new Date().getTime();
  }
   if (countClicks !== 1) {
    CurrentClickTime = new Date().getTime();
    ClickSpeed.textContent = (1000 / (CurrentClickTime - PreviousClickTime)).toFixed(2);
    PreviousClickTime = CurrentClickTime;
  }
}

cookie.addEventListener("click", changeSizes);
cookie.addEventListener("click", counter);
cookie.addEventListener("click", ClickSpeedScore);