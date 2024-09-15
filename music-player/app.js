let playPause = document.querySelector(".playpause");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slider = document.querySelector(".range input");
let audio = document.querySelector("audio");
let elapsed = document.querySelector(".elapsed");
let total = document.querySelector(".total");
let title = document.querySelector(".title");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector("#close-btn");
let dashboard = document.querySelector(".dashboard");
let songs = document.querySelectorAll(".song");
let tracker = 0;


//initial play on load
start();


//event listeners on buttons and audio
menuBtn.addEventListener("click", () => {
  dashboard.style.left = "-1%";
});
closeBtn.addEventListener("click", () => {
  dashboard.style.left = "-100%";
});

playPause.addEventListener("click", () => {
 updateButtons();
});

prev.addEventListener("click", () => {
  startPrev();
});

next.addEventListener("click", () => {
  startNext();
});

audio.addEventListener("timeupdate", () => {
  slider.value = audio.currentTime;

  elapsed.innerText = `${parseInt(audio.currentTime / 60)
    .toString()
    .padStart(2, 0)}:${parseInt(audio.currentTime % 60)
    .toString()
    .padStart(2, 0)}`;
});
slider.addEventListener("input", () => {
  audio.currentTime = slider.value;
});
audio.addEventListener('ended',()=>{
    startNext();
})
for(let s of songs){
    s.addEventListener('click',()=>{
        for(let ss of songs){
            ss.classList.remove('song-active');
        }
        playPause.querySelector("i").classList.remove("fa-play");
        playPause.querySelector("i").classList.add("fa-pause");
        s.classList.add('song-active');
        dashboard.style.left = "-100%";
        audio.src=s.value;
        setSongInfo();
        audio.play();
    })
}


//functions
function start() {
  audio.src = songs[tracker].value;
  setSongInfo();
}
function setSongInfo(){
    audio.addEventListener("loadedmetadata", () => {
        slider.value='0';
        slider.max = audio.duration;
        total.innerText = `${parseInt(audio.duration / 60)
          .toString()
          .padStart(2, 0)}:${parseInt(audio.duration % 60)
          .toString()
          .padStart(2, 0)}`;
        elapsed.innerText = `00:00`;
        title.innerText = decodeURIComponent(
          audio.src.split("/").pop().split(".").shift()
        );
      });
}
function startNext() {
  tracker++;
  if (tracker > songs.length - 1) {
    tracker = 0;
  }
  start();
  audio.play();
  playPause.querySelector("i").classList.remove("fa-play");
  playPause.querySelector("i").classList.add("fa-pause");
}

function startPrev() {
  tracker--;
  if (tracker < 0) {
    tracker = songs.length - 1;
  }
  start();
  play();
  playPause.querySelector("i").classList.remove("fa-play");
  playPause.querySelector("i").classList.add("fa-pause");
}
function updateButtons(){
  playPause.querySelector("i").classList.toggle("fa-play");
  playPause.querySelector("i").classList.toggle("fa-pause");
  if (playPause.querySelector("i").classList.contains("fa-pause")) {
    audio.play();
  } else {
    audio.pause();
  }
}

