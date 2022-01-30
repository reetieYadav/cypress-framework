/// <reference types="cypress" />


const or = require("../../locators.json")

export default class HomePageElements {


    customerLoginBtn() {

        return cy.get(or.homepage.customerLoginBtn)
    }

    bankManagerLoginBtn() {

        return cy.get(or.homepage.bankManagerLoginBtn)

    }

    homebtn() {

        return cy.get(or.homepage.homeBtn)
    }

    heading() {

        return cy.get(or.homepage.headingtext)
    }


}