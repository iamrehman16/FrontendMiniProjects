//get variables
let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let ampm = document.querySelector("#ampm");

//create a date object

function updateClock() {
  let date = new Date();
  let h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  ampm.innerHTML = h >= 12 ? "PM" : "AM";

  if (h >= 12) h = h - 12;
  else if (h == 0) h = 12;

  hrs.innerHTML = h < 10 ? "0" + h : h;
  mins.innerHTML = m < 10 ? "0" + m : m;
  secs.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateClock, 1000);
updateClock();
