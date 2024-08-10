function runTransaction(transaction: {
    fromTo: [string, string],
}) {
    console.log(transaction)
}

type GetFirstArg<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never
type Transaction = GetFirstArg<typeof runTransaction>

const transaction: Transaction = {
    fromTo: ['Denis', 'Anna']
}

runTransaction(transaction)