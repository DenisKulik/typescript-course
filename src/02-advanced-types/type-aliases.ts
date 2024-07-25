type httpMethod = "GET" | "POST" | "PUT" | "DELETE";

const fetchAuth = (url: string, method: httpMethod): 1 | -1 => {
    return 1;
}

fetchAuth('https://www.google.com', 'GET')

type User = {
    name: string;
    age: number;
    skills: string[];
}

type Role = {
    id: number;
}

type UserWithRole = User & Role;

const userItem: UserWithRole = {
    id: 1,
    name: 'John',
    age: 25,
    skills: ['JavaScript', 'TypeScript']
}