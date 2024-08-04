const num: Array<number> = [1, 2, 3, 4, 5]

async function test() {
    const promise = await new Promise<number>((res, rej) => {
        res(1)
    })
}

const check: Record<string, boolean> =  {
    drive: true,
    kpp: false
}

