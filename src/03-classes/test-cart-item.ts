/*
Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */

class Product {
    public id: number
    public name: string
    public price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }
}

class Delivery {
    public date: Date = new Date()

    constructor(date: Date) {
        this.date = date
    }
}

class HomeDelivery extends Delivery {
    public address: string = ''

    constructor(date: Date, address: string) {
        super(date)
        this.address = address
    }
}

class ShopDelivery extends Delivery {
    public shopId: number = 0

    constructor(shopId: number) {
        super(new Date())
        this.shopId = shopId
    }
}

type DeliveryType = HomeDelivery | ShopDelivery

class Cart {
    private cartList: Product[]
    delivery: DeliveryType = new HomeDelivery(new Date(),'')

    constructor() {
        this.cartList = []
    }

    public addProduct(product: Product): void {
        this.cartList.push(product)
    }

    public deleteProduct(productId: number): void {
        this.cartList = this.cartList.filter(product => product.id !== productId)
    }

    public getTotalPrice(): number {
        return this.cartList.reduce((acc, product) => acc + product.price, 0)
    }

    public setDelivery(delivery: DeliveryType): void {
        this.delivery = delivery
    }

    public checkout() {
        return !!(this.cartList.length > 0 && this.delivery);
    }
}

const cart = new Cart()

cart.addProduct(new Product(1, 'Cookies', 100))
cart.addProduct(new Product(2, 'Cake', 200))
cart.addProduct(new Product(3, 'Chocolate', 300))
cart.deleteProduct(2)
cart.setDelivery(new HomeDelivery(new Date(),'Moscow'))
console.log(cart.getTotalPrice())
console.log(cart.checkout())