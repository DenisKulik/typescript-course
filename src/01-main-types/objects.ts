const user = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'New York',
    age: 27,
    skills: {
        javascript: true,
        typescript: true,
        react: true,
        angular: false,
        vue: false
    }
}

function getUserFullName(userEntity: {firstName: string, lastName: string}): string {
    return `${userEntity.firstName} ${userEntity.lastName}`
}

const userFullName = getUserFullName(user)
console.log(userFullName); // John Doe