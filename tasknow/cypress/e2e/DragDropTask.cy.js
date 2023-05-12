import '@4tw/cypress-drag-drop'

describe('Probar fuincionalidad drag and drop', () => {

    it('Tomar la tarea cocinar y moverla a "En curso"', () => {
        
        cy.visit('localhost:3000');

        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .drag('#EncursoCards', {force: true})

        cy.get('.List > .Lists-Cards > .Card')
    });
})