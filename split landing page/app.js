let left=document.querySelector(".left");
let right=document.querySelector(".right");
let description =document.querySelectorAll(".description");

left.addEventListener("mouseover",()=>{
    left.classList.add("left-active");
    right.classList.add("right-dull");
    description[0].classList.add("description-active");
})

left.addEventListener("mouseout",()=>{
    left.classList.remove("left-active");
    right.classList.remove("right-dull");
    description[0].classList.remove("description-active");
})

right.addEventListener("mouseover",()=>{
    right.classList.add("right-active");
    description[1].classList.add("description-active");
})

right.addEventListener("mouseout",()=>{
    right.classList.remove("right-active");
    description[1].classList.remove("description-active");
})