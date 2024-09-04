let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");

document.querySelector(".btn");

document.querySelector(".btn").addEventListener('click',()=>{
    document.querySelector(".btn").classList.toggle('btn-active');

    let needles=document.querySelectorAll(".needle");
    needles[0].classList.toggle("hour-active");
    needles[1].classList.toggle("minute-active");

    let nums=document.querySelectorAll(".num");

    for(let num of nums){
        num.classList.toggle("num-active");
    }

    document.querySelector(".body").classList.toggle("body-active");
})

onload();

let secDegree = Math.ceil(getRotationDegrees(second));
let minDegree = Math.floor(getRotationDegrees(minute));
let hourDegree = Math.floor(getRotationDegrees(hour));


setInterval(() => {
  if (secDegree == 360) {
    secDegree = 6;
    if (minDegree === 360) minDegree = 6;
    else {
      minDegree += 6;
    }
    minute.style.transform = `rotate(${minDegree}deg)`;

    if (hourDegree === 360) hourDegree = 0.5;
    else {
      hourDegree += 0.5;
    }
    hour.style.transform = `rotate(${hourDegree}deg)`;
  } else {
    secDegree += 6;
  }
  second.style.transform = `rotate(${secDegree}deg)`;

//   console.log(secDegree,minDegree,hourDegree);

}, 1000);

function getRotationDegrees(element) {
  const style = window.getComputedStyle(element);
  const transform = style.getPropertyValue("transform");

  if (transform === "none") {
    return 0;
  } else {
    // Extract the values from the matrix
    const values = transform.split("(")[1].split(")")[0].split(",");
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);

    // Calculate the angle in radians and then convert to degrees
    const radians = Math.atan2(b, a);
    const degrees = radians * (180 / Math.PI);

    // Ensure the result is a positive angle
    return degrees < 0 ? degrees + 360 : degrees;
  }
}

function onload() {
  const date = new Date();
  let secs = date.getSeconds();
  let mins = date.getMinutes();
  let hrs = date.getHours();

  if (hrs > 12 && hrs != 0) {
    hrs = hrs % 12;
  }
  if (hrs === 0) {
    hrs = 1;
  }

  second.style.transform = `rotate(${secs * 6}deg)`;
  minute.style.transform = `rotate(${mins * 6}deg)`;
  hour.style.transform = `rotate(${hrs * 30}deg)`;

//   console.log(secs, mins, hrs);
}
