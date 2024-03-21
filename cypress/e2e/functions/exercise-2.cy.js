//TODO: improve this
//documentation: https://www.typescriptlang.org/docs/handbook/functions.html
it('just checkin if the selected media is connected', () => {
    const connectedSocials = ['Instagram', 'Facebook', 'X', 'Linkedin']
    expect(isSocialPresentInArray(connectedSocials, 'Facebook')).to.be.true
})

function isSocialPresentInArray(inputArray, social) {
    return inputArray.includes(social)
}