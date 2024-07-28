function logUserById(id: string | number): void {
    console.log(id)
}

type voidFunction = () => void

const f1: voidFunction = () => {
}

// the result will be ignored
const f2: voidFunction = () => {
    return true
}

const devSkills = ['HTML', 'CSS', 'JavaScript']

const developer = {
    name: 'John',
    skills: ['vue']
}

devSkills.forEach(skill => {
    developer.skills.push(skill)
})
