"use strict";
class Loger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.error(...args);
    }
}
class UPaybale {
    pay(paymentId) {
        console.log(paymentId);
    }
    delete() {
        console.log('deleted');
    }
}
