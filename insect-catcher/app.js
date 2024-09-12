// Selecting the playground div and getting its dimensions
let playground = document.querySelector(".playground");
let dimensions = playground.getBoundingClientRect();
let score = 0; // Tracks the game score
let fireScore = 0; // Tracks the number of insects killed
const insectSize = 80; // Size of the insect
let time = 59; // Countdown timer
let allInsects = document.querySelectorAll(".insects"); // All selectable insect types
let insectImg; // Stores the selected insect image

// Delay function to introduce a pause between insect spawns
function delay(ms) {
  return new Promise((resolve) => (countdown = setTimeout(resolve, ms)));
}

// Generates a random X (left) position within the playground's width, minus the insect size
function randX() {
  return Math.random() * (dimensions.width - insectSize);
}

// Generates a random Y (top) position within the playground's height, minus the insect size
function randY() {
  return Math.random() * (dimensions.height - insectSize);
}

// Spawns a number of insect elements at random positions with a delay
async function spawnInsect(num) {
  for (let i = 0; i < num; i++) {
    let insect = document.createElement("img");
    insect.src = insectImg; // Use selected insect image
    insect.classList.add("spawn-insect");
    insect.style.top = `${randY()}px`;
    insect.style.left = `${randX()}px`;
    playground.appendChild(insect);
    await delay(700); // Delay between insect spawns
  }
}

// Removes the clicked insect, spawns two more, and updates the score
function killInsect(e) {
  playground.removeChild(e); // Remove the clicked insect
  spawnInsect(2); // Spawn 2 more insects
  score++; // Increment score
  fireScore++; // Increment fire score
  document.querySelector(".score").innerText = `Score: ${score}`; // Update the score display
}

// Resets the game state for replay
function refresh() {
  playground.innerHTML = ''; // Clear all insects
  document.querySelector('.time').innerText = 'Time: 01:00'; // Reset timer
  document.querySelector('.score').innerText = 'Score: 0'; // Reset score display
  document.querySelector('.tab3').removeChild(document.querySelector('.stats')); // Remove stats
  document.querySelector('.tab3').removeChild(document.querySelector('.stats-box')); // Remove stats box
  time = 59; // Reset time
  score = 0; // Reset score
}

// Displays the end-game screen with stats and replay options
function endGame() {
  let stats = document.createElement("div");
  stats.classList.add("stats");
  document.querySelector(".tab3").appendChild(stats);

  let statsBox = document.createElement("div");
  statsBox.classList.add("stats-box");

  let ptag1 = document.createElement("p");
  ptag1.innerText = "Time's Up"; // Display time's up message
  let ptag2 = document.createElement("p");
  ptag2.innerText = `Your score is ${score}`; // Display final score

  statsBox.appendChild(ptag1);
  statsBox.appendChild(ptag2);
  document.querySelector(".tab3").appendChild(statsBox);

  let btnBox = document.createElement("div");
  btnBox.classList.add("btn-box");

  let btnMenu = document.createElement("div");
  let btnReplay = document.createElement("div");

  btnMenu.classList.add('btn-style');
  btnReplay.classList.add('btn-style');

  btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i><p>Main Menu</p>';
  btnReplay.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i><p>Play Again</p>';

  btnBox.appendChild(btnReplay);
  btnBox.appendChild(btnMenu);
  statsBox.appendChild(btnBox);

  // Event listeners for the main menu and replay buttons
  btnMenu.addEventListener('click', () => {
    document.querySelector('.tab1').style.marginTop = '0'; // Go back to the main menu
    refresh(); // Reset the game
  });
  btnReplay.addEventListener('click', () => {
    refresh(); // Reset the game
    play(); // Start a new game
  });
}

// Burns all insects on the screen and respawns new ones
async function burnIt(el) {
  document.querySelector('.bar').removeChild(el); // Remove the fire icon
  let spawnedInsectsAll = document.querySelectorAll('.spawn-insect'); // Get all insects

  // Replace all insects with fire images and animate them
  for (let i of spawnedInsectsAll) {
    i.src = 'fire.png';
    i.classList.add('fire-animation');
  }
  await delay(1000); // Delay to let the fire animation play

  playground.innerHTML = ''; // Clear all insects
  play(); // Restart the game
}

// Main game loop
function play() {
  spawnInsect(1); // Start by spawning 1 insect
  let playInterval = setInterval(() => {
    document.querySelector(".time").innerText = `Time: 00:${time.toString().padStart(2, 0)}`; // Update the timer
    time--; // Decrement time

    if (time == -1) { // If time runs out
      clearInterval(playInterval); // Stop the game
      endGame(); // Show end-game screen
    }

    // If the fire score exceeds 9, add a fire icon to the bar
    if (fireScore > 9) {
      let fire = document.createElement('img');
      fire.src = 'fire.png';
      fire.classList.add('fire');
      document.querySelector('.bar').appendChild(fire);

      // Burn all insects when the fire icon is clicked
      fire.addEventListener('click', () => {
        burnIt(fire);
      });
      fireScore = 0; // Reset fire score
    }
  }, 1000); // Run every second
}

// Click event listener to kill insects on the playground
playground.addEventListener("click", (e) => {
  killInsect(e.target);
});

// Event listener for the play button to start the game
document.querySelector(".play-btn").addEventListener("click", () => {
  document.querySelector(".tab1").style.marginTop = "-100vh"; // Transition to the next tab
});

// Event listener for selecting the insect type and starting the game
for (let i of allInsects) {
  i.addEventListener("click", () => {
    insectImg = i.querySelector("img").src; // Set the selected insect image
    document.querySelector(".tab1").style.marginTop = "-200vh"; // Transition to the game tab
    play(); // Start the game
  });
}
