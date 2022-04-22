describe('Lead capture page', () => {

    const REDIRECT = '/aulas/obrigado'
    const EMAIL = 'fake@email.com'

    beforeEach(() => {
        cy.visit('/aulas')
    })

    it('should show thank you page when submitting the form', () => {
        cy.get('[data-test=email]').type(EMAIL)
        cy.get('[data-test=submit]').click()
        cy.get('[data-test=backdrop]').should('be.visible')
        cy.url({timeout: 20000}).should('include', REDIRECT)
    })

    it('should not submit the form when the email is invalid', () => {
        cy.get('[data-test=email]').type('invalidemail')
        cy.get('[data-test=submit]').click()
        cy.get('[data-test=backdrop]').should('not.be.visible')
    })
})