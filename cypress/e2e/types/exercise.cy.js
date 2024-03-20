//documentation: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
describe('Typescript: working with variable types', () => {
    it('math 101', () => {
        //TODO: declare the sum as type number
        let sum;
        //TODO: make this assertion pass
        expect(sum).to.eq(3)
    });

    it('pulling the strings', () => {
        //TODO: declare the variables as type string
        let name;
        let surname;
        let fullName;
        //TODO: make this assertion pass
        expect(fullName).to.eq('Chuck Norris')
    })

    it('sheldon cooper: fun with arrays', () => {
        //TODO: declare the variable as type array of strings
        let users = ['admin', 'manager', 'operator']
        //TODO: make this assertion pass
        expect(users)
            .to.have.lengthOf(4)
            .and.to.have.all.members(['admin', 'manager', 'operator', 'superman'])
    });
    it('fix the boolean', () => {
        //TODO: declare the variable as type boolean
        const amIHonest = 'true'
        //TODO: make this assertion pass
        expect(amIHonest).to.be.true
    });
})