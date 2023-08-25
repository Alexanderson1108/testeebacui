/// <reference types="cypress" />

describe('funcionalidade endereços', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });
    it('cadastro de faturamento', () => {
        
    });
});