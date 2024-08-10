type Modifier = 'public' | 'private' | 'protected'

type UserRolesType = {
    customers?: Modifier
    projects?: Modifier
    admins?: Modifier
}

type ModifierToAccess<T> = {
  [Property in keyof T]: boolean
}

type UserAccess = ModifierToAccess<UserRolesType>