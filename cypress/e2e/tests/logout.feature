Feature: Verify Logout

  Scenario: User Logout
    Given User is on the "Sign in" page
    When Fill the "Email" field with valid data
    And Fill the "Password" field with valid data
    And Click on the "Sign in" button
    And Click on the "Settings" button
    And Click on the "Logout" button
    Then User is redirected to the "Global Feed" page
    And "Sign in" button is displayed