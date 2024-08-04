"use strict";
class PaymentClass {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new PaymentClass();
const u = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
};
console.log(p.getDate());
console.log(p.getDateArrow());
console.log(u.paymentDate());
console.log(u.paymentDateArrow());
