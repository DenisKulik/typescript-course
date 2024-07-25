interface UserInterface {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string
}

interface RoleInterface {
    roleId: number;
}

interface UserWitchRoleInterface extends UserInterface, RoleInterface {
   createAt: Date;
}

const userItem2: UserWitchRoleInterface = {
    roleId: 1,
    name: 'John',
    age: 25,
    skills: ['JavaScript', 'TypeScript'],
    createAt: new Date(),
    log: (id) {
        return ''
    }
}

interface UserDictionary {
    [index: number]: UserInterface;
}
