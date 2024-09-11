let boxes = document.querySelectorAll('.box');
const vibrantColors = [
    '#FF5733', // Vibrant Red-Orange
    '#33FF57', // Vibrant Green
    '#3357FF', // Vibrant Blue
    '#FF33A8', // Vibrant Pink
    '#33FFF3', // Vibrant Cyan
    '#FF8C33', // Vibrant Orange
    '#D433FF', // Vibrant Purple
    '#33FF8C', // Vibrant Mint Green
    '#FF3333', // Vibrant Red
    '#FFD633'  // Vibrant Yellow
];

function pickRandom(){
    return Math.ceil(Math.random()*10);
}


for (let box of boxes) {
    // Add event listener for mouse enter
    box.addEventListener('mouseenter', () => {
        // Remove transition for instant color change
        box.style.transition = 'none'; 
        box.style.backgroundColor = vibrantColors[pickRandom()]; // Instant color change
    });

    // Add event listener for mouse leave
    box.addEventListener('mouseleave', () => {
        // Add transition for smooth color disappearance
        box.style.transition = 'background-color 2s ease'; 
        box.style.backgroundColor = '#222'; // Smooth color change back
    });
}
