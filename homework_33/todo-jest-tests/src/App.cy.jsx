import React from "react";
import App from "./App";

describe("Test cases", () => {
  it("Check TODOS text", () => {
    cy.mount(<App />);
    cy.get("h1").should(($h1) => {
      expect($h1).to.have.text("TODOS");
    });
  });

  it("Check mockapi GET request successfull", () => {
    cy.mount(<App />);
    cy.request({
      method: "GET",
      url: "https://677c1e4320824100c07bf2e8.mockapi.io/ToDoItem"
    }).as("todoItemsGet");

    cy.get("@todoItemsGet").then(response => {
      const status = response.status;
      expect(status).to.eq(200);
    })
  });

  it("Check input validator works", () => {
    cy.mount(<App />);
    cy.get("#taskCaption").type("12sd");
    cy.get("#submitButton").click();
    cy.get("#validationErrorMessage")
      .should("be.visible")
      .and("contain","Should contain more than 5 characters");
  });
  it("Check input adds list element", () => {
    cy.mount(<App />);
    cy.get("#taskCaption").type("Test caption from cy");
    cy.get("#submitButton").click();
    cy.get("#todo-items-list")
      .contains("li", "Test caption from cy")
      .should("be.visible");
  });
  it("Check modify input modifies element", () => {
    cy.mount(<App />);
    cy.get("#modify-item-button-id").type("Modify text from cy");
    cy.get('#todo-items-list').each(($listEl) => {
      cy.wrap($listEl).find('button').eq(0).click()
  })
    cy.get("#todo-items-list")
      .contains("li", "Test caption from cy")
      .should("be.visible");
  });
});
