let icon = document.querySelector(".field i");
let button = document.querySelector(".btn");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
const nums = "1234567890"; //10
const symbols = "!@#$%^&*()[{}]?><|"; //18

function updateIcon() {
  icon.classList.remove("fa-regular");
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-check");
}

function restoreIcon() {
  icon.classList.remove("fa-solid");
  icon.classList.remove("fa-check");
  icon.classList.add("fa-regular");
  icon.classList.add("fa-copy");
  icon.classList.remove('active-field');

}

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function getPassword(size) {
  let pass = "";
  while (size != 0) {
    if (document.querySelector("#capital-letters").checked && size !== 0) {
      pass = pass + letters[getRandom(26)];
      size--;
    }
    if (document.querySelector("#small-letters").checked && size !== 0) {
      pass = pass + (letters[getRandom(26)]).toLowerCase();
      size--;
    }
    if (document.querySelector("#numbers").checked && size !== 0) {
      pass = pass + nums[getRandom(10)];
      size--;
    }
    if (document.querySelector("#symbols").checked && size !== 0) {
      pass = pass + symbols[getRandom(18)];
      size--;
    }
  }
  return pass;
}

button.addEventListener("click", () => {
    restoreIcon();
  
    let lenght = document.querySelector("#size").value;
  
    let password = getPassword(lenght);
  
    document.querySelector(".field input").value = password;
  });
  

icon.addEventListener("click", () => {
  icon.classList.add('active-field');
    navigator.clipboard.writeText(document.querySelector('.field input').value);
  updateIcon();
});

