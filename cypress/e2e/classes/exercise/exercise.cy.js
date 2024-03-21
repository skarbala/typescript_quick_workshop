//this is a huge mess
//your objective is to
//1. declare a class User, define its members
//2. create a constructor
//3. create a method inside the class that will return the email based on name and surname
//4. create an enum that define roles
//5. move classes outside of test
//6. create objects based on the info for each user
//7. make the assertions pass

it('create 2 objects', () => {
    const user1 = {
        name: 'Giovanni',
        surname: 'Toth',
        role: 'admin',
        id: 1544
    }

    const user2 = {
        name: 'Jean-Pierre',
        surname: 'Fekete',
        role: 'MANAGER',
        userId: 1544
    }

    const user3 = {
        name: '{random name of your choice}',
        surname: '{random surname}',
        roleId: 5,
        userId: 1544
    }

    expect(user1.generateEmail()).to.equal('giovanni.toth@kontentino.com')
    expect(user3.generateEmail()).to.equal('nathanuel.herak@kontentino.com')
})
