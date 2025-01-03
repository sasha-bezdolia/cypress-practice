/// <reference types="cypress" />

describe('Buttons and links on the page', () => {
    
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }); //ingnore fetch and xhr responces
        cy.visit('/');
    });

    describe('Header buttons and links', () => {

        it('Logo should be a link to the main page', () => {
            cy.get('.header_logo')
                .should('have.attr', 'href', '/');
        });

        it('Navigation link "Home" should be a link to the main page', () => {
            cy.get('.header_nav').contains('Home')
                .should('have.attr', 'href', '/')
                .should('be.visible');
        });

        it('Navigation link "About" should scroll to the about section', () => {
            cy.get('.header_nav').contains('About')
                .should('have.attr', 'appscrollto', 'aboutSection')
                .should('be.visible');
        });

        it('Navigation link "Contacts" should scroll to the contacts section', () => {
            cy.get('.header_nav').contains('Contacts')
                .should('have.attr', 'appscrollto', 'contactsSection')
                .should('be.visible');
        });

        it('Should have "Guest log in" link', () => {
            cy.get('.header_right').contains('Guest log in')
                .should('be.visible');
        });

        it('Should have [Sing In] button', () => {
            cy.get('.header_right button').contains('Sign In')
                .should('be.visible');
        });
        
    });
    
    describe('Body buttons and links', () => {
        
        it('Should have [Sign up] button on the page', () => {
            cy.get('.hero-descriptor_btn')
                .should('have.text', 'Sign up');
        });

    });

    describe('Footer buttons and links', () => {
        
        it('Should have facebook link', () => {
            cy.get('.socials_link[href*="facebook"]')
                .should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School');
        });
        
        it('Should have telegram link', () => {
            cy.get('.socials_link[href*="t.me"]')
                .should('have.attr', 'href', 'https://t.me/ithillel_kyiv');
        });
        
        it('Should have youtube link', () => {
            cy.get('.socials_link[href*="youtube"]')
                .should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        });
        
        it('Should have instagram link', () => {
            cy.get('.socials_link[href*="instagram"]')
                .should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/');
        });
        
        it('Should have linkedin link', () => {
            cy.get('.socials_link[href*="linkedin"]')
                .should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/');
        });
        
        it('Should have link to the main page in footer', () => {
            cy.get('.contacts_link').contains('ithillel.ua')
                .should('have.attr', 'href', 'https://ithillel.ua');
        });
        
        it('Should have email link in footer', () => {
            cy.get('.contacts_link').contains('support@ithillel.ua')
                .should('have.attr', 'href', 'mailto:developer@ithillel.ua');
        });
    
    });

});