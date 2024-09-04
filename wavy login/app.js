let username=document.querySelector(".username input");
let password=document.querySelector(".password input");

let userSpan=document.querySelectorAll(".username .label span");
let passSpan=document.querySelectorAll(".password .label span");



username.addEventListener('focus',()=>{
    for(let sp of userSpan){
        sp.classList.add("active");
    }
})
username.addEventListener('blur',()=>{
    if(username.value==username.defaultValue){
        for(let sp of userSpan){
            sp.classList.remove("active");
        }
    }
})

password.addEventListener('focus',()=>{
    for(let pwd of passSpan){
        pwd.classList.add("active");
    }
})

password.addEventListener('blur',()=>{
    if(password.value==password.defaultValue){
        for(let pwd of passSpan){
            pwd.classList.remove("active");
        }
    }
})