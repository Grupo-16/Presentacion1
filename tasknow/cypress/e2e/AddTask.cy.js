describe('Agregar Tarea', () => { 

    var taskTitle = 'Tarea MUY importante'
    var taskDesc = 'Bro, realmente deberías hacer esta tarea bro...'

    var longTaskText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sodales mauris sed egestas. Ut ac magna a elit vehicula consequat in eu orci. Phasellus pulvinar mi magna, eget vehicula ligula tincidunt eget. Fusce semper metus quis tellus fringilla egestas. Morbi volutpat venenatis purus, nec aliquam dui vestibulum id. Nulla fermentum commodo est, vitae auctor eros pellentesque vitae. Quisque sed est vitae tellus consectetur placerat nec sit amet justo. Praesent non ligula id tortor convallis finibus. Nam sollicitudin magna eu enim aliquam, sit amet vulputate ipsum euismod. Cras vestibulum hendrerit leo, eu vulputate dolor vulputate nec.  Nunc imperdiet augue odio, in convallis augue lacinia id. In dictum diam eget sapien viverra tincidunt. Pellentesque lacus magna, tincidunt a sollicitudin sed, facilisis quis massa. Suspendisse potenti. Vestibulum posuere est at eleifend consectetur. Etiam ex quam, sollicitudin';

    var japaneseTaskTitle = '星座になれたら'
    var japaneseTaskDesc = 'もうすぐ時計は6時 もうそこに一番星 影を踏んで 夜に紛れたくなる帰り道 どんなに探してみても 一つしかない星 何億光年 離れたところからあんなに輝く いいな 君は みんなから愛されて いいや 僕は ずっと一人きりさ」'

    it('Agregar una nueva tarea', () => {

        // Variables con las que vamos a probar una tarea nueva
        
        cy.visit('localhost:3000');
        
        // Crear la nueva tarea con los parámetros anteriores
        cy.get('.Toggle-Add-Card').first().click();
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

    it('Agregar una nueva tarea con textos muy largos', () => {

        // Variables con las que vamos a probar una tarea nueva
        
        cy.visit('localhost:3000');
        
        // Crear la nueva tarea con los parámetros anteriores
        cy.get('.Toggle-Add-Card').eq(1).click();
        cy.get('.Edit-Card-Textarea').type(longTaskText);
        cy.get('.Edit-Card-Description').type(longTaskText);
        cy.get('.Edit-Button').click();

        // Verificar que la tarea fue creada con los mismos parámetros
        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 3) // se creó la nueva tarea
    
            .last('.Lists-Cards')
            .click() 

        // comparar título y descripción
        cy.get('.List > .Lists-Cards > .Card > .CardTitle')
            .last()
            .should('have.text', longTaskText)
        
        cy.get('.List > .Lists-Cards > .Card > .CardDescripcion')
            .last()
            .should('have.text', longTaskText)

    });

    it('Agregar Tarea con textos extraños', () => {
        
        cy.visit('localhost:3000');

        // Crear la nueva tarea con los parámetros anteriores
        cy.get('.Toggle-Add-Card').eq(2).click();
        cy.get('.Edit-Card-Textarea').type(japaneseTaskTitle);
        cy.get('.Edit-Card-Description').type(japaneseTaskDesc);
        cy.get('.Edit-Button').click();

        // Verificar que la tarea fue creada con los mismos parámetros
        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 3) // se creó la nueva tarea
    
            .last('.Lists-Cards')
            .click() 

        // comparar título y descripción
        cy.get('.List > .Lists-Cards > .Card > .CardTitle')
            .last()
            .should('have.text', japaneseTaskTitle)
        
        cy.get('.List > .Lists-Cards > .Card > .CardDescripcion')
            .last()
            .should('have.text', japaneseTaskDesc)
    });


    it('Cancelar la creación de una nueva tarea', () => {

        cy.visit('localhost:3000');
        
        // Escribir parámetros pero cancelar creación
        cy.get('.Toggle-Add-Card').first().click();
        cy.get('.Edit-Card-Textarea').type(taskTitle);
        cy.get('.Edit-Card-Description').type(taskDesc);
        cy.get('.Edit-Button-Cancel').click();

        // Verificar que está la misma cantidad de tareas iniciales
        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 2) 

    });


 })