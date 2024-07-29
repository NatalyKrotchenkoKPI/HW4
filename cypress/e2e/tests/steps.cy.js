import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { signupPage } from '../../e2e/pages/signupPage.cy';
import { signinPage } from '../../e2e/pages/signinPage.cy';
import { yourFeedPage } from '../../e2e/pages/yourfeedPage.cy';
import { globalFeedPage } from '../../e2e/pages/globalfeedPage.cy';
import { settingsPage } from '../../e2e/pages/settingsPage.cy';
import { articlePage } from '../../e2e/pages/articlePage.cy';

Given('User is on the {string} page', (page) => {
  if (page === "Sign up") {
    signupPage.visit();
    cy.url().should('include', '/register').then((url) => {
      expect(url).to.include('/register');
    });
   
  } else if (page === "Sign in") {
    signinPage.visit();
    cy.url().should('include', '/login').then((url) => {
      expect(url).to.include('/login');
    });
  }
});

When('Fill the {string} field with random data', (field) => {
  if (field === 'Username') {
    cy.generateRandomText(5).then((randomText) => {
      signupPage.fillUsername(randomText);
    });
  } else if (field === 'Email') {
    cy.generateRandomText(7).then((randomText) => {
      signupPage.fillEmail(randomText);
      cy.readFile('cypress/fixtures/users.json').then((data) => {
        data.email = randomText;
        cy.writeFile('cypress/fixtures/users.json', data);
      });
    });
  } else if (field === 'Password') {
    cy.generateRandomText(7).then((randomText) => {
      signupPage.fillPassword(randomText);
      cy.readFile('cypress/fixtures/users.json').then((data) => {
        data.password = randomText;
        cy.writeFile('cypress/fixtures/users.json', data);
      });
    });
  } else if (field === 'Write a comment') {
    articlePage.fillComment('This is a test comment.');
  }
});

When('Fill the {string} field with valid data', (field) => {
  cy.fixture('users').then((users) => {
    if (field === 'Email') {
      signinPage.fillEmail(users.email);
    } else if (field === 'Password') {
      signinPage.fillPassword(users.password);
    }
  });
});

When('Click on the {string} button', (button) => {
  if (button === 'Sign up') {
    signupPage.submit();
  } else if (button === 'Sign in') {
    signinPage.submit();
  } else if (button === 'Settings') {
    settingsPage.visit();
  } else if (button === 'Logout') {
    settingsPage.clickLogout();
  } else if (button === 'Header Logo') {
    signinPage.clickHeaderLogo();
  } else if (button === 'Home') {
    signinPage.clickHome();
  } else if (button === 'Footer Logo') {
    signinPage.clickFooterLogo();
  } else if (button === 'Global Page') {
    globalFeedPage.visitGlobalPage();
  } else if (button === 'Article Title') {
    globalFeedPage.visitArticlePage();
  } else if (button === 'Favorite Article') {
    articlePage.clickFavoriteButton();
  } else if (button === 'Post Comment') {
    articlePage.clickComment();
  } else if (button === 'Follow') {
    articlePage.clickFollowButton();
  } else if (button === 'Thinkster') {
    signinPage.clickThinkster();
  }

});

Then('User is redirected to the {string} page', (page) => {
  if (page === 'Your Feed') {
    yourFeedPage.verifyUserIsOnFeedPage();
  } else if (page === 'Global Feed') {
    globalFeedPage.verifyUserIsOnFeedPage();
  } else if (page === 'Thinkster') {

  }
});

Then('User is on the {string} page', (page) => {
  if (page === 'Sign up') {
    cy.url().should('include', '/register');
  }
});

Then('Error message {string} is displayed', (message) => {
  if (message === "username can't be blank") {
    signupPage.verifyUsernameErrorMessage();
  } else if (message === "email can't be blank") {
    signupPage.verifyEmailErrorMessage();
  } else if (message === "password can't be blank") {
    signupPage.verifyPasswordErrorMessage();
  } else if (message === "email or password is invalid") {
    signinPage.verifyErrorMessage();
  }
});

Then('"Sign in" button is displayed', () => {
  globalFeedPage.verifySignInButton();
});

Then('"Favorite Artice" button changes to the "Unfavorite Article" button', () => {
  articlePage.verifyFavoriteButtonChanged();
});

Then('"Follow" button changes to the "Unfollow" button', () => {
  articlePage.verifyFollowButtonChanged();
});

Then('Comment is visible', () => {
  cy.contains('This is a test comment.').then((comment) => {
    expect(comment).to.be.visible;
    expect(comment.text()).to.equal('This is a test comment.');
  });
})
