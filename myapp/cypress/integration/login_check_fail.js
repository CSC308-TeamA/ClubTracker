// Feature: Login/user authentication
//   Trying to login with invalid credentials should result in a notification
//   and nothing happens in terms of site changes

// Scenario: Login with invalid email and password
//   Given I want to login with wrong credentials as a non-signed-in user
//   When I access the login page and enter fake login info
//   Then I should not be logged in and stay on the same page
//   And I should be told it was an invalid login

describe("Login with invalid email and password", () => {
    it("Given I want to login with wrong credentials", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I access the login page and enter fake login info", () => {
        cy.contains("Log In").click();

        cy.get('input[name="email"]').type("doesntwork@gmail.com");
        cy.get('input[name="password"]').type("abcd{enter}");
        cy.get('button').contains("Log In").click();
    });

    it("Then I should not be logged in and stay on the same page", () => {
        cy.url().should("include", "/login");
    });

    it("And I should be told it was an invalid login", () => {
        cy.contains("No account associated to email");
    });
})
