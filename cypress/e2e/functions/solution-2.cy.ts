it('just checkin if the selected media is connected', () => {
    const connectedSocials: string[] = ['Instagram', 'Facebook', 'X', 'Linkedin']
    expect(isSocialPresentInArray(connectedSocials, 'Facebook')).to.be.true
})

function isSocialPresentInArray(inputArray: string[], social: string): boolean {
    return inputArray.includes(social)
}