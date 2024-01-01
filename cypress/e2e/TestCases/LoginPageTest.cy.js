//import { describe } from "mocha"

//<reference types="Cypress"/>

import LoginPage from "../PageObjects/LoginPage"

const lp = new LoginPage()

describe('Test Suite',function(){
    it("Positive Login test case",function(){
        lp.visit()
        lp.fillEmail('markram@mailinator.com')
        lp.fillPassword('Boolhundred1.')
        lp.loginButton()

        cy.wait(5000)
    })

    it("Negative Login test case",function(){
        lp.visit()
        lp.fillEmail('markram@mailinator.com')
        lp.fillPassword('Boolhundred2.')
        lp.loginButton()
    })



})