describe('Lead capture page', () => {

    const REDIRECT = '/aulas/obrigado'
    const EMAIL = 'fake@email.com'

    beforeEach(() => {
        cy.visit('/aulas')
        cy.intercept("POST", "/api/subscribe", { statusCode: 200 }).as("subscribe")
    })

    it('should show thank you page when submitting the form by clicking on the button', () => {
        cy.getBySel('email').type(EMAIL)
        cy.getBySel('submit').click()
        cy.wait("@subscribe")
        cy.location("pathname").should("contain", REDIRECT)
    })

    it('should show thank you page when submitting the form using enter', () => {
        cy.getBySel('email').type(EMAIL + "{enter}")
        cy.wait("@subscribe")
        cy.location("pathname").should("contain", REDIRECT)
    })

    it('should not submit the form when the email is invalid', () => {
        cy.getBySel('email').type('invalidemail')
        cy.getBySel('submit').click()
        cy.getBySel('backdrop').should('not.be.visible')
    })

})