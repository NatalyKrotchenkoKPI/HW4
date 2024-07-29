class SigninPage {
    visit() {
        cy.visit('/login');
    }

    fillEmail(email) {
        cy.get('[name=email]').type(email);
    }

    fillPassword(password) {
        cy.get('[name=password]').type(password);
    }

    submit() {
        cy.get('button').contains('Sign in').click();
    }

    verifyErrorMessage() {
        cy.contains('ul.error-messages', "email or password is invalid").should('be.visible');
    }

    clickHeaderLogo() {
        cy.get('a.navbar-brand').click();
    }

    clickHome() {
        cy.get('a.nav-link').contains('Home').click();
    }

    clickFooterLogo() {
        cy.get('a.logo-font').click();
    }

    clickThinkster() {
        cy.get('a').contains('Thinkster').should('have.attr', 'href').then((href) => {
            cy.wrap(href).as('thinksterLink');
        });
    }

    verifyUserIsOnThinksterPage() {
        cy.get('@thinksterLink').then((href) => {
            expect(href).to.equal('https://thinkster.io');
        });
    }
}
export const signinPage = new SigninPage();