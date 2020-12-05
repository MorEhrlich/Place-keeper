'use strict'

const PREFS = 'userPrefs';

var gAstro = [
    { sen: 'Today will be your lucky day' },
    { sen: 'You should stay in bad today' },
    { sen: 'Be carful not to slip' }]



function saveUserPrefsToStorage(userPrefs) {
    saveToStorage(PREFS, userPrefs);
}