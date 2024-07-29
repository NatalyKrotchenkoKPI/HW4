Feature: Verify interaction with Article

  Scenario: User likes article
    Given User is on the "Sign in" page
    When Fill the "Email" field with valid data
    And Fill the "Password" field with valid data
    And Click on the "Sign in" button
    And Click on the "Global Page" button
    And Click on the "Article Title" button
    And Click on the "Favorite Article" button
    Then "Favorite Artice" button changes to the "Unfavorite Article" button

  Scenario: User posts comment
    Given User is on the "Sign in" page
    When Fill the "Email" field with valid data
    And Fill the "Password" field with valid data
    And Click on the "Sign in" button
    And Click on the "Global Page" button
    And Click on the "Article Title" button
    And Fill the "Write a comment" field with random data
    And Click on the "Post Comment" button
    Then Comment is visible

  Scenario: User likes article
    Given User is on the "Sign in" page
    When Fill the "Email" field with valid data
    And Fill the "Password" field with valid data
    And Click on the "Sign in" button
    And Click on the "Global Page" button
    And Click on the "Article Title" button
    And Click on the "Follow" button
    Then "Follow" button changes to the "Unfollow" button