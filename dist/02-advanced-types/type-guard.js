"use strict";
const profile1 = {
    name: 'John',
    email: 'my@email.ru',
    login: 'john'
};
function logProfileId(id) {
    if (isString(id)) {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id.toString());
    }
}
function isString(x) {
    return typeof x === 'string';
}
function isAdmin(profile) {
    return profile.role !== undefined;
}
function setRoleZero(profile) {
    if (isAdmin(profile)) {
        profile.role = 0;
    }
    else {
        throw new Error('Not an admin');
    }
}
