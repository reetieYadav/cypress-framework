/// <reference types="cypress" />
import CustomerLoginPageElements from '../pageelements/CustomerLoginPageElements'

const custLoginElement = new CustomerLoginPageElements()

class CustomerLoginPageActions{

   
    customerLogin(userName){
        custLoginElement.nameText().should('have.text','Your Name :')
        custLoginElement.userNameSelect().select(userName).should('have.value','1')
        custLoginElement.loginBtn().click()
    }



}

export default CustomerLoginPageActions