interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IPaymentRequest extends IPayment { }

enum PaymentResponseStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPaymentSuccess extends IPaymentRequest {
    databaseId: number
}

interface IPaymentFailed {
    errorMessage: string,
    errorCode: number
}

interface IPaymentResponseSuccess {
    status: PaymentResponseStatus.Success,
    data: IPaymentSuccess
}

interface IPaymentResponseFailed {
    status: PaymentResponseStatus.Failed,
    data: IPaymentFailed
}

// function getPayment(payment: IPaymentRequest): IPaymentResponseSuccess | IPaymentResponseFailed {}