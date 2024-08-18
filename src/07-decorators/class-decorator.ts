interface IUserService {
    users: number

    getUsersInDB(): number
}


@nullUserAdvanced
class UserServiceClass implements IUserService {
    users: number = 1000

    getUsersInDB(): number {
        return this.users
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0
}

function nullUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 0
    }
}

console.log(new UserServiceClass().getUsersInDB())

