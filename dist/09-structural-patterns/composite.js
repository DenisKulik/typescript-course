"use strict";
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.items.reduce((acc, item) => acc + item.getPrice(), 0) + this.deliveryFee;
    }
}
class Package extends DeliveryItem {
    getPrice() {
        return this.items.reduce((acc, item) => acc + item.getPrice(), 0);
    }
}
class ProductItem extends DeliveryItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const shop = new DeliveryShop(100);
shop.add(new ProductItem(1000));
console.log(shop.getPrice());
