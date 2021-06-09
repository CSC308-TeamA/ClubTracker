// Feature: Team roster view
//   View a display of members within the club so that I can see who's
//   active and know about their roles and contact info

// Scenario: View all team members
//  Given I have any site access roles or none
//  When I access the roster page and apply no filters
//  Then I should see all team members and relevant public information
//  And I should be able to click each member to see more

describe("View all team members", () => {
    it("Given I have any site access roles or none", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I access the roster page and apply no filters", () => {
        cy.contains("Dropdown").click();
        cy.contains("Team Roster").click();
        cy.url().should("include", "/teamroster");
    });

    it("Then I should see all team members and relevant public info", () => {
        cy.contains("Darren Collins")
        cy.contains("Avery")
        cy.contains("President")
    });

    it("And I should be able to click each member to see more", () => {
        cy.contains("Darren Collins").click();
        cy.contains("Active");
        cy.contains("555-555-5555");
    });
})