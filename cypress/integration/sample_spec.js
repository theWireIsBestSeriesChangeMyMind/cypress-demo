
describe('User is able to log in to bank', () => {

    it('Login page is loaded', () => {
        cy.visit('/');
    })
    it('credentials are provided', () => {
        cy.fixture('example').then((userData)=>{
            cy.get('#username').type(userData.username);
            cy.get('#password').type(userData.password);
        })
    });
    it('button is clicked', () => {
        cy.get('[data-test="signin-submit"]').click();
    });
})

