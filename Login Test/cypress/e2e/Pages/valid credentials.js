export class valid {
  enterUsername(username) {
    cy.get("#username").type(username);
  }
  enterPassword(password) {
    cy.get("#password").type(password);
  }
  submitButton() {
    cy.get("#submit").click();
  }
  verifyNewPage() {
    cy.get(".post-title").should("be.visible");
  }
  congratMsg() {
    cy.get("strong").should(
      "contain",
      "Congratulations student. You successfully logged in!"
    );
  }
  logoutButton() {
    cy.get(".wp-block-button__link").should("be.visible");
  }
  errorMessage1() {
    cy.get("#error").should("be.visible");
  }
  errorText1() {
    cy.get("#error").should("have.text", "Your username is invalid!");
  }
  errorMessage2() {
    cy.get("#error").should("be.visible");
  }
  errorText2() {
    cy.get("#error").should("have.text", "Your password is invalid!");
  }
}
