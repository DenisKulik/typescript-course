"use strict";
class KVDatabase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDB {
    savePersistent(data) {
        console.log(data);
    }
}
class PersistentDBAdapter extends KVDatabase {
    constructor(database) {
        super();
        this.database = database;
    }
    save(key, value) {
        this.database.savePersistent({ key, value });
    }
}
function run(db) {
    db.save('key', 'value');
}
run(new PersistentDBAdapter(new PersistentDB()));
