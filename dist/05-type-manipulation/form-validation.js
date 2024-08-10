"use strict";
const form = {
    name: 'John',
    password: '123'
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Password must be at least 6 characters long' }
};
