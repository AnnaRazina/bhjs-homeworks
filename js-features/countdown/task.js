const countdown = function () {
    let timer = document.getElementById("timer");
    timer.textContent -= 1; 
}

let timerId = setInterval(countdown, 1000);

setTimeout(() => {clearInterval(timerId); alert("Вы победили в конкурсе!")}, 59000);
