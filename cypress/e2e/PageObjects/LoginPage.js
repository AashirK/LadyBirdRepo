 /// <reference types="Cypress" />

class LoginPage
{

    visit()
    {
        const visit = cy.visit("https://qa.perfectdaylive.com/login")
        return this
    }

    fillEmail(value)
    {
        const field = cy.get('#email')
        field.clear()
        field.type(value)
        return this

    }

    fillPassword(value)
    {
        const field = cy.get('#password')
        field.clear()
        field.type(value)
        return this
    }

    loginButton()
    {
        const lb = cy.get('[type=submit]')
        lb.click()
    }

}

export default LoginPage