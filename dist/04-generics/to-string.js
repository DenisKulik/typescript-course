"use strict";
function toString(value) {
    switch (typeof value) {
        case 'string':
            return value;
        case 'number':
        case 'boolean':
            return value.toString();
        case 'object':
            return JSON.stringify(value);
        default:
            return undefined;
    }
}
console.log(toString(true));
console.log(toString(100));
console.log(toString('hello'));
console.log(toString({ name: 'Max' }));
console.log(toString([1, 2, 3]));
console.log(toString(null));
