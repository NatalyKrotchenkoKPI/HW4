Feature: Verify links

  Scenario: User click header logo
    Given User is on the "Sign in" page
    When Click on the "Header Logo" button
    Then User is redirected to the "Global Feed" page

  Scenario: User click Home button
    Given User is on the "Sign in" page
    When Click on the "Home" button
    Then User is redirected to the "Global Feed" page

  Scenario: User click footer logo
    Given User is on the "Sign in" page
    When Click on the "Footer Logo" button
    Then User is redirected to the "Global Feed" page

  Scenario: User click "Thinkster" 
    Given User is on the "Sign in" page
    When Click on the "Thinkster" button
    Then User is redirected to the "Thinkster" page