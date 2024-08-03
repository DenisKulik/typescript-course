class Vehicle {
    public make: string
    private damages: string[] = [] // work only in TS (on compilation)
    private _model: string = ''
    protected run: number = 0
    #price: number = 0             // work in JS

    constructor(make: string) {
        this.make = make
    }

    set model(m: string) {
        this._model = m
        this.#price = 200
    }

    get model() {
        return this._model
    }

    addDamage(damage: string) {
        this.damages.push(damage)
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62
    }
}