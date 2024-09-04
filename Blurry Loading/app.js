let timer = document.querySelector(".timer"); //100
let img = document.querySelector("img");
let opacityIncrement = 0.01;

let blurLoad = setInterval(() => {
  timer.innerHTML = timer.innerHTML - 1;
  let timerOpacity =timer.innerHTML/100;
  timer.style.opacity = timerOpacity;

  let currentOpacity = parseFloat(img.style.opacity) || 0;
  img.style.opacity = currentOpacity + opacityIncrement;

  if (timer.innerHTML == 0) {
    clearInterval(blurLoad);
  }
}, 30);

