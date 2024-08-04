class UserService {
    static db: any

    static getUser(id: number) {
        return UserService.db.findIndex(id)
    }
    create() {
        UserService.db.push({})
    }

    static {
        console.log(UserService.db)
    }
}

UserService.db = 'db'
UserService.getUser(1)
const inst = new UserService()
inst.create()