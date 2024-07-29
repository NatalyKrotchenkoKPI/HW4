class SignupPage {
  visit() {
    cy.visit('/register');
  }

  fillUsername(username) {
    cy.get('[name=username]').type(username);
  }

  fillEmail(email) {
    cy.get('[name=email]').type(email);
  }

  fillPassword(password) {
    cy.get('[name=password]').type(password);
  }

  submit() {
    cy.get('button').contains('Sign up').click();
  }

  verifyUsernameErrorMessage() {
    cy.contains('ul.error-messages', "username can't be blank").should('be.visible');
  }

  verifyEmailErrorMessage() {
    cy.contains('ul.error-messages', "email can't be blank").should('be.visible');
  }

  verifyPasswordErrorMessage() {
    cy.contains('ul.error-messages', "password can't be blank").should('be.visible');
  }
}
export const signupPage = new SignupPage();