'use strict'

function onInit(){
    loadFromStorage(PREFS)
}    


function onSubmitForm(ev) {
    ev.preventDefault()
    var bkgColor = document.querySelector('#bkg-color').value;
    var txtColor = document.querySelector('#txt-color').value;
    var dateOfBirth = document.querySelector('#dob').value;
    var timeOfBirth = document.querySelector('#tob').value;
    var userPrefs = {
        bkgColor,
        txtColor,
        dateOfBirth,
        timeOfBirth
    }
    saveUserPrefToStorage(userPrefs);

}

function onShowAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}


function onGetAstro() {
    var elAstro = document.querySelector('.astro h3');
    elAstro.innerText = gAstro.sen;
}


