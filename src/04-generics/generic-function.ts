function logMiddleWare<T>(data: T): T {
    console.log(data)
    return data
}

console.log(logMiddleWare<number>(10))

function getSplittedHalf<T>(array: Array<T>): Array<T> {
    const middle = Math.floor(array.length / 2)
    return array.slice(0, middle)
}

console.log(getSplittedHalf([1, 2, 3, 4, 5, 6]))

// type function
const split: <T>(data: Array<T>) => Array<T> = getSplittedHalf

interface ILogLine<T> {
    timeStamp: Date
    data: T
}

const logLine: ILogLine<string> = {
    timeStamp: new Date(),
    data: 'login'
}