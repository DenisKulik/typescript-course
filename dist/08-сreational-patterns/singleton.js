"use strict";
class MyMap {
    constructor() {
        this.map = new Map();
    }
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
class Service1 {
    addMap(key, value) {
        MyMap.get().map.set(key, value);
    }
}
class Service2 {
    keyKeys(key) {
        MyMap.get().map.get(key);
        console.log(MyMap.get().map.get(key));
    }
}
new Service1().addMap(1, '1');
new Service2().keyKeys(1);
