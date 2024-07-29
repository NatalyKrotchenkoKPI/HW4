class GlobalFeedPage {
  visitGlobalPage() {
    cy.contains('a.nav-link', 'Global Feed').click();
  }
  visitArticlePage() {
    cy.get('.article-preview .preview-link').eq(3).click();
  }
  verifyUserIsOnFeedPage() {
    cy.contains('a.nav-link.active', 'Global Feed').should('be.visible');
  }

  verifySignInButton() {
    cy.contains('a.nav-link', 'Sign in').should('be.visible')
  }
}

export const globalFeedPage = new GlobalFeedPage();