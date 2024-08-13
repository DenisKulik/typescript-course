interface IPaymentPersistent {
    id: number
    name: string
    amount: number
}

type TPayment = Omit<IPaymentPersistent, 'id'>
type TPaymentRequisits = Pick<IPaymentPersistent, 'name'>

type ExtractExample = Extract<'name' | 'amount' | TPayment, string>
type ExcludeExample = Exclude<'name' | 'amount' | TPayment, string>