let car = document.querySelector(".box");
let roads = document.querySelector(".roads");
let tracks = document.querySelectorAll(".track");
let startScreen = document.querySelector(".overlay");
let startBtn = startScreen.querySelector(".start-btn");
let stripes = document.querySelectorAll(".stripe");
let traffics = [
  "traffic1.png",
  "traffic2.png",
  "traffic3.png",
  "traffic4.png",
  "traffic5.png",
];
let distanceTimeout;
let timeTimeout;
let trafficElements = [];
let isPlaying = true;
let distance = 0;
let score = 0;
let time = {
  min: 0,
  sec: 0,
};

// Initialize position values
let carPosition = {
  top: 400,
  left: 200,
};

// Get the car's dimensions (width and height)
const carWidth = car.offsetWidth;
const carHeight = car.offsetHeight;

// Add event listener for keydown event
window.addEventListener("keydown", (e) => {
  const step = 15; // Number of pixels to move per key press

  // Get the viewport dimensions
  const maxTop = roads.offsetHeight - carHeight;
  const maxLeft = roads.offsetWidth - carWidth;

  // Check which arrow key is pressed
  if (e.key == "ArrowUp") {
    carPosition.top -= step; // Move up
    if (carPosition.top < 0) {
      carPosition.top = 0;
    }
  } else if (e.key == "ArrowDown") {
    carPosition.top += step; // Move down
    if (carPosition.top > maxTop) {
      carPosition.top = maxTop; // Prevent moving beyond the bottom
    }
  } else if (e.key == "ArrowLeft") {
    carPosition.left -= step; // Move left
    if (carPosition.left < 0) {
      carPosition.left = 0;
    }
  } else if (e.key == "ArrowRight") {
    carPosition.left += step; // Move right
    if (carPosition.left > maxLeft) {
      carPosition.left = maxLeft; // Prevent moving beyond the right
    }
  }

  // Update the car's position
  car.style.top = carPosition.top + "px";
  car.style.left = carPosition.left + "px";
});


//start of the game
startBtn.addEventListener("click", () => {
  //remove start screen
  document.querySelector("body").removeChild(startScreen);
  //apply moving road animation
  for (let stripe of stripes) {
    stripe.classList.add("stripes-active");
  }
  //spawn traffic cars
  spawnTraffic();
  //start gameloop for collision detection
  gameLoop();

  //start stats updation

  distanceTimeout= setInterval(() => {
    distance++;
    document.querySelector('.distance').innerText=`Distance: ${distance}m`;
    if(distance%5==0){
      score++;
      document.querySelector('.score').innerText=`Score: ${score}`;
    }
  }, 500);
  timeTimeout=setInterval(() => {
    time.sec++;
  if (time.sec === 60) {
    time.min++;
    time.sec = 0;
  }
  document.querySelector('.time').innerText=`Time: ${time.min.toString().padStart(2,0)}:${time.sec.toString().padStart(2,0)}`;
  }, 1000);


});

//start spawning traffic
async function spawnTraffic() {
  let spawnGap = 1000;

  while (isPlaying) {
    let index = randomNum(6);
    let traffic = document.createElement("div");
    traffic.classList.add("traffic");
    if (randomNum(2) == 1) {
      traffic.style.left = "20px";
    } else {
      traffic.style.right = "20px";
    }
    traffic.style.backgroundImage = "url(" + traffics[randomNum(5)] + ")";

    await delay(spawnGap);
    spawnGap = Math.max(200, spawnGap - 10);

    tracks[index].appendChild(traffic);
    trafficElements.push(traffic);

    setTimeout(() => {
      tracks[index].removeChild(traffic);
      trafficElements.filter((el) => el != traffic);
    }, 5000);
  }
}

async function gameLoop() {
  for (const trafficEl of trafficElements) {
    if (isColliding(car, trafficEl)) {
      console.log('collision');
      // car.classList.remove("box");
      car.classList.add("blast");
      await delay(2000);
      car.style.display='none';

      isPlaying = false;

      // Ensure 'stripes' is defined
      if (typeof stripes !== 'undefined') {
        for (let stripe of stripes) {
          stripe.classList.remove("stripes-active");
        }
      }
      clearInterval(distanceTimeout);
      clearInterval(timeTimeout);
      document.querySelector('.score').innerText='Score: 0';
      document.querySelector('.time').innerText='Time: 00:00';
      document.querySelector('.distance').innerText='Distance: 0m';
      endGame();
      break; // Exit the loop after game over
    }
  }

  if (isPlaying) {
    requestAnimationFrame(gameLoop);
  }
}


function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function randomNum(num) {
  return Math.floor(Math.random() * num);
}

function isColliding(car1, car2) {
  const rect1 = car1.getBoundingClientRect();
  const rect2 = car2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function endGame() {

  console.log('game ends');

  let endScreen = document.createElement("div");
  endScreen.classList.add("overlay");

  let endPad = document.createElement("div");
  endPad.classList.add("end-pad");

  let replayBtn = document.createElement("div");
  replayBtn.innerText = "Play Again!";
  replayBtn.classList.add("start-btn");
  endPad.appendChild(replayBtn);

  let p1 = document.createElement("p");
  p1.innerText = `Score: ${score}`;
  endPad.appendChild(p1);

  let p2 = document.createElement("p");
  p2.innerText = `Distance: ${distance}m`;
  endPad.appendChild(p2);

  let p3 = document.createElement("p");
  p3.innerText = `Time Elapsed: ${time.min
    .toString()
    .padStart(2, 0)}:${time.sec.toString().padStart(2, 0)}`;
  endPad.appendChild(p3);

  endScreen.appendChild(endPad);

  document.querySelector("body").appendChild(endScreen);

  replayBtn.addEventListener("click", () => {
    refresh(endScreen);
  });
}

function refresh(el) {
  car.classList.remove('blast');
  car.classList.add('.box');
  car.style.display='initial';
  score = 0;
  time.sec = 0;
  time.min = 0;
  distance = 0;
  isPlaying = true;
  trafficElements = [];
  document.querySelector("body").removeChild(el);
  spawnTraffic();
  gameLoop();
  for (let stripe of stripes) {
    stripe.classList.add("stripes-active");
  }
  distanceTimeout= setInterval(() => {
    distance++;
    document.querySelector('.distance').innerText=`Distance: ${distance}m`;
    if(distance%5==0){
      score++;
      document.querySelector('.score').innerText=`Score: ${score}`;
    }
  }, 500);
  timeTimeout=setInterval(() => {
    time.sec++;
  if (time.sec === 60) {
    time.min++;
    time.sec = 0;
  }
  document.querySelector('.time').innerText=`Time: ${time.min.toString().padStart(2,0)}:${time.sec.toString().padStart(2,0)}`;
  }, 1000);
}
