describe('Agregar Tarea', () => { 
    it('Agregar una nueva tarea, verificar que se agrega correctamente', () => {

        // Variables con las que vamos a probar una tarea nueva
        var taskTitle = 'Tarea MUY importante'
        var taskDesc = 'Bro, realmente deberías hacer esta tarea bro...'
        
        cy.visit('localhost:3000');
        
        // Crear la nueva tarea con los parámetros anteriores
        cy.get('.Toggle-Add-Card').click();
        cy.get('.Edit-Card-Textarea').type(taskTitle);
        cy.get('.Edit-Card-Description').type(taskDesc);
        cy.get('.Edit-Button').click();

        // Verificar que la tarea fue creada con los mismos parámetros
        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 3) // se creó la nueva tarea
    
            .last('.Lists-Cards')
            .click() 

        // comparar título y descripción
        cy.get('.List > .Lists-Cards > .Card > .CardTitle')
            .last()
            .should('have.text', taskTitle)
        
        cy.get('.List > .Lists-Cards > .Card > .CardDescripcion')
            .last()
            .should('have.text', taskDesc)

    });

    it('Cancelar la creación de una nueva tarea', () => {

        var taskTitle = 'Tarea MUY importante'
        var taskDesc = 'Bro, realmente deberías hacer esta tarea bro...'

        cy.visit('localhost:3000');
        
        // Escribir parámetros pero cancelar creación
        cy.get('.Toggle-Add-Card').click();
        cy.get('.Edit-Card-Textarea').type(taskTitle);
        cy.get('.Edit-Card-Description').type(taskDesc);
        cy.get('.Edit-Button-Cancel').click();

        // Verificar que está la misma cantidad de tareas iniciales
        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 2) 

    });
 })