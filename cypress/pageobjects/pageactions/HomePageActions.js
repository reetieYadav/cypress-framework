/// <reference types="cypress" />

import HomePageElements from '../pageelements/HomePageElements'

export default class HomePageActions{



    constructor(){

        globalThis.homepageelement = new HomePageElements()
    }


    navigateToURL(){

        cy.visit('/')

    }

    validateTitle(){

        return cy.title()
    }

    navigateToHome(){

        homepageelement.homebtn().click()
    }

    validateHomePage(){
        homepageelement.homebtn().then((home)=>{
            assert.equal(home.text(), 'Home')
        })
        homepageelement.heading().should('have.text','XYZ Bank')
    }

    loginAsBankManager(){

        homepageelement.bankManagerLoginBtn().click()

    }


    loginAsCustomer(){

        homepageelement.customerLoginBtn().click()
    }


}