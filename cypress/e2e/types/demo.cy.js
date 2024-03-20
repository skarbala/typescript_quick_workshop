it('you can put anything into a variable', () => {
  let variable = 1
  variable = 'jozo'
  variable = true
  variable = ['jozo', 1, true]
  cy.log(variable)
});

