let textArea = document.querySelector("textarea");
let options = document.querySelector(".options");
let finalString = "";

textArea.addEventListener("keydown", (e) => {
  let character = e.key;
  if (checkIfPrintable(character)) {
    if (character === ",") {
      if (finalString.trim() !== "") {
        append(finalString.trim()); // Ensure finalString is trimmed
        finalString = '';
      }
    } else if (character === 'Enter') {
        if (finalString.trim() !== "") {
            append(finalString.trim()); // Ensure finalString is trimmed
            finalString = '';
          }
      if (document.querySelectorAll(".box").length > 0) {
        randomPick();
      }
    } else {
      finalString += character;
    }
  }
});

function checkIfPrintable(char) {
    return /[ -~]/.test(char) && !['Backspace', 'Tab'].includes(char);
}

function append(str) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerText = str;
  options.append(box);
}

function randomPick() {
    let boxes = document.querySelectorAll(".box");
    let size = boxes.length;

    if (size === 0) return; // Ensure there are boxes before proceeding

    let prevIndex = null; // Ensure prevIndex is defined here

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            if (prevIndex !== null) {
                boxes[prevIndex].classList.remove("active");
            }

            let index = generateIndex(size);
            console.log(index); // Optional: Debugging purpose
            
            boxes[index].classList.add("active");
            prevIndex = index;
        }, i * 50); // Adjusted delay for better visibility
    }
}

function generateIndex(size) {
    return Math.floor(Math.random() * size);
}
