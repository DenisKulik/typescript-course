interface Prototype<T> {
    clone(): T
}

class UserHistory implements Prototype<UserHistory> {
    constructor(public email: string, public name: string) {}

    clone(): UserHistory {
        return new UserHistory(this.email, this.name)
    }
}

let userH = new UserHistory('my@email.ru', 'John')
console.log(user)
let userH2 = userH.clone()