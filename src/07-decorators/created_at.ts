interface IUserServ {
    users: number
    getUsersInDB(): number
}

@CreatedAt()
class UserServ implements IUserServ {
    users: number = 1000
    getUsersInDB(): number {
        return this.users
    }
}

function CreatedAt() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            createdAt = new Date()
        }
    }
}

type CreatedAt = {
    createdAt: Date
}

const userServ = new UserServ() as IUserServ & CreatedAt
console.log(userServ)