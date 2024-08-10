"use strict";
const numb = Math.random() > 0.5 ? 1 : 0;
const suc = {
    code: 200,
    data: 'success'
};
const fail = {
    code: 500,
    data: new Error('failed')
};
