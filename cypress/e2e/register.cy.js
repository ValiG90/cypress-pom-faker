import {faker} from "@faker-js/faker";

const baseUrl = "https://automationteststore.com/"
const email = faker.internet.email();
const city = faker.location.city();
const loginName = faker.internet.userName();
const password = faker.internet.password();

describe('template spec', () => {
  it('login test', () => {
    cy.visit(baseUrl);
    cy.get('div #customer_menu_top li a').click();
    cy.contains('Continue').click();
    cy.get('[name="firstname"]').type('John');
    cy.get('[name="lastname"]').type('Doe');
    cy.get('#AccountFrm_email').type(email);
    cy.get('#AccountFrm_address_1').type("Street 1");
    cy.get('#AccountFrm_city').type(city);
    cy.get('#AccountFrm_zone_id').select('Cardiff');
    cy.get('#AccountFrm_postcode').type('123456');
    cy.get('#AccountFrm_loginname').type(loginName);
    cy.get("#AccountFrm_password").type(password);
    cy.get("#AccountFrm_confirm").type(password);
    cy.get("#AccountFrm_agree").check();
    cy.get('.btn.btn-orange.pull-right').click();
    cy.get('.maintext').contains("Your Account Has Been Created!");
    console.log(loginName);
    console.log(password);

  });

  it('edit account', () => {
    cy.visit(baseUrl);
    cy.get('div #customer_menu_top li a').click();
    cy.get("#loginFrm_loginname").type(loginName);
    cy.get("#loginFrm_password").type(password);
    cy.get('#loginFrm button').click();
    cy.get('div.col-md-9 li i.fa.fa-edit').click();
    cy.get("#AccountFrm_firstname").clear().type("NewFirstName");
    cy.get('button.btn.btn-orange.pull-right.lock-on-click').click();
    cy.get('.alert.alert-success').contains("Success: Your account has been successfully updated.");
  })

  it('login and logoff', () => {
    cy.visit(baseUrl);
    cy.get('div #customer_menu_top li a').click();
    cy.get("#loginFrm_loginname").type(loginName);
    cy.get("#loginFrm_password").type(password);
    cy.get('#loginFrm button').click();
    // cy.get('div .fa.fa-lock.fa-fw').click();
    cy.get('.info_links_footer li ').eq(6).click();
    cy.get('.mb40 p').contains('You have been logged off your account. It is now safe to leave the computer.');
});

it('place order', () => {
  cy.visit(baseUrl);
  cy.get('.logo').click();
  cy.get('.pricetag.jumbotron a').eq(0).click();
})

  
});



