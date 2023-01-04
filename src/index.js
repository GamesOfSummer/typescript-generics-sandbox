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
function getArray(items) {
    return new Array().concat(items);
}
consoleBuffer();
var array = getArray(dragons);
console.log(array);
consoleBuffer();
