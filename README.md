# Conduit Test Automation with Cypress and Cucumber

## Summary
This repository contains Cypress test scripts using the Cucumber framework for testing the Conduit application..

## Requirements
- Node.js
- npm
- Cypress
- Cypress-Cucumber-Preprocessor

## Steps to Install
Clone the repository:

   git clone https://github.com/NatalyKrotchenkoKPI/HW4

## Steps to Launch
Open the Cypress test runner:
   
   npx cypress open

To run the tests in headless mode:

  npx cypress run

## Steps to creating the report
Run the tests and generate the report:

  npx cypress run --reporter mochawesome
