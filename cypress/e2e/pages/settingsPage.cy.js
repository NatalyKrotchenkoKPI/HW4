class SettingsPage {
  visit() {
    cy.visit('/settings');
  }
  clickLogout() {
    cy.get('[class="btn btn-outline-danger"]').click();
  }
}
export const settingsPage = new SettingsPage();