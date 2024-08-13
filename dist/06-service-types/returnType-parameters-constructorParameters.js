"use strict";
class Car {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getDataCar(id) {
    return new Car(id, 'BMW');
}
