"use strict";
function logUserById(id) {
    console.log(id);
}
const f1 = () => {
};
const f2 = () => {
    return true;
};
const devSkills = ['HTML', 'CSS', 'JavaScript'];
const developer = {
    name: 'John',
    skills: ['vue']
};
devSkills.forEach(skill => {
    developer.skills.push(skill);
});
