declare namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      cadastro(name: string, email: string, password: string, confirmPassword: string): Chainable<void>
    }
  }