"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserServ = class UserServ {
    constructor() {
        this.users = 1000;
    }
    getUsersInDB() {
        return this.users;
    }
};
UserServ = __decorate([
    CreatedAt()
], UserServ);
function CreatedAt() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.createdAt = new Date();
            }
        };
    };
}
const userServ = new UserServ();
console.log(userServ);
