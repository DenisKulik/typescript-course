class UserBuilder {
    name: string = ''

    setName(name: string): this {
        this.name = name
        return this
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[] = []

    constructor(roles: string[]) {
        super()
        this.roles = roles
    }
}

const uBuilder = new UserBuilder().setName('Max')
const aBuilder = new AdminBuilder(['admin', 'user']).setName('Max')

if (uBuilder.isAdmin()) {
    console.log(uBuilder)
} else {
    console.log(uBuilder)
}