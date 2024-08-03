"use strict";
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newUser = new UserClass('Max', 30);
console.log(newUser.name);
newUser.name = 'Anna';
console.log(newUser);
class AdminClass extends UserClass {
    constructor(role) {
        super('Max', 30);
        this.role = role;
    }
}
const newAdmin = new AdminClass(1);
console.log(newAdmin);
