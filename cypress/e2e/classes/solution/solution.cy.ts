import User from "./User"
import Role from "./Role"

it('create 2 objects', () => {
    const user1 = new User('Giovanni', 'Toth', Role.ADMIN, 2241)
    const user2 = new User('Jean-Pierre', 'Fekete', Role.MANAGER, 2241)
    const user3 = new User('Nathanuel', 'Herak', Role.CLIENT, 2241)

    expect(user1.generateEmail()).to.equal('giovanni.toth@kontentino.com')
    expect(user3.generateEmail()).to.equal('nathanuel.herak@kontentino.com')
})

