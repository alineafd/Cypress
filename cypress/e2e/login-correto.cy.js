describe('Página de Login', () => {


  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve realizar login com sucesso', () => {
    cy.login('alineafd.dias@gmail.com', 'Aline123#');
  })
})