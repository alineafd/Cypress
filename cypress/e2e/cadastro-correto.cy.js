describe('Página de Cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.get('[data-test="register-button"]').click();
    cy.cadastro('Aline Dias', 'alineafd.dias@gmail.com', 'Aline123#', 'Aline123#');
    cy.get('[data-test="submit-button"]').click();
  }),

  it('Deve ver pets disponíveis para adoção com sucesso', () => {
    cy.get('.button').click();
  })
})