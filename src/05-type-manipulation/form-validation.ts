interface IForm {
    name: string
    password: string
}

const form: IForm = {
    name: 'John',
    password: '123'
}

type ValidationForm<T> = {
    [K in keyof T]: {
        isValid: true
    } | {
        isValid: false
        errorMessage: string
    }
}

const formValidation: ValidationForm<IForm>  = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Password must be at least 6 characters long'}
}