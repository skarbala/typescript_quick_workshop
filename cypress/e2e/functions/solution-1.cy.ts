//documentation: https://www.typescriptlang.org/docs/handbook/functions.html
describe('Functions', () => {
    it('beer with full info', () => {
        const name: string = 'Datel z Marsu'
        const degrees: number = 14
        const price: number = 4

        expect(getFullInfo(name, price, degrees))
            .to.contain('4 EUR')
            .to.contain('14°')
    })

    it('beer with no degrees', () => {
        const name: string = 'Datel z Marsu'
        const price: number = 4

        expect(getFullInfo(name, price))
            .to.contain(name)
            .to.contain('4 EUR')
    })

    function getFullInfo(name: string, price: number, degrees?: number): string {
        let output: string = ''
        output = output.concat(name).concat(' | ')
        if (degrees) {
            output = output.concat(degrees.toString()).concat('°')
        }
        output = output.concat(price.toString()).concat(' EUR for 0.4')
        return output
    }
})
