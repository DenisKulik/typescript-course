interface WorkerItem {
    login: string
    password?: string
}

const worker: WorkerItem = {
    login: 'admin'
}

function multiply(a: number, b?: number): number {
    if (!b) return a * a
    return a * b
}

interface SuperWorker {
    login: string
    password?: {
        type: 'primary' |'secondary'
    }
}

function testPass(worker: SuperWorker) {
    const t =  worker.password?.type
//  const t =  worker.password!.type - type will definitely be in password (use rarely)
}

// nullish collision
function testFn(param?: string) {
    const t = param ?? multiply(5)
}