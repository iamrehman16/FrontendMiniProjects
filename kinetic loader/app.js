let leftTriangle = document.querySelector(".triangle-left");
let rightTriangle = document.querySelector(".triangle-right");

let rotationAmount = 0;

setInterval(() => {
    rotationAmount += 180; // Incremental rotation

    leftTriangle.style.transform = `rotate(${rotationAmount}deg)`;
    rightTriangle.style.transform = `rotate(${rotationAmount}deg)`;


    // rotationAmount=rotationAmount%720;

    // Optional: Log the rotation amount for debugging
    console.log(`Rotation Amount: ${rotationAmount}`);
}, 1000);
