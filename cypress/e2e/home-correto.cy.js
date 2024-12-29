describe('Página de Cadastro', () => {

    beforeEach(()=>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    
    it('Validando exibição das imagens dos animais na home', () => {
        cy.get('.footer__img').should('be.visible');
    })
})