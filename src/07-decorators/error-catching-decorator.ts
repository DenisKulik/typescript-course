interface ISome {
    items: number

    getSomeInDB(): number
}

class SomeClass implements ISome {
    items: number = 0

    @Catch()
    getSomeInDB(): number {
        throw new Error('Something went wrong')
    }
}

function Catch(rethrow: boolean = false) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const oldValue = descriptor.value

        descriptor.value = async (...args: any[]) => {
            try {
                return await oldValue?.apply(target, args)
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)

                    if (rethrow) {
                        throw error
                    }
                }

            }
        }
    }
}

console.log(new SomeClass().getSomeInDB())