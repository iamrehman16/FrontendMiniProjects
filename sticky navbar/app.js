

window.addEventListener('scroll',()=>{
    let height =window.innerHeight;
    let scrolledY=window.scrollY;

    if(scrolledY>height/4){
        document.querySelector('header').classList.add('active');
    }
    else{
        document.querySelector('header').classList.remove('active'); 
    }
})