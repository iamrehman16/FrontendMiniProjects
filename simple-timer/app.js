let playButton = document.querySelector(".play");
let resetButton = document.querySelector(".reset");
let ring = document.querySelector(".ring");
let ball = document.querySelector(".ball");
let degree = 0;
let timer;
let count = 0;
let time = "00:";
let timeTrack = 59;
playButton.addEventListener("click", () => {
  count++;
  if (count % 2 == 1) {
    playButton.style.backgroundColor = "lightcoral";
    playButton.querySelector("i").classList.remove("fa-play");
    playButton.querySelector("i").classList.add("fa-pause");

    timer = setInterval(() => {
      degree += 6;
      ball.style.transform = `rotate(${degree}deg)`;
      ring.style.background = `conic-gradient(#000 ${degree}deg,#fff 0deg)`;
      document.querySelector(".dial p").innerText = `${time}${timeTrack.toString().padStart(2,0)}`;
      timeTrack--;
      console.log(degree);
      if (degree == 360) {
        reset(timer);
      }
    }, 1000);
    resetButton.addEventListener("click", () => {
      reset(timer);
    });
  } else {
    stop(timer);
  }
});

function reset(timer) {
  clearInterval(timer);
  playButton.style.backgroundColor = "skyblue";
  playButton.querySelector("i").classList.remove("fa-pause");
  playButton.querySelector("i").classList.add("fa-play");
  ball.style.transform = `rotate(0deg)`;
  ring.style.background = `conic-gradient(#000 0deg,#fff 0deg)`;
  document.querySelector(".dial p").innerText = `01:00`;
}

function stop(timer) {
  clearInterval(timer);
  playButton.style.backgroundColor = "skyblue";
  playButton.querySelector("i").classList.remove("fa-pause");
  playButton.querySelector("i").classList.add("fa-play");
}
