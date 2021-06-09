// Feature: Login check
//   When trying to login, backend should receive proper input
//   Login not currently complete, this test checks current implementation

// Scenario: Login with email and password
//   Given I want to login with my credentials as a non-signed-in user
//   When I access the login page and enter my login info
//   Then the URL should show my login info

describe("Login with email and password", () => {
    it("Given I want to login as a non-signed-in user", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I access the login page and enter my login info", () => {
        cy.contains("Log In").click();

        cy.get('input[name="email"]').type("randomemail123@gmail.com");
        cy.get('input[name="password"]').type("abcd{enter}");
    });

    it("Then the URL should show my login info", () => {
        cy.url().should("include", "/login?email=randomemail123%40gmail.com&password=abcd");
    });
})
