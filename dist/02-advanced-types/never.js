"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            console.log('refunding');
            break;
        case 'checkout':
            console.log('checking out');
            break;
        default:
            const _ = action;
            throw new Error('Invalid action');
    }
}
function isStrong(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('Invalid type');
}
