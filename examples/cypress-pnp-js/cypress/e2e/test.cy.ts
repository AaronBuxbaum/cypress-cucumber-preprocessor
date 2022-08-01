describe('pnp', () => {
  it('works', () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("input").should(
      "have.attr",
      "placeholder",
      "Search the web without being tracked"
    );
  })
})
