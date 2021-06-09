// Feature: Discussion board view
//   

// Scenario: View an existing thread
//  Given I 
//  When I 
//  Then I 

describe("View calendar page", () => {
    it("Given I have chosen to visit the calendar page", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I click on the dropdown adn click 'Calendar'", () => {
        cy.contains("Dropdown").click();
        cy.contains("Calendar").click();
    });

    it("Then I should be directed to a new page with a calendar", () => {
        cy.url().should("include", "/calendar");
        cy.contains("Check out our other events!");
        cy.get("iframe");
    });
})
