const numb: number = Math.random() > 0.5 ? 1 : 0

interface IHTTPResponse<T extends 'success' | 'failed'> {
    code: number
    data: T extends 'success' ? string : Error
}

const suc: IHTTPResponse<'success'> = {
    code: 200,
    data: 'success'
}

const fail: IHTTPResponse<'failed'> = {
    code: 500,
    data: new Error('failed')
}