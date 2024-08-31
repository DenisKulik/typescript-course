"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    clone() {
        return new UserHistory(this.email, this.name);
    }
}
let userH = new UserHistory('my@email.ru', 'John');
console.log(user);
let userH2 = userH.clone();
