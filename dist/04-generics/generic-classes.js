"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const resp = new Resp('data', 'error');
class HTTPResp extends Resp {
    constructor(data, error) {
        super(data, error);
    }
    setCode(code) {
        this.code = code;
    }
}
