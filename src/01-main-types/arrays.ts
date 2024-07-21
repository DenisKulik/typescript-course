const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Vue', 'Node.js', 'Git']

for (const skill of skills) {
    console.log(skill.toLowerCase())
}

const formattedSkills = skills
    .filter((skill: string) => skill !== 'Node.js')
    .map(skill => skill + '! ')
    .reduce((a, b) => a + b)

console.log(formattedSkills)