/// <reference types="cypress" />
const or = require("../../locators.json")

class UserProfilPageElements{


    transactionBtn(){
        return cy.get(or.userProfil.transactionBtn)
    }

    depositBtn(){
        return cy.get(or.userProfil.deposit)
    }

    withdrawlBtn(){
        return cy.get(or.userProfil.withdrawl)
    }

    welcomeText(){
        return cy.get(or.userProfil.welcomeText)
    }

    userNameText(){
        return cy.get(or.userProfil.userName)
    }

    selectAccount(){
        return cy.get(or.userProfil.selectAccount)
    }

    accountNumText(){
        return cy.get(or.userProfil.accountNumberText)
    }

    accountNumber(){
        return cy.get(or.userProfil.accountNumber)
    }
}

export default UserProfilPageElements