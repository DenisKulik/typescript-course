const n: null = null // only

interface UserDB {
    id: number
    name: string
}

function getUserFromDB() {
    if (Math.random() > 0.5) {
        return {
            id: 1,
            name: 'John'
        } as UserDB
    }
    return null
}

const userDB = getUserFromDB()

if (userDB) {
    console.log(userDB.id)
    console.log(userDB.name)
}