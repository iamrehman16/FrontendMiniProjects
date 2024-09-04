let button=document.querySelector(".button");
let input=document.querySelector(".input");

button.addEventListener("click",()=>{
    button.classList.toggle("active-button");
    input.classList.toggle("active-input");
    input.focus();
})