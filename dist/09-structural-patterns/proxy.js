"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, amount: 100 }, { id: 2, amount: 200 }];
    }
    getPaymentDetail(id) {
        return this.data.find(item => item.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetail(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log('User is not authorized');
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy.getPaymentDetail(1));
console.log(proxy2.getPaymentDetail(1));
