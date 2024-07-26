"use strict";
const worker = {
    login: 'admin'
};
function multiply(a, b) {
    if (!b)
        return a * a;
    return a * b;
}
function testPass(worker) {
    var _a;
    const t = (_a = worker.password) === null || _a === void 0 ? void 0 : _a.type;
}
function testFn(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
