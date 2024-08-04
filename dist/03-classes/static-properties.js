"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findIndex(id);
    }
    create() {
        UserService.db.push({});
    }
}
(() => {
    console.log(UserService.db);
})();
UserService.db = 'db';
UserService.getUser(1);
const inst = new UserService();
inst.create();
