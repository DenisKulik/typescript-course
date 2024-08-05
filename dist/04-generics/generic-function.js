"use strict";
function logMiddleWare(data) {
    console.log(data);
    return data;
}
console.log(logMiddleWare(10));
function getSplittedHalf(array) {
    const middle = Math.floor(array.length / 2);
    return array.slice(0, middle);
}
console.log(getSplittedHalf([1, 2, 3, 4, 5, 6]));
const split = getSplittedHalf;
const logLine = {
    timeStamp: new Date(),
    data: 'login'
};
