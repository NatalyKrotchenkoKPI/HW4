class ArticlePage {

    getFollowAuthor() {
        return cy.get('button').contains("Follow");
    }

    getUnfollowAuthor() {
        return cy.get('button').contains("Unfollow");
    }

    clickFollowButton() {
        this.getFollowAuthor().click();
    }

    verifyFollowButtonChanged() {
        this.getFollowAuthor().should('not.exist');
        this.getUnfollowAuthor().should('exist');
    }

    getFavoriteButton() {
        return cy.get('button').contains("Favorite Article");
    }

    getUnfavoriteButton() {
        return cy.get('button').contains("Unfavorite Article");
    }

    clickFavoriteButton() {
        this.getFavoriteButton().click();
    }

    verifyFavoriteButtonChanged() {
        this.getFavoriteButton().should('not.exist');
        this.getUnfavoriteButton().should('exist');
    }

    fillComment(text) {
        cy.get('[name=comment]').type(text);
    }

    clickComment() {
        cy.get('button').contains('Post Comment').click();
    }

}

export const articlePage = new ArticlePage();
