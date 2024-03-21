it('create 2 objects', () => {
    const user1 = new User('Giovanni', 'Toth', Role.ADMIN, 2241)
    const user2 = new User('Jean-Pierre', 'Fekete', Role.MANAGER, 2241)
    const user3 = new User('Nathanuel', 'Herak', Role.CLIENT, 2241)

    expect(user1.generateEmail()).to.equal('giovanni.toth@kontentino.com')
    expect(user3.generateEmail()).to.equal('nathanuel.herak@kontentino.com')
})


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

enum Role {
    ADMIN = 1,
    MANAGER = 2,
    CLIENT = 3
}