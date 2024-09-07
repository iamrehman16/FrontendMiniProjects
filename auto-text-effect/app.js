let input = document.querySelector('.speed');
let line = 'Hardest choices require strongest Wills ';
let text = document.querySelector('.text p');

function delay(ms) {
    return new Promise(resolve => currentTimeout = setTimeout(resolve, ms));  // Store the timeout
}

async function write() {

    let ms=200;

    input.addEventListener('click', () => {
        ms=200-(input.value*20);
        console.log(ms);
    });

      
    for (let k = 0; k < 100; k++) {
        for (let i = 0; i < line.length; i++) {
            await delay(ms);  // Wait according to delay
            if (line[i] === ' ') {
                text.innerHTML += '&nbsp;';  // Append non-breaking space
            } else {
                text.innerText += line[i];  // Append regular characters
            }
        }
        text.innerText = '';  // Clear text after full line
    }
}


write();
