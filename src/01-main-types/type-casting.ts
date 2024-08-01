let a = 5
let b: string = a.toString()

interface Profile {
    name: string
    email: string
    login: string
}

const profile: Profile = {
    name: 'John',
    email: 'my@email.ru',
    login: 'john'
}

interface Admin {
    name: string
    role: number
}

const adminUser: Admin = {
    ...profile,
    role: 1
}

// mapping
function profileToAdmin(profile: Profile): Admin {
    return {
        name: profile.name,
        role: 1
    }
}