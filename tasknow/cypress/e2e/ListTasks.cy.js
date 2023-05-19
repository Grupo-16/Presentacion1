describe('Listar tareas', () => { 
    it('Verifica que se encuentran las 2 tareas iniciales', () => {

        cy.visit('localhost:3000');

        cy.get('#email').type('test@user.com');
        cy.get('#password').type('asdf');
        cy.get('.MuiButtonBase-root').click()

        for (let index = 1; index <= 3 ; index++) {
            cy.get('.Toggle-Add-Card').first().click();
            cy.get('.Edit-Card-Textarea').type(`Tarea ${index}`);
            cy.get('.Edit-Button').click();
            
        }

        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 3)

    });
    
});