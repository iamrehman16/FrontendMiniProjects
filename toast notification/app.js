let btn=document.querySelector('.btn');
let toaster=document.querySelector('.toast-container');

let message=['Transaction completed!', 'Message sent!', 'WhatsApp notification!', 'Messenger udated in background!', 'Meta drops new feature!!'];

function getRandom(){
    return Math.floor(Math.random()*5);
}

btn.addEventListener('click',()=>{
    let notif=document.createElement('div');
    notif.classList.add('notifications');
    notif.innerText=message[getRandom()];
    toaster.appendChild(notif);
    remove(notif);
})

function remove(notif){
    setTimeout(() => {
        toaster.removeChild(notif);
    }, 5000);
}