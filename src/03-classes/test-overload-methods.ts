class Empoyee {
    skills: string[]

    constructor() {
        this.skills = []
    }

    addSkill(skill: string): void
    addSkill(skills: string[]): void
    addSkill(skillOrSkills: string | string[]): void {
        if (Array.isArray(skillOrSkills)) {
            this.skills.push(...skillOrSkills)
        } else {
            this.skills.push(skillOrSkills)
        }
    }
}

const employee = new Empoyee()
employee.addSkill('Javascript')
employee.addSkill(['Typescript', 'Vue'])

console.log(employee)