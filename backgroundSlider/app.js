let left=document.querySelector(".left-button");
let right=document.querySelector(".right-button");
let slider=document.querySelector(".slider");
const arr=['b1.jpg','b2.jpg','b3.jpg','b4.png','b5.jpg'];
let index=0;

left.addEventListener('click',()=>{
    if(index===0)
        index=5;
    else{
        index--;
    }
    slider.style.backgroundImage=`url(${arr[index]})`;
})

right.addEventListener('click',()=>{
    if(index===4)
        index=0;
    else{
        index++;
    }
    slider.style.backgroundImage=`url(${arr[index]})`;
})