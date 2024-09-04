let up=document.querySelector('.up');
let down=document.querySelector('.down');

let label_margin= parseFloat(window.getComputedStyle(document.querySelector('.green')).marginTop);
console.log(label_margin);

let image_margin=parseFloat(window.getComputedStyle(document.querySelector('._black')).marginTop);
console.log(image_margin);

down.addEventListener('click',()=>{
    if(label_margin!=-2960){
        label_margin-=740;
        image_margin+=740;
    }
    else{
        label_margin=0;
        image_margin=-2960;
    }
    document.querySelector('.green').style.marginTop=`${label_margin}px`;
    document.querySelector('._black').style.marginTop=`${image_margin}px`;
})

up.addEventListener('click',()=>{
    if(label_margin!=0){
        label_margin+=740;
        image_margin-=740;
    }
    else{
        label_margin=-2960;
        image_margin=0;
    }
    document.querySelector('.green').style.marginTop=`${label_margin}px`;
    document.querySelector('._black').style.marginTop=`${image_margin}px`;
})
