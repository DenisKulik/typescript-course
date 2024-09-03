abstract class DeliveryItem {
    items: DeliveryItem[] = []

    add(item: DeliveryItem) {
        this.items.push(item)
    }

    abstract getPrice(): number
}

class DeliveryShop extends DeliveryItem {
    constructor(public deliveryFee: number) {
        super();
    }

    getPrice(): number {
        return this.items.reduce((acc, item) => acc + item.getPrice(), 0) + this.deliveryFee
    }
}

class Package extends DeliveryItem {
    getPrice(): number {
        return this.items.reduce((acc, item) => acc + item.getPrice(), 0)
    }
}

class ProductItem extends DeliveryItem {

    constructor(private price: number) {
        super();
    }

    getPrice(): number {
        return this.price
    }
}

const shop = new DeliveryShop(100)
shop.add(new ProductItem(1000))
console.log(shop.getPrice())