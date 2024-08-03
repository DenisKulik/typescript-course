"use strict";
class BasePayment {
    constructor(id) {
        this.id = id;
        this.status = 'new';
    }
    pay() {
        this.status = 'paid';
    }
}
class ParsistedPayment extends BasePayment {
    constructor(id) {
        super(id);
        this.paidAt = new Date();
        this.dataBaseId = Math.random();
        super(id);
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
