//documentation: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
describe('Typescript: working with explicit variable types', () => {
    it('math 101', () => {
        let sum: number;
        sum = 1 + 2
        expect(sum).to.eq(3)
    });

    it('pulling the strings', () => {
        let name: string;
        let surname: string;
        let fullName: string
        name = 'Chuck'
        surname = 'Norris'
        fullName = name.concat(' ').concat(surname)
        expect(fullName).to.eq('Chuck Norris')
    })

    it('sheldon cooper: fun with arrays', () => {
        let users: string[] = ['admin', 'manager', 'operator']
        users.push('superman')
        expect(users)
            .to.have.lengthOf(4)
            .and.to.have.all.members(['admin', 'manager', 'operator', 'superman'])
    });

    it('fix the boolean', () => {
        const amIHonest: boolean = true
        expect(amIHonest).to.be.true
    });
})