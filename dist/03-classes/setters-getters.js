"use strict";
class SomeUser {
    constructor() {
        this._login = '';
    }
    set login(login) {
        this._login = `user-${login}`;
    }
    get login() {
        return this._login;
    }
}
const userX = new SomeUser();
userX.login = 'test';
console.log(userX.login);
