"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserServiceClass = class UserServiceClass {
    constructor() {
        this.users = 0;
    }
    getUsersInDB() {
        return this.users;
    }
};
UserServiceClass = __decorate([
    setUsersAdvanced(1000)
], UserServiceClass);
function nullUser(target) {
    target.prototype.users = 0;
}
function setUsers(users) {
    return function (target) {
        target.prototype.users = users;
    };
}
function nullUserAdvanced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 0;
        }
    };
}
function setUsersAdvanced(users) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
console.log(new UserServiceClass().getUsersInDB());
