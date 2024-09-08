let btns = document.querySelectorAll(".toggle-btn");

for (let btn of btns) {
  btn.addEventListener("click", () => {
    let name = btn.parentElement.querySelector("label").innerText;
    if (name == "Good") {
      if (
        document.querySelector("#fast").classList.contains("btn-active") &&
        document.querySelector("#cheap").classList.contains("btn-active")
      ) {
        document.querySelector("#fast").classList.remove("btn-active");
        document.querySelector("#fast").querySelector(".ball").classList.remove("ball-active");
      }
    }
    if (name == "Fast") {
      if (
        document.querySelector("#cheap").classList.contains("btn-active") &&
        document.querySelector("#good").classList.contains("btn-active")
      ) {
        document.querySelector("#good").classList.remove("btn-active");
        document.querySelector("#good").querySelector(".ball").classList.remove("ball-active");

      }
    }
    if (name == "Cheap") {
      if (
        document.querySelector("#fast").classList.contains("btn-active") &&
        document.querySelector("#good").classList.contains("btn-active")
      ) {
        document.querySelector("#good").classList.remove("btn-active");
        document.querySelector("#good").querySelector(".ball").classList.remove("ball-active");

      }
    }

    btn.classList.toggle("btn-active");
    btn.querySelector(".ball").classList.toggle("ball-active");
  });
}
