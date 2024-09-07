let nums=document.querySelectorAll('.nums');
let box=document.querySelector('.box');
let replay=document.querySelector('.replay');

function delay(ms){
    return new Promise(resolve=> countdown=setTimeout(resolve,ms));
}

async function count() {
    for(let num of nums){
        num.classList.add('active-nums');

        await delay(1000);
    }

    for(let num of nums){
        num.classList.remove('active-nums');
    }

    clearTimeout(countdown);

    box.classList.add('box-dull');
    replay.classList.add('replay-active');
}

document.querySelector('.btn').addEventListener('click',()=>{
    box.classList.remove('box-dull');
    replay.classList.remove('replay-active');
    count();
})

count();