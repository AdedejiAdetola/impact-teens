//countdown timer

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let timeLeft = {
  d: 0,
  h: 0,
  m: 0,
  s: 0
}

let totalSeconds;

function init() {
  totalSeconds = Math.floor((new Date(2021, 10, 27, 10, 0, 0, 0) - new Date()) / 1000);
  setTimeLeft();
  let interval = setInterval(() => {
    if (totalSeconds < 0) {
      clearInterval(interval)
    } 
    countTime();
  }, 1000)
}

function countTime() {
  if (totalSeconds > 0) {
    --timeLeft.s;
    if(timeLeft.m >= 0 && timeLeft.s < 0) {
      timeLeft.s = 59;
      --timeLeft.m;
      if (timeLeft.h >= 0 && timeLeft.m < 0) {
        timeLeft.m = 59;
        --timeLeft.h;
        if (timeLeft.d >= 0 && timeLeft.h < 0) {
          timeLeft.h = 23;
          --timeLeft.d;
          if (timeLeft.d < 0) {
            timeLeft.d = 0;
          }
        }
      }
    }
  }
  --totalSeconds;
  printTime();
}

function printTime(){
  days.innerText = timeLeft.d;
  hours.innerText = timeLeft.h;
  minutes.innerText = timeLeft.m;
  seconds.innerText = timeLeft.s;
}

function setTimeLeft() {
  timeLeft.d = Math.floor(totalSeconds/(60 * 60 * 24));
  timeLeft.h = Math.floor(totalSeconds/(60 * 60) % 24);
  timeLeft.m = Math.floor(totalSeconds/60 % (60));
  timeLeft.s = Math.floor(totalSeconds % 60);
}

init();




//toggle
const menuBtn = document.querySelector(".menu__btn");
const menuRespond = document.querySelector(".responsive");
const headText = document.querySelector(".header__text");
let menuClosed = true;

menuBtn.addEventListener("click", () => {
  if(menuClosed) {
    menuBtn.classList.add("open");
    headText.style.display="none";
    menuRespond.classList.add("responsiveBlock");
    menuClosed = false;
  } else {
    menuBtn.classList.remove("open");
    menuClosed = true;   
    headText.style.display="block"; 
    menuRespond.classList.remove("responsiveBlock");
  }
})


//toggle dropdown
//onclick menubtn dropdown