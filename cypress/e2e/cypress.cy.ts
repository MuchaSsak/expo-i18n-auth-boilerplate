describe("cypress test suite", () => {
  it("works", () => {
    cy.visit("http://localhost:8081/");
    cy.get("div[id='root']").should("exist");
  });
});
