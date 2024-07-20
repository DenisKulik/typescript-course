function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

const fullName = getFullName("John", "Doe");
console.log(fullName); // John Doe