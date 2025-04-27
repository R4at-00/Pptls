const $contenedorImagenes = document.querySelector('.imgContainer');
const $imagenes = $contenedorImagenes.querySelectorAll('img');
const delayValue = 2;
const duracionTotal = (($imagenes.length * (delayValue))) + delayValue;

function addAnimations(){
    let delay = 0;
    $imagenes.forEach(item => {
        item.style.animation = `imageOpacity ${delayValue*2}s linear ${delay}s`;
        item.addEventListener('animationend', function(){
            item.style.animation = `none`;
        })
        delay += delayValue;
    });
}

addAnimations();
setInterval(addAnimations, (duracionTotal * 1000));
playSound($mainTheme);