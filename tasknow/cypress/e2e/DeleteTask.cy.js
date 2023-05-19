describe('Eliminar Tarea', () => {
    it('Elimina una tarea de la lista', () => {
        
        cy.visit('localhost:3000');

        cy.get('#email').type('test@user.com');
        cy.get('#password').type('asdf');
        cy.get('.MuiButtonBase-root').click()

        cy.get('.Toggle-Add-Card').first().click();
        cy.get('.Edit-Card-Textarea').type("Borrar esta tarea");
        cy.get('.Edit-Card-Description').first().type("Borrar esta tarea");
        cy.get('.Edit-Button').click();

        // eliminar el primer elemento de la lista
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
            .trigger('mouseover')
            .get('.Card-Icons')
            .click()
            .get('.Button-Delete')
            .click();

        // verificar eliminación
        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 0);
    });
});