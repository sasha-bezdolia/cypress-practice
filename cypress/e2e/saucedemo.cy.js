/// <reference types="cypress" />

const validUser = 'standard_user';
const lockedUser = 'locked_out_user';
const validPassword = 'secret_sauce';
const invalidUser = 'Invalid User';
const invalidPassword = 'Invalid Password';


describe('Login tests', () => {
    
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('/');
    });

    it('Should successfully login with valid username and password', () => {
        cy.get('[data-test="username"]').type(validUser);
        cy.get('[data-test="password"]').type(validPassword);
        cy.get('[data-test="login-button"]').click();

        cy.url().should('contains', '/inventory.html');
        cy.get('#react-burger-menu-btn').should('exist');
        cy.get('.title').should('have.text', 'Products');
    });

    it('Should not login with invalid username', () => {
        cy.get('[data-test="username"]').type(invalidUser);
        cy.get('[data-test="password"]').type(validPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('not.contains', '/inventory.html');
    });

    it('Should not login with empty username and password fields', () => {
        cy.get('[data-test="login-button"]').click();
        
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
        cy.url().should('not.contains', '/inventory.html');
    });

    it('Should not login with empty password field', () => {
        cy.get('[data-test="username"]').type(invalidUser);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
        cy.url().should('not.contains', '/inventory.html');
    });

    it('Should not login locked user', () => {
        cy.get('[data-test="username"]').type(lockedUser);
        cy.get('[data-test="password"]').type(validPassword);
        cy.get('[data-test="login-button"]').click();
        
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        cy.url().should('not.contains', '/inventory.html');
    });

    
});
