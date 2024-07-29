Feature: Verify Sign up

  Scenario: User signs up with empty Username
    Given User is on the "Sign up" page
    When Fill the "Email" field with random data
    And Fill the "Password" field with random data
    And Click on the "Sign up" button
    Then Error message "username can't be blank" is displayed

  Scenario: User signs up with empty Email
    Given User is on the "Sign up" page
    When Fill the "Username" field with random data
    And Fill the "Password" field with random data
    And Click on the "Sign up" button
    Then Error message "email can't be blank" is displayed

  Scenario: User signs up with empty Password
    Given User is on the "Sign up" page
    When Fill the "Username" field with random data
    And Fill the "Email" field with random data
    And Click on the "Sign up" button
    Then Error message "password can't be blank" is displayed

  Scenario: User signs up with valid data
    Given User is on the "Sign up" page
    When Fill the "Username" field with random data
    And Fill the "Email" field with random data
    And Fill the "Password" field with random data
    And Click on the "Sign up" button
    Then User is redirected to the "Your Feed" page