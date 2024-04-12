import { valid } from "./Pages/valid credentials";
const positiveLogin = new valid();
beforeEach(function () {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});
describe("Login functionality", () => {
  it("Verify login with valid credentials", () => {
    positiveLogin.enterUsername("student");
    positiveLogin.enterPassword("Password123");
    positiveLogin.submitButton();
    positiveLogin.verifyNewPage();
    positiveLogin.congratMsg();
    positiveLogin.logoutButton();
  });
  it("Verify login with invalid username", () => {
    positiveLogin.enterUsername("western");
    positiveLogin.enterPassword("Password123");
    positiveLogin.submitButton();
    positiveLogin.errorMessage1();
    positiveLogin.errorText1();
  });
  it("Verify login with invalid password", () => {
    positiveLogin.enterUsername("student");
    positiveLogin.enterPassword("Password");
    positiveLogin.submitButton();
    positiveLogin.errorMessage2();
    positiveLogin.errorText2();
  });
});
