let miniGlass=document.querySelectorAll(".glass");
let emptiness=document.querySelector(".emptiness");
let fulness=document.querySelector(".fulness");


for(let glass of miniGlass){
    glass.addEventListener('click',(e)=>{
        emptyGlasses();
        let glassList=miniGlass;
        let i=-1;
        let counter=null;
        let newHeight=40;

        do{
            i++;
            glassList[i].classList.add("mini-glass-active");
        }while(glassList[i]!=glass);
        counter=i+1;
        newHeight=newHeight*counter;
        updateBigGlass(newHeight,counter);
    })
}


function emptyGlasses(){
    for(let glass of miniGlass){
        glass.classList.remove("mini-glass-active");
    }
}

function updateBigGlass(newHeight,counter){
    let newEmptinessHeight=320-newHeight;
    let newFulnessHeight=0+newHeight;

    let fullnessPercentage=parseFloat((newFulnessHeight/320)*100);
    let emptinessLiters=parseFloat((2000-(counter*250))/1000);
    fulness.innerHTML=`${fullnessPercentage}%`;
    emptiness.childNodes[1].innerHTML=`${emptinessLiters}L`;

    emptiness.style.height=newEmptinessHeight+'px';
    fulness.style.height=newFulnessHeight+'px';
}