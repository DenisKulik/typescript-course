interface Profile1 {
    name: string
    email: string
    login: string
}

const profile1: Profile1 = {
    name: 'John',
    email: 'my@email.ru',
    login: 'john'
}

interface Admin1 {
    name: string
    role: number
}

function logProfileId(id: string | number) {
    if (isString(id)) {
        console.log(id.toLowerCase())
    } else {
        console.log(id.toString())
    }
}

// Type Guard
function isString(x: string | number): x is string {
    return typeof x === 'string'
}

function isAdmin(profile: Profile1 | Admin1): profile is Admin1 {
    return (profile as Admin1).role !== undefined
}

function setRoleZero(profile: Profile1 | Admin1) {
    if (isAdmin(profile)) {
        profile.role = 0
    } else {
        throw new Error('Not an admin')
    }
}