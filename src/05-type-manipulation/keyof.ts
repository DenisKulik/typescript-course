interface IItem {
    name: string
    age: number
}

type KeysOfItem = keyof IItem

const key: KeysOfItem = 'name'

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const item = {
    name: 'a',
    age: 1
}

getValue(item, 'name')