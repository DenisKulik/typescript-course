"use strict";
const key = 'name';
function getValue(obj, key) {
    return obj[key];
}
const item = {
    name: 'a',
    age: 1
};
getValue(item, 'name');
