"use strict";
const array = ['sdf', 1];
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id.toString());
    }
}
logId(1);
logId('#sdf');
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err.join(' '));
    }
    else {
        console.log(err.toLowerCase());
    }
}
logError('sdf');
logError(['sdf', 'sdf2']);
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(a.toLowerCase());
    }
    else {
        console.log(a, b);
    }
}
