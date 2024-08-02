interface IPaymentTest {
    sum: number,
    from: number,
    to: number
}

interface IPaymentRequestTest extends IPaymentTest { }

enum PaymentResponseStatusTest {
    Success = 'success',
    Failed = 'failed'
}

interface IPaymentSuccessTest extends IPaymentRequestTest {
    databaseId: number
}

interface IPaymentFailedTest {
    errorMessage: string,
    errorCode: number
}

interface IPaymentResponseSuccessTest {
    status: PaymentResponseStatusTest.Success,
    data: IPaymentSuccessTest
}

interface IPaymentResponseFailedTest {
    status: PaymentResponseStatusTest.Failed,
    data: IPaymentFailedTest
}

type Res = IPaymentResponseSuccessTest | IPaymentResponseFailedTest

function getDataTest(data: Res): number {
    if (isSuccessResponse(data)) {
        return data.data.databaseId
    } else {
        throw new Error(data.data.errorMessage)
    }
}

function isSuccessResponse (data: Res): data is IPaymentResponseSuccessTest {
    return data.status === PaymentResponseStatusTest.Success
}

