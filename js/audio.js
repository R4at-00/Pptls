const $activeAudioSources = document.querySelectorAll('audio'); 
const $mainTheme = document.getElementById('mainTheme');
const $buySound = document.getElementById('BUY');
const $winSound = document.getElementById('WIN');
const $defeatSound = document.getElementById('DEFEAT');

function addEvent_volume(){
    $activeAudioSources.forEach(item =>{
        item.volume = getVolume();
    });
}

function playSound(sound){
    sound.play();
}

addEvent_volume();