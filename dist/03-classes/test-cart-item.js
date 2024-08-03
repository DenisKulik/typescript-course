"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = new Date();
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = '';
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = 0;
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.delivery = new HomeDelivery(new Date(), '');
        this.cartList = [];
    }
    addProduct(product) {
        this.cartList.push(product);
    }
    deleteProduct(productId) {
        this.cartList = this.cartList.filter(product => product.id !== productId);
    }
    getTotalPrice() {
        return this.cartList.reduce((acc, product) => acc + product.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        return !!(this.cartList.length > 0 && this.delivery);
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Cookies', 100));
cart.addProduct(new Product(2, 'Cake', 200));
cart.addProduct(new Product(3, 'Chocolate', 300));
cart.deleteProduct(2);
cart.setDelivery(new HomeDelivery(new Date(), 'Moscow'));
console.log(cart.getTotalPrice());
console.log(cart.checkout());
