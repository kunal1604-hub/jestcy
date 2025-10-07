describe("Mini App E2E", () => {
  beforeEach(() => {
    cy.visit("./public/index.html");
  });

  it("logs in successfully", () => {
    cy.get('h2').contains('Login');
    cy.get("#username").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("adds a todo", () => {
    cy.get('h2').contains('Todo');
    cy.get("#todoInput").type("Learn CI/CD");
    cy.get("#addTodoBtn").click();
  });
});
