interface IUserService {
    users: number

    getUsersInDB(): number
}


@setUsersAdvanced(1000)
class UserServiceClass implements IUserService {
    users: number = 0

    getUsersInDB(): number {
        return this.users
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0
}

function setUsers(users: number) {
    return function (target: Function) {
        target.prototype.users = users
    }
}

function nullUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 0
    }
}

function setUsersAdvanced(users: number) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            users = users
        }
    }
}

console.log(new UserServiceClass().getUsersInDB())

