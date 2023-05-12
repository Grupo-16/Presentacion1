describe('Búsqueda de tarea', () => { 
    it('Buscar la tarea Cocinar', () => {
        
        cy.visit('localhost:3000');

        cy.get('#search')
            .type('Comprar')

        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .get('.CardTitle')
            .contains('Comprar')
    });

    it('Crear tarea y despues buscarla', () => {

        cy.visit('localhost:3000');

        var taskTitle = "Esto es una nueva tarea";
        var search = "esto ES"

        cy.get('.Toggle-Add-Card').eq(2).click();
        cy.get('.Edit-Card-Textarea').type(taskTitle);
        cy.get('.Edit-Button').click();

        cy.get('#search')
            .type(search)
        
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .get('.CardTitle')
            .contains(taskTitle)
    })
});