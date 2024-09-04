
let userCount = 0;
let compCount = 0;

//Function to get random computer choice
function getCompChoice() {
    const arr = ['rock', 'paper', 'scissor'];
    let compChoice = Math.floor(Math.random() * 3);
    return arr[compChoice];
}


const userChoice = document.querySelectorAll('.box');

userChoice.forEach((choice) => {
    const choiceId = choice.getAttribute('id');
    choice.addEventListener('click', () => {
        makeComparison(choiceId);
    })
})

function makeComparison(userChoice) {
    const compChoice = getCompChoice();

    let message = document.querySelector('#msg-para');
    let hapticFeedback=document.querySelector('.feedback');

    let userFate = true;
    if (userChoice === compChoice) {
        message.innerText = 'It was Draw';
        hapticFeedback.style.backgroundColor='rgb(8, 8, 61)';
    }
    else if (userChoice === 'paper') {
        userFate = compChoice === 'rock' ? true : false;
        displayWinner(userFate,userChoice,compChoice);
    }
    else if (userChoice === 'scissor') {
        userFate = compChoice === 'rock' ? false : true;
        displayWinner(userFate,userChoice,compChoice);
    }
    else {
        userFate = compChoice === 'scissor' ? true : false;
        displayWinner(userFate,userChoice,compChoice);
    }

}


function displayWinner(userFate,userChoice,compChoice){
    let message = document.querySelector('#msg-para');
    let userScore=document.querySelector('.user-score');
    let compScore=document.querySelector('.computer-score');
    let hapticFeedback=document.querySelector('.feedback');

    if(userFate===true){
        userCount++;
        message.innerText=`You win! Your ${userChoice} beats computer's ${compChoice} `;
        userScore.innerText=`${userCount}`;
        hapticFeedback.style.backgroundColor='green';
    }
    else{
        compCount++;
        message.innerText=`You lose! Your ${userChoice} beaten by computer's ${compChoice} `;
        compScore.innerText=`${compCount}`;
        hapticFeedback.style.backgroundColor='red';
    }
}