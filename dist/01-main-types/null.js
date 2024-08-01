"use strict";
const n = null;
function getUserFromDB() {
    if (Math.random() > 0.5) {
        return {
            id: 1,
            name: 'John'
        };
    }
    return null;
}
const userDB = getUserFromDB();
if (userDB) {
    console.log(userDB.id);
    console.log(userDB.name);
}
