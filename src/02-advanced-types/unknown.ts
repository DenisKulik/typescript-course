let inputData: unknown

inputData = 3
inputData = [1, 2, 3]

let sResult: string = inputData as string

function toDoSmt(i: unknown) {
    if (typeof i === 'number') {
        i++
    }
}

async function getDataSmt() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
    } catch(error) {
        if (error instanceof Error) {
           console.log(error.message)
        }
    }
}

async function getDataForce() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
    } catch (error) {
        const e = error as Error
        console.log(e)
    }
}

// will be unknown
type U1 = unknown | null

// will be string
type I1 = unknown & string