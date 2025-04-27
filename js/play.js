const $p1 = document.querySelector('#p1.playerContainer');
const $p1Preview = $p1.querySelector('.previewSelection');
const $p1HandContainer = $p1.querySelector('.handContainer');
const $p1Hands = $p1HandContainer.querySelectorAll('.hand ');

const $p2ModeBtnsContainer = document.querySelector('.p2BehaviorSelection');
const $resultTxt = document.getElementById('result');
const $lootTxt = document.getElementById('loot');
const $readyBtn = document.getElementById('ready');

const $p2 = document.querySelector('#p2.playerContainer');
const $p2CPUBtn = $p2.querySelector('#CPU');
const $p2P2Btn = $p2.querySelector('#btn-p2');
const $p2Preview = $p2.querySelector('.previewSelection');
const $p2HandContainer = $p2.querySelector('.handContainer');
const $p2Hands = $p2HandContainer.querySelectorAll('.hand ');

let isCPU = true;
let isP2Turn = false;
let p1Selection = '';
let p2Selection = '';
let handCollection = ['rock', 'paper', 'scissors', 'lizzard', 'spock'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addPreviewIMG() {
    let previewIMG = document.createElement('img');
    previewIMG.classList.add('zoom-img');
    return previewIMG;
}

function addEvent_ChangePreviewIMG(previewContainer, hands) {
    hands.forEach(item => {
        item = item.querySelector('img');
        item.addEventListener('click', function () {
            if (previewContainer.querySelector('img') == undefined) {
                previewContainer.append(addPreviewIMG());
                previewContainer.querySelector('img').src = `../img/${item.alt}.PNG`;
            } else {
                previewContainer.querySelector('img').src = `../img/${item.alt}.PNG`;
            }
        })
    });
}

function addEvent_changeP2Mode() {
    $p2CPUBtn.addEventListener('click', function () {
        isCPU = true;
        CPUMode();
    });
    $p2P2Btn.addEventListener('click', function () {
        isCPU = false;
        p2Mode();
    });
}

function CPUMode() {
    blockHandContainer($p2HandContainer);
    unlockPreview($p2Preview);
}

function p2Mode() {
    blockHandContainer($p2Preview, $p2HandContainer);
    blockPreview($p2Preview);
}

function blockModeBtns() {
    $p2ModeBtnsContainer.style.display = 'none';
}

function unlockModeBtns() {
    $p2ModeBtnsContainer.style.display = 'flex';
    addEvent_changeP2Mode();
}

function restartP1() {
    unlockHandContainer($p1Preview, $p1HandContainer);
    addEvent_p1HandSelection($p1Hands);
    unlockPreview($p1Preview);
}

function blockP1() {
    blockHandContainer($p1HandContainer);
    blockPreview($p1Preview);
}

function restartP2() {
    unlockHandContainer($p2Preview, $p2HandContainer);
    addEvent_p2HandSelection($p2Hands);
    unlockPreview($p2Preview);
}

function blockP2() {
    blockHandContainer($p2HandContainer);
    blockPreview($p2Preview);
}

function blockHandContainer(handContainer) {
    handContainer.querySelectorAll('.hand').forEach(item => {
        item.classList.remove('hand');
        item.classList.add('blocked');
        item.querySelector('img').remove();
    })
}

function unlockHandContainer(previewIMGContainer, handContainer) {
    handContainer.querySelectorAll('.blocked').forEach(item => {
        item.classList.add('hand');
        item.classList.remove('blocked');
        let newHandIMG = document.createElement('img');
        let handType = '';
        if (item.id.includes('rock')) {
            handType = 'rock';
        } else if (item.id.includes('paper')) {
            handType = 'paper';
        } else if (item.id.includes('scissors')) {
            handType = 'scissors';
        } else if (item.id.includes('lizzard')) {
            handType = 'lizzard';
        } else {
            handType = 'spock';
        }
        newHandIMG.src = `../img/${handType}.PNG`;
        newHandIMG.alt = handType;
        item.append(newHandIMG);
    });
    addEvent_ChangePreviewIMG(previewIMGContainer, handContainer.querySelectorAll('.hand'));
}

function blockPreview(previewContainer) {
    previewContainer.classList.add('blocked');
    if (previewContainer.querySelector('img') != undefined) {
        previewContainer.querySelector('img').remove();
    }
}

function unlockPreview(previewContainer) {
    previewContainer.classList.remove('blocked');
}

function addEvent_p1HandSelection(hands) {
    hands.forEach(item => {
        item = item.querySelector('img');
        item.addEventListener('click', function () {
            p1Selection = item.alt;
        })
    })
}

function addEvent_p2HandSelection(hands) {
    hands.forEach(item => {
        item = item.querySelector('img');
        item.addEventListener('click', function () {
            p2Selection = item.alt;
        })
    })
}

function addEvent_readyBtn() {
    $readyBtn.addEventListener('click', function () {
        if (isP2Turn) {
            if(p2Selection != ''){
                finalResult();
    
                restartP1();
    
                unlockModeBtns();
    
                blockP2();
    
                isP2Turn = false;
                p2Selection = '';
                p1Selection = '';
            }else{
                alert('Selecciona una mano.');
            }
        } else {
            if(p1Selection != ''){
                nextTurn();
                p2Selection = '';
            }else{
                alert('Selecciona una mano.');
            }
        }
    });
}

function nextTurn() {
    if (isCPU) {
        p2Selection = handCollection[random(0, handCollection.length - 1)];
        if ($p2Preview.querySelector('img') == undefined) {
            $p2Preview.append(addPreviewIMG());
            $p2Preview.querySelector('img').src = `../img/${p2Selection}.PNG`;
        } else {
            $p2Preview.querySelector('img').src = `../img/${p2Selection}.PNG`;
        }
        finalResult();
    } else {
        isP2Turn = true;

        blockP1();

        blockModeBtns();

        restartP2();
    }
}

function finalResult() {
    let coins;
    console.log(result());
    if (result() == 'p1') {
        $resultTxt.innerText = `Gana jugador 1: ${translate(p1Selection)} gana contra ${translate(p2Selection)}`;
        coins = random(1, 10);
        $lootTxt.innerText = `+${coins} Monedas`;
        setCoins(getCoins() + coins);
        addWin();
    } else if (result() == 'p2') {
        $resultTxt.innerText = `Gana jugador 2: ${translate(p2Selection)} gana contra ${translate(p1Selection)}`;
        coins = random(1, 10);
        $lootTxt.innerText = `-${coins} Monedas`;
        setCoins(getCoins() - coins);
        addDefeat();
    } else {
        $resultTxt.innerText = '¡Empate!';
        $lootTxt.innerText = '';
    }
}

function result() {
    if ((p1Selection == 'rock' && (p2Selection == 'scissors' || p2Selection == 'lizzard'))
        || (p1Selection == 'paper' && (p2Selection == 'rock' || p2Selection == 'spock'))
        || (p1Selection == 'scissors' && (p2Selection == 'paper' || p2Selection == 'lizzard'))
        || (p1Selection == 'lizzard' && (p2Selection == 'paper' || p2Selection == 'spock'))
        || (p1Selection == 'spock' && (p2Selection == 'scissors' || p2Selection == 'rock'))) {
        return 'p1';
    } else if (p1Selection == p2Selection) {
        return '';
    } else {
        return 'p2';
    }
}

function translate(word) {
    let translatedWord = '';
    switch (word) {
        case 'paper':
            translatedWord = 'papel';
            break;
        case 'rock':
            translatedWord = 'piedra';
            break;
        case 'scissors':
            translatedWord = 'tijera';
            break;
        case 'lizzard':
            translatedWord = 'lagarto';
            break;
        case 'spock':
            translatedWord = word;
            break;
        default:
            translatedWord = '?';
            break;
    }
    return translatedWord;
}

addEvent_ChangePreviewIMG($p1Preview, $p1Hands);
addEvent_ChangePreviewIMG($p2Preview, $p2Hands);

addEvent_p1HandSelection($p1Hands);
addEvent_p2HandSelection($p2Hands);

addEvent_readyBtn();

addEvent_changeP2Mode();

CPUMode();

playSound($mainTheme);