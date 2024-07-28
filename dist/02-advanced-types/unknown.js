"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let inputData;
inputData = 3;
inputData = [1, 2, 3];
let sResult = inputData;
function toDoSmt(i) {
    if (typeof i === 'number') {
        i++;
    }
}
function getDataSmt() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        }
        catch (error) {
            const e = error;
            console.log(e);
        }
    });
}
