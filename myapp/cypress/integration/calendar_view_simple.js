// Feature: Calendar view
//   View a display of the calendar for any possible events
//   Note that this criteria has been modified due to feature cuts
//   (did not have time to implement full calendar functionality)

// Scenario: View calendar page
//  Given I have chosen to visit the calendar page
//  When I click on the dropdown and click "Calendar"
//  Then I should be directed to a new page with a calendar

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
