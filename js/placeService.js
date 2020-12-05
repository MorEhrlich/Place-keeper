'use strict'  

const KEY = 'places';
var gPlaces = [];



function deletePlace(placeName) {
    var placeIdx = gPlaces.findIndex((place) => {
        return placeName === place.placeName;
    });
    if(placeIdx === -1) return;

    gPlaces.splice(placeIdx, 1);
    saveToStorage(KEY, gPlaces);
}