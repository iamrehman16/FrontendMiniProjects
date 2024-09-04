let sounds=document.querySelectorAll(".box");

let currentAudio=null;

for(let sound of sounds){
    sound.addEventListener('click', ()=>{
        if(currentAudio){
            currentAudio.pause();
        }
        let audio=document.createElement("audio");
        audio.src=`${sound.innerText}.mp3`;
        audio.preload='auto';
        audio.play();
        currentAudio=audio;
    })
}