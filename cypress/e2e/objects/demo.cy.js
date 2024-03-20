it('objects are messy', () => {
    const beer_one = {
        name: 'Datel z Marsu',
        degrees: 14,
        price: 4,
        alcohol: true,
        type: 'IPA'
    }

    const beer_two = {
        text: 'Festivale',
        alcoholDegrees: 10,
        price: 5,
        alcohol: true,
        type: 'PILSNER'
    }
    expect(getFullInfo(beer_one.name, beer_one.price, beer_one.degrees))
        .to.contain(beer_one.name)
        .to.contain('4 EUR')

    expect(getFullInfo(beer_two.name, beer_two.price, beer_two.degrees))
        .to.contain(beer_two.name)
        .to.contain('5 EUR')
})

function getFullInfo(name, price, degrees) {
    let output = ''
    output = output.concat(name).concat(' | ')
    if (degrees) {
        output = output.concat(degrees.toString()).concat('°')
    }
    output = output.concat(price.toString()).concat(' EUR for 0.4')
    return output
}