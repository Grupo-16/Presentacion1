describe('Eliminar Tarea', () => {
    it('Elimina una tarea de la lista', () => {
        
        cy.visit('localhost:3000');

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
            .should('have.lengthOf', 1);
    });
});