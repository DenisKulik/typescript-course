class KVDatabase {
    private db: Map<string, string> = new Map()
    save(key: string, value: string) {
        this.db.set(key, value)
    }
}

class PersistentDB {
    savePersistent(data: Object) {
        console.log(data)
    }
}

class PersistentDBAdapter extends KVDatabase {
    constructor(public database: PersistentDB) {
        super();
    }

    override save(key: string, value: string) {
        this.database.savePersistent({key, value})
    }
}

function run(db: KVDatabase) {
    db.save('key', 'value')
}

run(new PersistentDBAdapter(new PersistentDB()))