/// <reference types="cypress" />
const or = require("../../locators.json")

class CustomerLoginPageElements{


    nameText(){
        return cy.get(or.customerlogin.yourNameText)
    }

    userNameSelect(){
        return cy.get(or.customerlogin.userSelect)
    }

    loginBtn(){
        return cy.get(or.customerlogin.loginBtn)
    }
}

export default CustomerLoginPageElements