// Feature: Login/user authentication
//   Trying to login with valid credentials should result in a state change,
//   then signing out will direct users to a page with a logged out msg


// Scenario: Login, then signing out
//   Given I want to sign out as a logged-in user
//   When I click on the "Log Out" button
//   Then I should have the option to login again or sign up
//   And I should be redirected to a different site with a msg

describe("Login, then signing out", () => {
    it("Given I want to sign out as a logged-in user", () => {
        cy.visit("http://localhost:3000");

        cy.contains("Log In").click();
        cy.get('input[name="email"]').type("random1@gmail.com");
        cy.get('input[name="password"]').type("abcd{enter}");
        cy.get('button').contains("Log In").click();
    });

    it("When I click on the 'Log Out' button", () => {
        cy.contains("Log Out").click();
    });

    it("Then I should have the option to login again or sign up", () => {
        cy.contains("Log In");
        cy.contains("Sign Up");
    });

    it("And I should be redirected to a diferent site with a msg", () => {
        cy.url().should("include", "/logout");
        cy.contains("YOU ARE LOGGED OUT");
    });
})
