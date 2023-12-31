/// <reference types="cypress" />

describe('funcionalidade produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')

    });

    it('deve selecionar um produto da lista ', () => {
        cy.get('[class="product-block grid"]').first().click()
        //fisr() caso que queira o primeiro
        //eq(4) escolher o numero da lista
        //contain(" nome doproduto") caso queira algum produto especifico
    });

    it('deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade )

    });

    it('deve add produtos ao carrinho cm costomizado', () => {
        cy.addProduto('Abominable Hoodie', 'M', 'Blue', 3)
    });

    it.only('deve add produtos ao carrinho cm costomizado', () => {
        cy.addProduto('Atlas Fitness Tank', 'S', 'Blue', 3)
    });

});


