describe('Editar tareas', () => { 

    var newTaskTitle = 'Este nuevo título es mucho mejor que el anterior';
    var newTaskDesc = 'Sobretodo ahora que tiene descripción';

    it('Edita una de las tareas iniciales', () => {

        cy.visit('localhost:3000');

        // Activar la opción de edición
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
            .trigger('mouseover')
            .get('.Card-Icons')
            .click()
        
        // Escribir los nuevos parámetros y guardar
        cy.get('.Edit-Card-Textarea').clear().type(newTaskTitle);
        cy.get('.Edit-Card-Description').type(newTaskDesc);
        cy.get('.Button-Save').click();

        // Verificar que los parámetros cambiaron correctamente
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
            .get('.CardTitle').first()
            .should('have.text', newTaskTitle)
            .get('.CardDescripcion').first()
            .should('have.text', newTaskDesc);
    });

    it('Cancelar la edición de una tarea', () => {

        cy.visit('localhost:3000');

        let prevTaskTitle = 'Cocinar';
        let prevTaskDesc = 'Sin descripcion...';


        // Activar la opción de edición
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
            .trigger('mouseover')
            .get('.Card-Icons')
            .click()
        
        // Escribir los nuevos parámetros y cancelar edición
        cy.get('.Edit-Card-Textarea')
        .clear()
        .type(newTaskTitle);
        cy.get('.Edit-Card-Description')
        .clear()
        .type(newTaskDesc);
        cy.get('.Edit-Button-Cancel').click();

        // Verificar que los datos no cambiaron
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
            .get('.CardTitle').first()
            .should('have.text', prevTaskTitle)
            .get('.CardDescripcion').first()
            .should('have.text', prevTaskDesc);

    });
});