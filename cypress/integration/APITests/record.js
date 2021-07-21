describe('new record', () => {

    it('test1', ()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('#email').click();
        cy.get('#email').type('janthird2021batch@gmail.com');
        cy.get('#passwd').type('Selenium12345');
        cy.get('#SubmitLogin > span').click();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('#search_query_top').click();
        cy.get('#search_query_top').type('Dress');
        cy.get('#search_query_top').submit();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('.exclusive > span').click();
        cy.get('.button-medium > span').click();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('.standard-checkout > span').click();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('.button:nth-child(4) > span').click();
        cy.get('form:nth-child(3)').submit();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('.standard-checkout > span').click();
        cy.get('#form').submit();
        cy.get('.fancybox-item').click();
        cy.get('#cgv').click();
        cy.get('.standard-checkout > span').click();
        cy.get('#form').submit();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        


})



})
