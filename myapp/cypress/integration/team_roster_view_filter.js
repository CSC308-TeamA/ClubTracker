// Feature: Team roster view
//   View a display of members within the club so that I can see who's
//   active and know about their roles and contact info

// Scenario: Vie with specific filter
//  Given I have any site access roles or none
//  When I access the roster page and search using name, status, role, or position
//  Then I should see team members that match the given criteria
//  And I should be able to click each member to see more info

describe("View all team members", () => {
    it("Given I have any site access roles or none", () => {
        cy.visit("http://localhost:3000");
    });

    it("When I access the roster page and search using some criteria", () => {
        cy.contains("Dropdown").click();
        cy.contains("Team Roster").click();

        cy.get('select[name="member_status"]').select("Active");
        cy.get('input[name="name"]').type("Maggie Baldridge{enter}");
    });

    it("Then I should see team members that match the given criteria", () => {
        cy.url().should("include", "/teamroster?name=Maggie+Baldridge&member_status=Active&position=&specialization=");

        cy.contains("Maggie Baldridge");
    });

    it("And I should be able to click each member to see more", () => {
        cy.contains("Maggie Baldridge").click();
        cy.contains("Active");
        cy.contains("132-233-1222");
    });
})
