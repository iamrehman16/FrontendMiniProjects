//variable declaration
let temp = "";
let op = "";
let result = "";

//accessing elements
let input = document.querySelector(".head-box input");
let bodyBox = document.querySelector(".body-box");

//adding event listeners on buttons
bodyBox.addEventListener("click", (e) => {
  if (
    (e.target.value <= "9" && e.target.value >= "0") ||
    e.target.value === "."
  ) {
    temp = temp + e.target.value;
    input.value = temp;
  } else if (
    e.target.value === "+" ||
    e.target.value === "-" ||
    e.target.value === "x" ||
    e.target.value === "/" ||
    e.target.value === "%"
  ) {
    op = e.target.value;
    input.value = "";
    if (result === "") {
      result = temp;
      temp = "";
    }
  } else if (e.target.value === "=") {
    if (result === "" || temp == "") {
      if (result === "") input.value = temp;
      else if (temp === "") input.value = result;
    } else {
      if (op === "+") result = Number(result) + Number(temp);
      else if (op === "-") result = Number(result) - Number(temp);
      else if (op === "x") result = Number(result) * Number(temp);
      else if (op === "/") result = Number(result) / Number(temp);
      else if (op === "%") result = Number(result) % Number(temp);

      input.value = result;
      temp = "";
    }
  } else if (e.target.value === "C") {
    input.value = "0";
    temp = "";
    result = "";
    op = "";
  } else if (e.target.parentElement.value === "cut") {
    if (result === "") {
      temp = input.value.slice(0, -1);
      input.value = temp;
    } else {
      result = input.value.slice(0, -1);
      input.value = result;
    }
  }
});
