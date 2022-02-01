/// <reference types="cypress" />
import UserProfilPageElements from '../pageelements/UserProfilePageElements'

const userProfile = new UserProfilPageElements()

class UserProfilePageActions{

   
    userProfileVerication(profileUserName, userAccount, accountNum){
      userProfile.depositBtn().should('contain.text','Deposit')
      userProfile.withdrawlBtn().should('contain.text','Withdrawl')
      userProfile.transactionBtn().should('contain.text','Transaction')
      userProfile.welcomeText().should('contain.text','Welcome')
      userProfile.userNameText().should('contain.text',profileUserName)
      // .then((userName)=>{
      //   assert.equal(userName.text(), profileUserName)
      // })
      userProfile.selectAccount().select(userAccount).should('have.value','number:1002')
      userProfile.accountNumText().should('contain.text','Account Number')
      userProfile.accountNumber().should('contain.text',accountNum)
      // .then((account)=>{
      //   assert.equal(account.text(), accountNum)
      // })
       
    }



}

export default UserProfilePageActions