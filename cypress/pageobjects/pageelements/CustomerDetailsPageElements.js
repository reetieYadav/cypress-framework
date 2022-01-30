/// <reference types="cypress" />

const or = require("../../locators.json")

class CustomerDetailsPageElements{
   
    customerBtn(){

        return cy.get(or.customerdetails.customers)

    }

    searchCustomer(){

        return cy.get(or.customerdetails.searchcustomer)
    }

    fNameText(){

        return  cy.get(or.customerdetails.firstNameText)
       
    }
    lastNameText(){
         
        return  cy.get(or.customerdetails.lastNameText)
         
          
      }
      fNameResult(){
       
        return  cy.get(or.customerdetails.fNameResult)
          
      }
      fNameWithoutSearch(){
       
        return  cy.get(or.customerdetails.fnameWithoutSearch)
          
      }

}


export default CustomerDetailsPageElements