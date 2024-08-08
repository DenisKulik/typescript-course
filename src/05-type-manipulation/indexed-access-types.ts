interface IRole {
    name: string
}

interface IWOrker {
    name: string
    roles: IRole[]
}

const worker2: IWOrker = {
    name: 'John',
    roles: []
}

const nameWorker = worker2.name
const roleNames: 'roles' = 'roles'

type rolesType = IWOrker['roles']
type rolesType2 = IWOrker[typeof roleNames]

type roleType = IWOrker['roles'][number]

const someRoles = ['admin', 'user'] as const

type roleTypes = typeof someRoles[number]