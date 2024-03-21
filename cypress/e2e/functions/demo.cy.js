//TODO: define the input parameters types and output of the function
it('you can put anything into a function', () => {
    cy.log(calculateViral(1500, 12))
    cy.log(calculateViral('1500k', 15))
    cy.log(calculateViral(true, ['10']))
})

function calculateViral(likes, comments) {
    return (likes * 5) + (comments * 10)
}