const $volumeSlider = document.getElementById('vL');
const $localStorageCheck = document.getElementById('lS');

function addEvent_volumeSlider(){
    $volumeSlider.addEventListener('input', function(){
        setVolume($volumeSlider.value/100);
        addEvent_volume();
    });

}

function retrieve_volumeLevel(){
    $volumeSlider.value = getVolume()*100;
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
                startVariables();
            }else{
                setLocal(false);
                startVariables();
            }
        }else{
            $localStorageCheck.checked = !$localStorageCheck.checked;
        }
        

    })
}

playSound($mainTheme);
addEvent_localStorageCheck();
addEvent_volumeSlider()
retrieve_localStorageCheckState();
retrieve_volumeLevel();