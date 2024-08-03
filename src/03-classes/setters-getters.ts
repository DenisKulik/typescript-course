class SomeUser {
    _login: string

    constructor() {
        this._login = ''
    }

    set login(login: string) {
        this._login = `user-${login}`
    }

    get login(): string {
        return this._login
    }
}

const userX = new SomeUser()
userX.login = 'test'
console.log(userX.login)