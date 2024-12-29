describe('Página de Cadastro', () => {
  
  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  }) 

  it('Não deve cadastrar um novo usuário com sucesso', () => {
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
})