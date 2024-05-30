import { faker } from "@faker-js/faker";
import HeaderMenuPage from "../pages/HeaderMenuPage";
import RegisterMenuPage from "../pages/RegisterMenuPage";
/// <reference types="cypress" />

const baseUrl = "https://automationteststore.com/";
const email = faker.internet.email();
const city = faker.location.city();
const loginName = faker.internet.userName();
const password = faker.internet.password();

describe("register and e2e test suite", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("register test", () => {
    HeaderMenuPage.getLoginBtn().click();
    cy.contains("Continue").click();
    RegisterMenuPage.doRegisterFromPOM(
      "John",
      "Doe",
      email,
      "Street 1",
      city,
      "Cardiff",
      "123456",
      loginName,
      password,
      password
    );
    cy.get("#AccountFrm_agree").check();
    cy.get(".btn.btn-orange.pull-right").click();
    cy.get(".maintext").contains("Your Account Has Been Created!");
  });

  it("edit account test", () => {
    HeaderMenuPage.getLoginBtn().click();
    cy.get("#loginFrm_loginname").type(loginName);
    cy.get("#loginFrm_password").type(password);
    cy.get("#loginFrm button").click();
    cy.get("div.col-md-9 li i.fa.fa-edit").click();
    cy.get("#AccountFrm_firstname").clear().type("NewFirstName");
    cy.get("button.btn.btn-orange.pull-right.lock-on-click").click();
    cy.get(".alert.alert-success").contains(
      "Success: Your account has been successfully updated."
    );
  });

  it("login and logoff test", () => {
    HeaderMenuPage.getLoginBtn().click();
    cy.get("#loginFrm_loginname").type(loginName);
    cy.get("#loginFrm_password").type(password);
    cy.get("#loginFrm button").click();
    cy.get(".info_links_footer li ").eq(6).click();
    cy.get(".mb40 p").contains(
      "You have been logged off your account. It is now safe to leave the computer."
    );
  });

  it("place order test", () => {
    HeaderMenuPage.getLoginBtn().click();
    cy.get("#loginFrm_loginname").type(loginName);
    cy.get("#loginFrm_password").type(password);
    cy.get("#loginFrm button").click();
    cy.get(".logo").click();
    cy.get(".pricetag.jumbotron a").eq(0).click();
    cy.get(".nav.topcart.pull-left").click();
    cy.get("#cart_checkout1").click();
    cy.get("#checkout_btn").click();
    cy.get(".maintext").contains("Your Order Has Been Processed!");
  });
});
