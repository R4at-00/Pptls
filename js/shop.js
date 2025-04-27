const $emblemContainer = document.querySelector('.emblemContainer');
const $emblems = $emblemContainer.querySelectorAll('.emblem');

const buyEmblems = [
    ['paperEmblem', 15],
    ['metalEmblem', 60],
    ['rockEmblem', 240],
    ['scaleEmblem', 960],
    ['spacialEmblem',3840]
];

function selectEmblem(EmblemName){
    return $emblemContainer.getElementById(EmblemName);
}

function convertEmblem(emblemId){
    let emblemConverted = '';
    switch(emblemId){
        case 'paperEmblem':
            emblemConverted = 'P';
            break;
        case 'metalEmblem':
            emblemConverted = 'M';
            break;
        case 'rockEmblem':
            emblemConverted = 'R';
            break;
        case 'scaleEmblem':
            emblemConverted = 'S';
            break;
        case 'spacialEmblem':
            emblemConverted = 'K';
            break;
    }
    return emblemConverted;
}

function getPrice(EmblemName){
    for (let i = 0; i < buyEmblems.length; i++) {
        if(buyEmblems[i][0] === EmblemName){
            return buyEmblems[i][1];
        }
    }
    return 0;
}

function addEvent_buyEmblem(){
    $emblems.forEach(item => {
        item.querySelector('.btn').addEventListener('click', function(){
            if(getCoins()-getPrice(item.id) < 0){
                alert("Saldo Insuficiente.");
            }else if(getEmblems().includes(convertEmblem(item.id))){
                alert("Ya tienes este emblema");
            }else{
                playSound($buySound);
                addEmblem(convertEmblem(item.id));
                setCoins(getCoins()-getPrice(item.id));
            }
        });
    })
}


playSound($mainTheme);
addEvent_buyEmblem();