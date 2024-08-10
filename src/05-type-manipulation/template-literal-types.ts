type ReadOrWrite = 'read' | 'write'

type  Access = `can${Uppercase<ReadOrWrite>}`

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never

type T = ReadOrWriteBulk<ReadOrWrite>

type ErrorOrSuccess = 'error' | 'success'

interface IResponseT {
    result: `http${Capitalize<ErrorOrSuccess>}`
}

const a3: IResponseT = {
    result: 'httpSuccess'
}