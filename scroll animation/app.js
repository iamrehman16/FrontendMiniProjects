let boxes = document.querySelectorAll(".div");

function checkBox() {
  let triggerValue = window.innerHeight * 0.8;

  for (let box of boxes) {
    let boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerValue) {
        box.classList.add("active");
        console.log('helllo');
    }
    else {
        box.classList.remove("active");
    }
  }
}

window.addEventListener('scroll',checkBox);

checkBox();
