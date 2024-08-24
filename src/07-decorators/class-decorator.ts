interface IUserService {
    users: number

    getUsersInDB(): number
}


@setUsersAdvanced(1000)
class UserServiceClass implements IUserService {
    @Max(1000)
    users: number = 0

    @Log()
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

function Log() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        descriptor.value = () => {
            console.log('log')
        }
    }
}

function Max(maxValue: number) {
    return (
        target: Object,
        propertyKey: string | symbol,
    ): void => {
        let value: number

        const setter = function (newValue: number) {
            if (newValue > maxValue) {
                console.error('Value cannot be greater than ' + maxValue)
            }
        }

        const getter = function () {
            return value
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

const newUser1 = new UserServiceClass()
newUser1.users = 10000
console.log(newUser1.users)

