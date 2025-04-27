function startVariables() {
    if (getLocal() === null) {
        localStorage.setItem("local", "false");
    }
    if (getVolume() === null) {
        localStorage.setItem("volume", "50");
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
        return localStorage.getItem("emblems") === null ? null : localStorage.getItem("emblems");
    } else {
        return sessionStorage.getItem("emblems") === null ? null : sessionStorage.getItem("emblems");
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
    return localStorage.getItem("volume") === null ? null : Number(localStorage.getItem("volume"));
}
function setVolume(value) {
    localStorage.setItem("volume", value.toString());
}

function getLocal() {
    return localStorage.getItem("local") === null ? null : localStorage.getItem("local") === 'true';
}
function setLocal(value) {
    localStorage.setItem("local", value.toString());
}

function getCoins() {
    if (getLocal()) {
        return localStorage.getItem("coins") === null ? null : Number(localStorage.getItem("coins"));
    } else {
        return sessionStorage.getItem("coins")  === null ? null : Number(sessionStorage.getItem("coins"));
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
        return localStorage.getItem("wins") === null ? null : Number(localStorage.getItem("wins"));
    } else {
        return sessionStorage.getItem("wins")  === null ? null : Number(sessionStorage.getItem("wins"));
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
        return localStorage.getItem("defeats")  === null ? null : Number(localStorage.getItem("defeats"));
    } else {
        return sessionStorage.getItem("defeats")  === null ? null : Number(sessionStorage.getItem("defeats"));
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