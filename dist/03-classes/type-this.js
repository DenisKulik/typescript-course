"use strict";
class UserBuilder {
    constructor() {
        this.name = '';
    }
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
    constructor(roles) {
        super();
        this.roles = [];
        this.roles = roles;
    }
}
const uBuilder = new UserBuilder().setName('Max');
const aBuilder = new AdminBuilder(['admin', 'user']).setName('Max');
if (uBuilder.isAdmin()) {
    console.log(uBuilder);
}
else {
    console.log(uBuilder);
}
