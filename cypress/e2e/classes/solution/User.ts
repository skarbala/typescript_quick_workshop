import Role from "./Role";

class User {
    name: string;
    surname: string;
    role: Role;
    id: number;

    constructor(name: string, surname: string, role: Role, id: number) {
        this.name = name;
        this.surname = surname;
        this.role = role;
        this.id = id;
    }

    generateEmail(): string {
        const lowerCaseName = this.name.toLowerCase();
        const lowerCaseSurname = this.surname.toLowerCase();
        const email = `${lowerCaseName}.${lowerCaseSurname}@kontentino.com`;
        return email;
    }
}
export default User;