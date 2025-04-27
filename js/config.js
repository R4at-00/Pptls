const $volumeSlider = document.getElementById('vL');
const $localStorageCheck = document.getElementById('lS');

function addEvent_volumeSlider(){
    $volumeSlider.addEventListener('input', function(){
        setVolume($volumeSlider.value);
        addEvent_volume();
    });

}

function retrieve_volumeLevel(){
    $volumeSlider.value = getVolume();
}

function retrieve_localStorageCheckState(){
    if(getLocal()){
        $localStorageCheck.checked = true;
    }else{
        $localStorageCheck.checked = false;
    }
}

function addEvent_localStorageCheck(){
    $localStorageCheck.addEventListener('change', function(){
        let deleteWarning = confirm("Todo el progreso actual se eliminará. ¿Continuar?");
        if(deleteWarning){
            if($localStorageCheck.checked){
                setLocal(true);
                swapToLocal();
            }else{
                setLocal(false);
                swapToSession();
            }
        }else{
            $localStorageCheck.checked = !$localStorageCheck.checked;
        }
        

    })
}

playSound($mainTheme);
retrieve_volumeLevel();
retrieve_localStorageCheckState();
addEvent_localStorageCheck();
addEvent_volumeSlider()