let input = document.querySelector(".input");
let button = document.querySelector(".button");
let message = document.querySelector(".foot-box p");

let today = new Date().toISOString().split("T")[0];
input.setAttribute("max", today);

button.addEventListener("click", () => {
  let dateUser = new Date(input.value);
  let dateCurrent = new Date();

  //setting user variables
  let y1 = dateUser.getFullYear();
  let m1 = dateUser.getMonth() + 1;
  let d1 = dateUser.getDate();

  //setting current date variables
  let y2 = dateCurrent.getFullYear();
  let m2 = dateCurrent.getMonth() + 1;
  let d2 = dateCurrent.getDate();

  //setting up result variables
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = monthInDays(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    y3--;
    m3 = 11;
  }

  //knit picking
  let yearStr = "year",
    monthStr = "month",
    dayStr = "day";
  if (y3 > 1) yearStr += "s";
  if (m3 > 1) monthStr += "s";
  if (d3 > 1) dayStr += "s";

  //display message
  message.innerHTML = `You are <span> ${y3} </span> ${yearStr}, <span> ${m3} </span> ${monthStr} and,  <span> ${d3} </span> ${dayStr} old`;
  let numbers = document.querySelectorAll(".foot-box p span");
  numbers.forEach((number) => {
    number.style.color = "orange";
  });
});

function monthInDays(year, month) {
  return new Date(year, month, 0).getDate();
}
