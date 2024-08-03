"use strict";
class Empoyee {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (Array.isArray(skillOrSkills)) {
            this.skills.push(...skillOrSkills);
        }
        else {
            this.skills.push(skillOrSkills);
        }
    }
}
const employee = new Empoyee();
employee.addSkill('Javascript');
employee.addSkill(['Typescript', 'Vue']);
console.log(employee);
