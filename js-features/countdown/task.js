let HTMLTimer = document.getElementById("timer");
let timer = 59;
const countdown = function () {
    if(timer === 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
        return
    }
    timer -= 1;  
    HTMLTimer.textContent = timer;  
}

let timerId = setInterval(countdown, 1000);