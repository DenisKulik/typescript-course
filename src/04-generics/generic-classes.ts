class Resp<D, E> {
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data
        }
        if (error) {
            this.error = error
        }
    }
}

const resp = new Resp<string, string>('data', 'error')

class HTTPResp extends Resp<string, string> {
    code: number
    constructor(data?: string, error?: string) {
        super(data, error)
    }

    setCode(code: number) {
        this.code = code
    }
}