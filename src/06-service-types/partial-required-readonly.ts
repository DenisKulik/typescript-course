interface IUser {
    name: string
    age?: number
    email: string
}

type partial = Partial<IUser>
type required = Required<IUser>
type readonly = Readonly<IUser>