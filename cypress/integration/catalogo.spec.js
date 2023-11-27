
describe('Test en el modulo de catalogo', () => {
    
    it('Se puede visitar la pagina correctamente', () => {
        cy.visit('http://localhost:5173/auth')
        cy.contains('Bienvenido de Nuevo!')
    });

});