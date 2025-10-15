describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://angular.traefik.me');
    cy.screenshot('first-page');
  })
})