// Feature: Login/user authentication
//   Trying to login with valid credentials should result in a state change


// Scenario: Login with valid email and password
//   Given I want to login with credentials as a non-signed-in user
//   When I access the login page and enter in login info
//   Then I should be logged in and directed to the main site
//   And I should have an option to log out

describe("Login with invalid email and password", () => {
    it("Given I want to login with valid credentials", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I access the login page and enter in login info", () => {
        cy.contains("Log In").click();

        cy.get('input[name="email"]').type("random1@gmail.com");
        cy.get('input[name="password"]').type("abcd{enter}");
        cy.get('button').contains("Log In").click();
    });

    it("Then I should be logged in and directed to the main site", () => {
        cy.url().should("include", "/home");
        cy.contains("About Us");
    });

    it("And I should have an option to log out", () => {
        cy.contains("Log Out");
    });
})