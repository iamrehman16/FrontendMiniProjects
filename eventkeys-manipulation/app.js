let boxes =document.querySelectorAll(".box");
let container=document.querySelector('.container');
let temp=document.querySelector('.banner');

let start=true;

document.addEventListener('keydown',(e)=>{

    if(start){
        container.style.visibility='visible';
        temp.style.display='none';
        start=false;
    }

    if(e.key===' '){
        boxes[0].innerHTML='Space';
    }
    else{
        boxes[0].innerHTML=e.key;
    }
    boxes[1].innerHTML=e.which;
    boxes[2].innerHTML=e.code;
})