describe('Editar tareas', () => { 

    var newTaskTitle = 'Este nuevo título es mucho mejor que el anterior';
    var newTaskDesc = 'Sobretodo ahora que tiene descripción';

    it('Edita una de las tareas iniciales', () => {

        cy.visit('localhost:3000');

        cy.get('#email').type('test@user.com');
        cy.get('#password').type('asdf');
        cy.get('.MuiButtonBase-root').click()

        cy.get('.Toggle-Add-Card').first().click();
        cy.get('.Edit-Card-Textarea').type("Editar esta tarea");
        cy.get('.Edit-Button').click();

        // Activar la opción de edición
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
            .trigger('mouseover')
            .get('.Card-Icons')
            .click()
        
        // Escribir los nuevos parámetros y guardar
        cy.get('.Edit-Card-Textarea').clear().type(newTaskTitle);
        cy.get('.Edit-Card-Description').first().type(newTaskDesc);
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

        cy.get('#email').type('test@user.com');
        cy.get('#password').type('asdf');
        cy.get('.MuiButtonBase-root').click()

        cy.get('.Toggle-Add-Card').first().click();
        cy.get('.Edit-Card-Textarea').type("Cocinar");
        cy.get('.Edit-Button').click();

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
        .first()
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