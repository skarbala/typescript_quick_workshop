//documentation: https://www.typescriptlang.org/docs/handbook/functions.html
describe('Functions', () => {
    it('beer with full info', () => {
        //TODO declare all types of variables
        const name = 'Datel z Marsu'
        const degrees = 14
        const price = 4

        expect(getFullInfo(name, price, degrees))
            .to.contain('4 EUR')
            .to.contain('14°')
    })

    it('beer with no degrees', () => {
        //TODO declare all types of variables
        const name = 'Datel z Marsu'
        const price = 4

        expect(getFullInfo(name, price))
            .to.contain(name)
            .to.contain('4 EUR')
    })

    //TODO declare all types of input parameters, declare degrees as optional
    //TODO declare type of output
    function getFullInfo(name, price, degrees) {
        let output = ''
        output = output.concat(name).concat(' | ')
        if (degrees) {
            output = output.concat(degrees.toString()).concat('°')
        }
        output = output.concat(price.toString()).concat(' EUR for 0.4')
        return output
    }
})
