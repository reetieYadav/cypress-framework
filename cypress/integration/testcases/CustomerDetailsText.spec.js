/// <reference types="cypress" />


import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import CustomerDetailsPageAction from '../../pageobjects/pageactions/CustomerDetailsPageAction'


describe("Adding a new Customer",()=>{

    const homePage = new HomePageActions()
    const CustDetailPage = new CustomerDetailsPageAction()


    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })

    beforeEach(()=>{

        homePage.navigateToURL()


    })

    it("verify added Customer detail",()=>{
        homePage.loginAsBankManager()
        CustDetailPage.CustomerDetails("Harry")

    })



})