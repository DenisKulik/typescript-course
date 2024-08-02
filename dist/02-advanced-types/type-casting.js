"use strict";
let a = 5;
let b = a.toString();
const profile = {
    name: 'John',
    email: 'my@email.ru',
    login: 'john'
};
const adminUser = Object.assign(Object.assign({}, profile), { role: 1 });
function profileToAdmin(profile) {
    return {
        name: profile.name,
        role: 1
    };
}
