// Feature: Signup/user authentication
//   Trying to sign up with credentials that already exist should
//   result in a notification and no state change 

// Scenario: Signing up with already existing info
//   Given I want to try signing up for an account that already exists
//   When I enter in credentials of an already existing account
//   Then I should be told that account already exists
//   And I should not be logged in and the page doesn't change

describe("Signup already existing", () => {
    it("Given I want to try signing up with existing account info", () => {
        cy.visit("http://localhost:3000");
        cy.contains("Sign Up").click();
    });

    it("When I enter in credentials that already exist", () => {
        cy.get('input[name="username"]').type("random1");
        cy.get('input[name="email"]').type("randomemail@gmail.com");
        cy.get('input[name="password"]').type("abcd");

        cy.get('button').contains("Sign Up").click();
    });

    it("Then I should be told that account already exists", () => {
        cy.contains("Account with email randomemail@gmail.com already exists");
    });

    it("And I should not be logged in and the page doesn't change", () => {
        cy.url().should("include", "/signup");
    });
})