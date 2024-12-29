describe('Página de Login', () => {


  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
      statusCode:400,}).as('stubPost')
  })

  it('Não deve realizar login com sucesso', () => {
    cy.login('teste#teste.com.br', '123')
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  })

  it('Não deve realizar login quando usuario informado não está cadastrado', () => {
    cy.login('teste@teste.com.br', 'Aline124#')
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })
})