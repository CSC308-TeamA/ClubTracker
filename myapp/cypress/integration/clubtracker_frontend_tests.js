// Feature: Get to team roster page and sort by name
//   Test incomplete, under development

describe("Getting to team roster page successfully", () => {
    it("Given I visit the main page", () => {
        cy.visit("http://localhost:3000");
    });

    it("And I click on 'More' to get to 'Team Roster'", () => {
        cy.contains("More").click();
        cy.contains("Team Roster").click();
    });

    it("I can type something in the 'Name' box", () => {
        cy.get('input[name="name"]').type("anything");
    });
})