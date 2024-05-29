class RegisterPage {
    getFirstNameField (){
        return cy.get('[name="firstname"]');
    }
    getLastNameField (){
        return cy.get('[name="lastname"]');
    }

     getEmailField (){
        return cy.get("#AccountFrm_email");

     }

     getAddress1Field (){
        return cy.get('#AccountFrm_address_1');
     }

     getCityField (){
        return cy.get('#AccountFrm_city');
     }

     getZoneIdField(){
      return cy.get('#AccountFrm_zone_id')
     }

     getPostalCodeField (){
        cy.get('#AccountFrm_postcode')
     }

     getLoginNameField (){
        cy.get('#AccountFrm_loginname')
     }

     getPasswordField (){
        cy.get("#AccountFrm_password")
     }

     getPasswordConfirmField (){
        cy.get("#AccountFrm_confirm")
     }

     doRegisterFromPOM(firstName,lastName,email,address1,city,zoneId,postalCode,loginName,password,confirmPassword){
        this.getFirstNameField().type(firstName,{delay: 0});
        this.getLastNameField().type(lastName, {delay: 0});
        this.getEmailField().type(email, {delay: 0});
        this.getAddress1Field().type(address1, {delay: 0});
        this.getCityField().type(city, {delay: 0});
        this.getZoneIdField().select(zoneId, {delay: 0});
        this.getPostalCodeField(postalCode, {delay: 0});
        this.getLoginNameField(loginName, {delay: 0});
        this.getPasswordField(password, {delay: 0});
        this.getPasswordConfirmField(confirmPassword, {delay: 0});
     }

}

export default new RegisterPage();