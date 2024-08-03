enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number
    status: PaymentStatus = PaymentStatus.Holded
    createdAt: Date = new Date()
    updatedAt: Date = new Date()

    constructor(id: number) {
        this.id = id
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment(): void {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Payment is already processed')
        }
        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date()
    }
}

const firstPayment = new Payment(1)
firstPayment.unholdPayment()
console.log(firstPayment)
const lifeTime = firstPayment.getPaymentLifeTime()
console.log(lifeTime)