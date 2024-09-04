//accessing useful variables
const winCombos = ["123", "456", "789", "147", "258", "369", "159", "357"];
let message = document.querySelector(".foot-bar p");
let Xarray = "";
let Oarray = "";
let Xwin = 0;
let Owin = 0;
let moves = document.querySelector(".inner-container");
let toggle = true;
let moveCount = 0;
let roundCount=0;
const round=document.querySelector(".round-button span");
let boxes=document.querySelectorAll(".part");




//new game
document.querySelector(".newGame-button").addEventListener('click',()=>{
  refresh();
})



//main event on tic tac toe pad
moves.addEventListener("click", (evt) => {
  if (evt.target.innerText != "X" && evt.target.innerText != "O") {
    moveCount++;  //tracking moves
    let temp = evt.target.id;//get id number to keep track of number combination for example: id='mov1' and accessing id[3] i.e 1

    if (toggle === true) {  //one move for player 1
      evt.target.innerText = "X";
      Xarray += temp[3];
      console.log(Xarray);
      toggle = false;
    } else if (toggle === false) {  //one move for player 2
      evt.target.innerText = "O";
      Oarray += temp[3];
      //console.log(Oarray);
      toggle = true;
    }

    evt.target.style.cursor = "default";// disabling pointing for visual cue

    if (moveCount > 4) {  //start checking when game rolls
      const status = checkWinner(); //check winner for each round
      if(status!=undefined){
        if(status==='X'){
            Xwin++;  //increment player win count
            document.querySelector(".player1 p").innerText=Xwin;
          }
          else if(status==='O'){
            Owin++;  //increment player win count
            document.querySelector(".player2 p").innerText=Owin;
          }
          roundCount++;  //increment rounds
          nextRound();// refresh variables for next round
      }
    }
    if (moveCount == 9) {//draw condition
      gameDraw();
      roundCount++;
      nextRound();
    }
  
    round.innerText=roundCount;//updating round element
    if(roundCount===5){
      winDeclare();  //final declaration of win
      refresh();
    }
  }

});


//draw function
const gameDraw = () => {
  let message = document.querySelector(".foot-bar p");
  message.innerText = "Game is Draw";
};


//winner check funtion
const checkWinner = () => {
  for (combo of winCombos) {
    if (Xarray.includes(combo[0])&&Xarray.includes(combo[1]) && Xarray.includes(combo[2])){
      animateCombo([`mov${combo[0]}`, `mov${combo[1]}`, `mov${combo[2]}`]);
      return "X";
    }

    if (Oarray.includes(combo[0])&&Oarray.includes(combo[1]) && Oarray.includes(combo[2])){
      animateCombo([`mov${combo[0]}`, `mov${combo[1]}`, `mov${combo[2]}`]);
      return "O";
    } 
  }
};


//win declare final
const winDeclare = () => {
  if(Xwin==Owin){
    gameDraw();
  }else if(Xwin>Owin){
    message.innerText=`Player 1 wins with score of ${Xwin}`;
    message.classList.toggle("player1");
  }else if(Owin>Xwin){
    message.innerText=`Player 2 wins with score of ${Owin}`;
    message.classList.toggle("player2");
  }
};


//refresh for next round
const nextRound=()=>{
    Xarray='';
    Oarray='';
    moveCount=0;
    toggle=true;
    for(box of boxes){
        box.innerText='';
        box.style.cursor='pointer';
       //box.classList.remove("animateClass");
    }
}


//refreshing eveything
const refresh=()=>{
  location.reload();
}

//animation

function animateCombo(list){
  list.forEach(id => {
    el=document.getElementById(id);
    if(el.classList.contains("animateClass")===true){
      el.classList.remove('animateClass');
      void el.offsetWidth;
     // console.log(el);
    }
    el.classList.add("animateClass");
    //console.log(el);
  });
}