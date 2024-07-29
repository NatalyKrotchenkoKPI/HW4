class YourFeedPage {
  verifyUserIsOnFeedPage() {
    cy.contains('a.nav-link.active', 'Your Feed').should('be.visible');
  }
}

export const yourFeedPage = new YourFeedPage();