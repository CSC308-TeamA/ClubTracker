// Feature: Discussion board view
//   

// Scenario: View an existing thread
//  Given I have chosen to visit the discussion board page
//  When I click on "Discussion Board" in the top nav menu
//  Then I should see different threads of the discussion board
//  And I should be able to click on a thread to see more

describe("View an existing thead", () => {
    it("Given I have chosen to visit the discussion board page", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I click on 'Discussion Board' in the top nav menu", () => {
        cy.contains("Discussion Board").click();
    });

    it("Then I should be directed to a new page with a calendar", () => {
        cy.contains("Robot");
        cy.contains("Number of threads:");
    });

    it("And I should be able to click on a thread to see more", () => {
        cy.contains("Robot").click();
        cy.contains("New parts");
    });
})
