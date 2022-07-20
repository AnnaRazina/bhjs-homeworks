let cookie = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter");
let countClicks = 0;

function changeSizes () {   
  if (countClicks % 2 == 0) {
    cookie.width = 400;
  } else {cookie.width = 200;}   
}

//второй вариант функции changeSizes
/*function changeSizes () { 
    if (cookie.width !== 400) {
      cookie.width = 400;
      return changeSizes;
    } 
    if (cookie.width = 400) {
        cookie.width = 200;
    }   
  }*/

function counter () {
    clicker__counter.textContent++
    countClicks += 1; 
}

cookie.addEventListener("click", changeSizes);
cookie.addEventListener("click", counter);