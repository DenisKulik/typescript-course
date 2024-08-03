type PaymentStatusType = 'new' | 'paid'

class BasePayment {
   id: number
   status: PaymentStatusType

   constructor(id: number) {
       this.id = id
       this.status = 'new'
   }

   pay() {
       this.status = 'paid'
   }
}

class ParsistedPayment extends BasePayment {
    dataBaseId: number
    paidAt: Date = new Date()

    constructor(id: number) {
        super(id)
        this.dataBaseId = Math.random()
        super(id)
    }

    // override method
    override pay(date?: Date) {
        super.pay()
        if (date) {
            this.paidAt = date
        }
    }
}