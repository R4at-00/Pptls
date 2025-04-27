const $emblemContainer = document.querySelector('.emblemContainer');
const $emblems = $emblemContainer.querySelectorAll('.emblem');

const $statContainer = document.querySelector('.statContainer');
const $winsTxt = $statContainer.querySelector('#wins');
const $defeatsTxt = $statContainer.querySelector('#defeats');
const $coinsTxt = $statContainer.querySelector('#coins');

function addStats(){
    $winsTxt.innerText = `Victorias: ${getWins()}`;
    $defeatsTxt.innerText = `Derrotas: ${getDefeats()}`;
    $coinsTxt.innerText = `Monedas: ${getCoins()}`;
}

function addEmblems(){
    let emblems = getEmblems().split('');
    let newEmblemElement;
    
    emblems.forEach(item => {
        newEmblemElement = document.createElement('div');
        newEmblemElement.classList.add('emblem');
        newEmblemElement.insertAdjacentHTML('afterbegin', '<div><img src="" class="zoom-img"></div>');

        switch(item){
            case 'P':
                newEmblemElement.id = "paperEmblem";
                newEmblemElement.querySelector('img').src = "../img/paperEmblem.png";
                break;
            case 'M':
                newEmblemElement.id = "metalEmblem";
                newEmblemElement.querySelector('img').src = "../img/metalEmblem.png";
                break;
            case 'R':
                newEmblemElement.id = "rockEmblem";
                newEmblemElement.querySelector('img').src = "../img/rockEmblem.png";
                break;
            case 'S':
                newEmblemElement.id = "scaleEmblem";
                newEmblemElement.querySelector('img').src = "../img/scaleEmblem.png";
                break;
            case 'K':
                newEmblemElement.id = "spacialEmblem";
                newEmblemElement.querySelector('img').src = "../img/spacialEmblem.png";
                break;
        }
        $emblemContainer.append(newEmblemElement);
    });

}


playSound($mainTheme);
addStats();
addEmblems();