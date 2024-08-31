class MyMap {
    private static instance: MyMap

    map: Map<number, string> = new Map()

    private constructor() {}

    clean() {
        this.map = new Map()
    }

    public static get(): MyMap {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap()
        }
        return MyMap.instance
    }
}

class Service1 {
    addMap(key: number, value: string) {
        MyMap.get().map.set(key, value)
    }
}

class Service2 {
    keyKeys(key: number) {
        MyMap.get().map.get(key)
        console.log(MyMap.get().map.get(key))
    }
}

new Service1().addMap(1, '1')
new Service2().keyKeys(1)