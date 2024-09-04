let menu=document.querySelector(".menu");
let tab=document.querySelector(".tab1");
let ops=document.querySelectorAll(".navop");

menu.addEventListener('click',()=>{
    menu.classList.toggle("menu-active");
    tab.classList.toggle("tab1-active");
    ops[0].classList.toggle("home-active");
    ops[1].classList.toggle("contact-active");
    ops[2].classList.toggle("profile-active");
})