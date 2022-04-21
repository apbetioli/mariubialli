describe('Lead capture page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should show thank you page when submitting the form', () => {
        cy.get('input[type=email]')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('button').click()

        cy.url().should('include', '/aulas/obrigado')
    })

    it('should not submit the form when the email is invalid', () => {
        cy.get('input[type=email]')
            .type('invalidemail')

        cy.get('button').click()

        cy.url().should('not.include', '/aulas/obrigado')
    })
})