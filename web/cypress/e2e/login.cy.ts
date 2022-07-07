describe('Check Login Page', () => {
  it('opens login page', () => {
    cy.visit('http://localhost:3000/publish/calendar')
    cy.contains('Log In to your account')
    // cy.get('.space-y-2 > .bg-gradient-to-br').click()
  })
  it('is clickable', () => {
    cy.get('.space-y-2 > :nth-child(1) > .justify-center').click()
    cy.get(':nth-child(2) > .justify-center').click()
  })
})

export {}
