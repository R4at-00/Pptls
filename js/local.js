function startVariables() {
    if (getLocal() === null) {
        localStorage.setItem("local", "false");
    }
    if (getVolume() === null) {
        localStorage.setItem("volume", "0.5");
    }
    if(getLocal()){
        if (getCoins() === null) {
            localStorage.setItem("coins", "0");
        }
        if (getWins() === null) {
            localStorage.setItem("wins", "0");
        }
        if (getDefeats() === null) {
            localStorage.setItem("defeats", "0");
        }
        if (getEmblems() === null) {
            localStorage.setItem("emblems", "");
        }
    }else{
        if (getCoins() === null) {
            sessionStorage.setItem("coins", "0");
        }
        if (getWins() === null) {
            sessionStorage.setItem("wins", "0");
        }
        if (getDefeats() === null) {
            sessionStorage.setItem("defeats", "0");
        }
        if (getEmblems() === null) {
            sessionStorage.setItem("emblems", "");
        }
    }
    
    if (document.querySelector('#lS') != undefined) {
        if (document.querySelector('#lS').checked) {
            swapToLocal();
        } else {
            swapToSession();
        }
    }
}

function swapToLocal() {
    sessionStorage.removeItem("coins");
    sessionStorage.removeItem("wins");
    sessionStorage.removeItem("defeats");
    sessionStorage.removeItem("emblems");
    localStorage.setItem("coins", "0");
    localStorage.setItem("wins", "0");
    localStorage.setItem("defeats", "0");
    localStorage.setItem("emblems", "");
}

function swapToSession() {
    localStorage.removeItem("coins");
    localStorage.removeItem("wins");
    localStorage.removeItem("defeats");
    localStorage.removeItem("emblems");
    sessionStorage.setItem("coins", "0");
    sessionStorage.setItem("wins", "0");
    sessionStorage.setItem("defeats", "0");
    sessionStorage.setItem("emblems", "");
}

function getEmblems() {
    if (getLocal()) {
        return localStorage.getItem("emblems");
    } else {
        return sessionStorage.getItem("emblems");
    }
}
function addEmblem(value) {
    let newValue = getEmblems() + value;
    if (getLocal()) {
        localStorage.setItem("emblems", newValue);
    } else {
        sessionStorage.setItem("emblems", newValue);
    }
}

function getVolume() {
    return Number(localStorage.getItem("volume"));
}
function setVolume(value) {
    localStorage.setItem("volume", value.toString());
}

function getLocal() {
    return localStorage.getItem("local") === 'true';
}
function setLocal(value) {
    localStorage.setItem("local", value.toString());
}

function getCoins() {
    if (getLocal()) {
        return Number(localStorage.getItem("coins"));
    } else {
        return Number(sessionStorage.getItem("coins"));
    }
}
function setCoins(value) {
    if (value < 0) {
        value = 0;
    }
    if (getLocal()) {
        localStorage.setItem("coins", value.toString());
    } else {
        sessionStorage.setItem("coins", value.toString());
    }
}

function getWins() {
    if (getLocal()) {
        return Number(localStorage.getItem("wins"));
    } else {
        return Number(sessionStorage.getItem("wins"));
    }
}
function addWin() {
    if (getLocal()) {
        localStorage.setItem("wins", (getWins() + 1).toString());
    } else {
        sessionStorage.setItem("wins", (getWins() + 1).toString());
    }
}

function getDefeats() {
    if (getLocal()) {
        return Number(localStorage.getItem("defeats"));
    } else {
        return Number(sessionStorage.getItem("defeats"));
    }
}
function addDefeat() {
    if (getLocal()) {
        localStorage.setItem("defeats", (getDefeats() + 1).toString());
    } else {
        sessionStorage.setItem("defeats", (getDefeats() + 1).toString());
    }
}

startVariables();