/// <reference types="cypress" />

import CustomerDetailsPageElements from '../pageelements/CustomerDetailsPageElements'
const custDetailElement = new CustomerDetailsPageElements()

class CustomerDetailsPageAction{

    CustomerDetails(customerName){
        custDetailElement.customerBtn().click()
        custDetailElement.fNameText().should('contain.text','First Name')
        custDetailElement.lastNameText().should('contain.text','Last Name')
        custDetailElement.fNameWithoutSearch().should('have.text','Hermoine')
        custDetailElement.searchCustomer().clear().type(customerName)
        custDetailElement.fNameText().should('contain.text','First Name')
        custDetailElement.lastNameText().should('contain.text','Last Name')
        custDetailElement.fNameResult().should('have.text','Harry')

        // addcustelement.addCustomerBtn().click()
        // addcustelement.firstNameField().type(firstName)
        // addcustelement.lastNameField().type(lastName)
        // addcustelement.postCodeField().type(postCode)
        // addcustelement.addCustomerSubmitBtn().click()
    }



    // validateAlert(alertMsg){

    //     cy.on('window:alert',(alertText)=>{

    //         expect(alertText).contains(alertText)
  
    //       })


    // }

}
export default CustomerDetailsPageAction