/// <reference types="cypress" />


describe('Test Example Cypress.io Home', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Visit Url and click Children', () => {
    cy.url().should("eq", "https://example.cypress.io/")
    cy.xpath('//ul[@class="home-list"]//a[text()="children"]').click()
    cy.url().should("eq", 'https://example.cypress.io/commands/traversal')
  })



  it("Clicking on Logo Should redirect to home", () => {
    cy.visit('https://example.cypress.io/commands/traversal')

    cy.xpath('//a[@class="navbar-brand"]').should("be.visible")
    cy.xpath('//a[@class="navbar-brand"]').should("have.text", "cypress.io")
      .and("not.be.hidden")
      .and("not.be.disabled").click()
    cy.url().should("eq", "https://example.cypress.io")
  })

  it("Check if all buttons are visible and clickable", () => {
    cy.xpath('//a[text()="GitHub"]').should('be.visible').and('not.be.disabled')
    cy.xpath('//a[text()="Cypress.io"]').should('be.visible').and('not.be.disabled')
    cy.xpath('//a[text()="docs.cypress.io"]').should('be.visible').and('not.be.disabled')
    cy.xpath('//a[text()="Querying"]').should('be.visible').and('not.be.disabled')
  })

})


describe("Test Children Page of Cypress.io", () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/traversal')
  })

  it("Click Dropdown and check if it has length of 17", () => {
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.url().should("eq", 'https://example.cypress.io/commands/traversal')
    cy.xpath('//li//a[@data-toggle="dropdown"]').click()
    cy.xpath('//ul[@class="dropdown-menu"]//a').should("have.length", 17)
    cy.xpath('//ul[@class="dropdown-menu"]//a').should("be.visible")

  })

  it("Check if Traversal Heading visible", () => {
    cy.xpath('//h1[text()="Traversal"]').should("be.visible")
  })

  it("Check if Description is Present underneath the heading", () => {

    cy.xpath('//p[text()="Examples of traversing DOM elements in Cypress, for a full reference of commands, go to "]').should("be.visible")
  })


})