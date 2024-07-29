Feature: Verify Sign in

  Scenario: User signs in with valid data
    Given User is on the "Sign in" page
    When Fill the "Email" field with valid data
    And Fill the "Password" field with valid data
    And Click on the "Sign in" button
    Then User is redirected to the "Your Feed" page

  Scenario: User signs in with invalid Password
    Given User is on the "Sign in" page
    When Fill the "Email" field with valid data
    And Fill the "Password" field with random data
    And Click on the "Sign in" button
    Then Error message "email or password is invalid" is displayed

  Scenario: User signs in with invalid Email
    Given User is on the "Sign in" page
    When Fill the "Email" field with random data
    And Fill the "Password" field with valid data
    And Click on the "Sign in" button
    Then Error message "email or password is invalid" is displayed