describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://angular.traefik.me');
    cy.screenshot('first-page');
  })
})