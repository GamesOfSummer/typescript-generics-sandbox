"use strict";
exports.__esModule = true;
var consoleBuffer = function () {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};
var dragons = [
    { color: 'red', temperment: 'spicy', mass: 100 },
    { color: 'blue', temperment: 'calm', mass: 5 },
];
var cats = [
    { color: 'tabby', temperment: 'spicy', weight: 100 },
    { color: 'calico', temperment: 'calm', weight: 5 },
    { color: 'grey', temperment: 'shy', weight: 5 },
];
function concatArray(items) {
    return new Array().concat(items);
}
function getArrayLength(items) {
    return items.length;
}
function getColors(items) {
    return items.map(function (x) { return x.color; });
}
consoleBuffer();
console.log(concatArray(dragons));
console.log('Length : ' + getArrayLength(dragons));
console.log('Colors : ' + getColors(dragons));
consoleBuffer();
console.log(concatArray(cats));
console.log('Length : ' + getArrayLength(cats));
console.log('Colors : ' + getColors(cats));
consoleBuffer();
