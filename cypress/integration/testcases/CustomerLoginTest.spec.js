/// <reference types="cypress" />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import CustomerLoginPageActions from "../../pageobjects/pageactions/CustomerLoginPageActions"
import UserProfilePageActions from "../../pageobjects/pageactions/UserProfilePageActions"


describe("Login as Customer",()=>{

    const custLoginAction = new CustomerLoginPageActions()
    const homePage = new HomePageActions()
    const userProfil = new UserProfilePageActions()

    beforeEach(()=>{
        homePage.navigateToURL("/")
    })

    it("Verify customer login",()=>{
        homePage.loginAsCustomer()
        custLoginAction.customerLogin('Hermoine Granger')
        userProfil.userProfileVerication('Hermoine Granger','number:1002','1002')

    })


})


