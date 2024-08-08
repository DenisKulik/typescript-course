/*
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
*/

interface Data {
    group: number
    name: string
}

const groupData: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'},
]

type RecordType<T> = {
    [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<key, any>>(list: T[], key: keyof T): RecordType<T> {
    return list.reduce<RecordType<T>>((map: RecordType<T>, item: T) => {
        const keyValue = item[key]
        if (map[keyValue]) {
            map[keyValue].push(item)
        } else {
            map[keyValue] = [item]
        }
        return map
    }, {} as RecordType<T>)
}

console.log(group(groupData, 'group'))