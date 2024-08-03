interface ILogger {
    log(...args): void
    error(...args): void
}

class Loger implements ILogger {
    log(...args) {
        console.log(...args)
    }
    error(...args) {
        console.error(...args)
    }
}

interface IPaybale {
    pay(paymentId: number): void
    price?: number
}

interface IDelitable {
    delete(): void
}

class UPaybale implements IPaybale, IDelitable {
    pay(paymentId: number): void {
        console.log(paymentId)
    }

    delete(): void {
        console.log('deleted')
    }

    price?: number | undefined
}