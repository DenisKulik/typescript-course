class Person {
    name: string | undefined
    age: number | undefined

    // overloads
    constructor()
    constructor(name: string)
    constructor(age: number)
    constructor(name: string, age: number)
    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName
        }

        if (typeof age === 'number') {
            this.age = age
        }
    }
}

const person = new Person('Max')
const person2 = new Person()
const person3 = new Person(33)
const person4 = new Person('Alex', 33)