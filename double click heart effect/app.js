let post = document.querySelector('.post');
let score = 0;
let emojis = []; // Dynamic array to keep track of emoji elements

post.addEventListener('dblclick', (e) => {
    e.preventDefault();

    // Update the score
    document.querySelector('.value').innerText = ++score;

    // Create and append new emoji element
    let emoji = document.createElement('div');
    emoji.classList.add('emoji');
    post.appendChild(emoji);
    emojis.push(emoji); // Add to the dynamic array

    const rect = post.getBoundingClientRect();
    emoji.style.left = `${e.clientX - rect.left}px`;
    emoji.style.top = `${e.clientY - rect.top}px`;

    // Trigger animation
    emoji.classList.add('active');

    // Remove the emoji element after animation completes
    setTimeout(() => {
        if (emoji.parentElement) { // Check if it still exists in the DOM
            post.removeChild(emoji);
        }
    }, 500); // Match this with the animation duration
});
