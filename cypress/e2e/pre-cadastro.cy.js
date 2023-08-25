/// <reference types="cypress" />

const { faker } = require('@faker-js/faker')

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    

    it('deve completar o pre cadastro com sucesso', () => {
        let nomefaker = faker.name.firstName()

        let emailfaker = faker.internet.email(nomefaker)
        
        let sobrenomefaker = faker.name.lastName()

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('!teste.teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
    });
    
    it.only('deve completar pré cadastro com sucesso, costomizados', () => {
        let emailfaker2 = faker.internet.email()
        cy.preCadastro(emailfaker2 , 'senhaforte.', 'fabio', 'araujo')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
    });
});