let steps=document.querySelectorAll(".steps");
let tracker=1;

let next=document.querySelector("#next");
let prev=document.querySelector("#prev");

//prev.style.pointerEvents='none';
prev.style.cursor='not-allowed';

next.addEventListener('click',()=>{
    if(tracker!=3){
        steps[tracker].classList.add("active");
        steps[tracker-1].classList.add('active-line');
        if(!prev.classList.contains("active-buttons")){
            prev.classList.add("active-buttons");
           // prev.style.pointerEvents='auto';
           prev.style.cursor='pointer';
        }

        tracker++;
        if(tracker==3){
            next.classList.remove("active-buttons");
            //next.style.pointerEvents = 'none';
            next.style.cursor = 'not-allowed';
            console.log("hello world");
        }
    }
})

prev.addEventListener('click',()=>{
    if(tracker!=1){
        tracker--;
        steps[tracker].classList.remove("active");
        steps[tracker-1].classList.remove('active-line');
        if(!next.classList.contains("active-buttons")){
            next.classList.add("active-buttons");
           // next.style.pointerEvents='auto';
            next.style.cursor='pointer';
        }
        if(tracker==1){
            prev.classList.remove("active-buttons");
           // prev.style.pointerEvents='none';
           prev.style.cursor='not-allowed';
        }
    }
})