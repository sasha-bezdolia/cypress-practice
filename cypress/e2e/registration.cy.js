/// <reference types="cypress" />

const randomNumber = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
const validEmail = `newExampleEmail${randomNumber}@gmail.com`;
const validPassword = 'PassWord123';

describe('Registration tests', () => {
    
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }); //ingnore fetch and xhr responces
        cy.visit('/');
        cy.contains('Sign up').click();
    });

    describe('All elements of "Registration" window should be visible', () => {
        
        it('Window "Registration" should have text "Registration"', () => {
            cy.get('.modal-title').should('have.text', 'Registration');
        });
        
        it('Field "Name" should be visible', () => {
            cy.get('#signupName').prev().should('have.text', 'Name');
            cy.get('#signupName').should('be.visible');
        });
        
        it('Field "Last name" should be visible', () => {
            cy.get('#signupLastName').prev().should('have.text', 'Last name');
            cy.get('#signupLastName').should('be.visible');
        });
        
        it('Field "Email" should be visible', () => {
            cy.get('#signupEmail').prev().should('have.text', 'Email');
            cy.get('#signupEmail').should('be.visible');
        });
        
        it('Field "Password" should be visible', () => {
            cy.get('#signupPassword').prev().should('have.text', 'Password');
            cy.get('#signupPassword').should('be.visible');
        });
        
        it('Field "Re-enter password" should be visible', () => {
            cy.get('#signupRepeatPassword').prev().should('have.text', 'Re-enter password');
            cy.get('#signupRepeatPassword').should('be.visible');
        });
        
        it('Button [Register] should be visible', () => {
            cy.get('.modal-footer button').should('have.text', 'Register');
        });

    });

    describe('Field "Name"', () => {
       
        it('Unfocus empty field "Name" should show "Name is required" error', () => {
            cy.get('#signupName')
                .focus()
                .blur()
                .next()
                .should('have.text', 'Name is required');
        });
       
        it('Cyrillic letters in field "Name" should show "Name is invalid" error', () => {
            cy.get('#signupName')
                .type('Кирилиця')
                .blur()
                .next()
                .should('have.text', 'Name is invalid');
        });

        it('Numbers in field "Name" should show "Name is invalid" error', () => {
            cy.get('#signupName')
                .type('123')
                .blur()
                .next()
                .should('have.text', 'Name is invalid');
        });
       
        it('1 character in field "Name" should show "Name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupName')
                .type('Y')
                .blur()
                .next()
                .should('have.text', 'Name has to be from 2 to 20 characters long');
        });

        it('2 characters in field "Name" should NOT show "Name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupName')
                .type('YJ')
                .blur();

            cy.get('#signupName .invalid-feedback')
                .should('not.exist');
        });

        it('"Username" in field "Name" should NOT show "Name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupName')
                .type('Username')
                .blur();

            cy.get('#signupName .invalid-feedback')
                .should('not.exist');
        });
       
        it('20 characters "Name" should NOT show "Name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupName')
                .type('TwentyCharactersLong')
                .blur();

            cy.get('#signupName .invalid-feedback')
                .should('not.exist');
        });

        it('21 characters "Name" should show "Name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupName')
                .type('TwentyOneCharssssLong')
                .blur()
                .next()
                .should('have.text', 'Name has to be from 2 to 20 characters long');
        });

        it('Any error in field "Name" should be with red (rgb(220, 53, 69)) border', () => {
            cy.get('#signupName')
                .focus()
                .blur()
                .should('have.css', 'border-color', 'rgb(220, 53, 69)')
        });
        
    });

    describe('Field "Last name"', () => {
       
        it('Unfocus empty field "Last name" should show "Last name is required" error', () => {
            cy.get('#signupLastName')
                .focus()
                .blur()
                .next()
                .should('have.text', 'Last name is required');
        });
       
        it('Cyrillic letters in field "Last name" should show "Last name is invalid" error', () => {
            cy.get('#signupLastName')
                .type('Кирилиця')
                .blur()
                .next()
                .should('have.text', 'Last name is invalid');
        });

        it('Numbers in field "Last name" should show "Last name is invalid" error', () => {
            cy.get('#signupLastName')
                .type('123')
                .blur()
                .next()
                .should('have.text', 'Last name is invalid');
        });
       
        it('1 character in field "Last name" should show "Last name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupLastName')
                .type('Y')
                .blur()
                .next()
                .should('have.text', 'Last name has to be from 2 to 20 characters long');
        });

        it('2 characters in field "Last name" should NOT show "Last name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupLastName')
                .type('YJ')
                .blur();

            cy.get('#signupLastName .invalid-feedback')
                .should('not.exist');
        });

        it('"Lastname" in field "Last name" should NOT show "Last name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupLastName')
                .type('Lastname')
                .blur();

            cy.get('#signupLastName .invalid-feedback')
                .should('not.exist');
        });
       
        it('20 characters "Last name" should NOT show "Last name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupLastName')
                .type('TwentyCharactersLong')
                .blur();

            cy.get('#signupLastName .invalid-feedback')
                .should('not.exist');
        });

        it('21 characters "Last name" should show "Last name has to be from 2 to 20 characters long" error', () => {
            cy.get('#signupLastName')
                .type('TwentyOneCharssssLong')
                .blur()
                .next()
                .should('have.text', 'Last name has to be from 2 to 20 characters long');
        });

        it('Any error in field "Last name" should be with red (rgb(220, 53, 69)) border', () => {
            cy.get('#signupLastName')
                .focus()
                .blur()
                .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

    });

    describe('Field "Email"', () => {
       
        it('Unfocus empty field "Email" should show "Email is required" error', () => {
            cy.get('#signupEmail')
                .focus()
                .blur()
                .next()
                .should('have.text', 'Email required');
        });

        it('Any error in field "Email" should be with red (rgb(220, 53, 69)) border', () => {
            cy.get('#signupEmail')
                .focus()
                .blur()
                .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        describe('Field "Email" with VALID inputs', () => {
            
            it('"user@example.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user@example.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            
            it('"john.doe123@company.org" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('john.doe123@company.org');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"jane_doe@example.co.uk" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('jane_doe@example.co.uk');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"first.last@subdomain.example.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('first.last@subdomain.example.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"user1234@domain.io" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user1234@domain.io');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"user@domain.edu" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user@domain.edu');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"name.surname@domain.travel" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('name.surname@domain.travel');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"contact@subdomain.domain.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('contact@subdomain.domain.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"test.email+filter@example.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('test.email+filter@example.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"user.name@domain1234.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user.name@domain1234.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"valid_email@domain.pro" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('valid_email@domain.pro');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });

            it('"info@domain.xyz" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('info@domain.xyz');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            
            it('"user123@[192.168.1.1]" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user123@[192.168.1.1]');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            
            it('"_______@domain.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('_______@domain.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            
            it('"user123@email.co.uk" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user123@email.co.uk');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            
            it('"user_name1234@email-provider.net" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('user_name1234@email-provider.net');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            
            it('"info@sub.domain.com" should NOT show "Email is incorrect" error', () => {
                cy.get('#signupEmail')
                    .type('info@sub.domain.com');

                cy.get('#signupEmail .invalid-feedback')
                    .should('not.exist');
            });
            

        });

        describe('Field "Email" with INVALID inputs', () => {
            
            it('"user@domain" should show "Email is incorrect" error - missing domain extension like .com or .org', () => {
                cy.get('#signupEmail')
                    .type('user@domain')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@.com" should show "Email is incorrect" error - domain part starts with a dot', () => {
                cy.get('#signupEmail')
                    .type('user@.com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"@domain.com" should show "Email is incorrect" error - missing local part before the @', () => {
                cy.get('#signupEmail')
                    .type('@domain.com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@domain@domain.com" should show "Email is incorrect" error - two @ symbols', () => {
                cy.get('#signupEmail')
                    .type('user@domain@domain.com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@com" should show "Email is incorrect" error - missing dot before domain', () => {
                cy.get('#signupEmail')
                    .type('user@com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@domain,com" should show "Email is incorrect" error - comma instead of dot', () => {
                cy.get('#signupEmail')
                    .type('user@domain,com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@domain..com" should show "Email is incorrect" error - consecutive dots in domain', () => {
                cy.get('#signupEmail')
                    .type('user@domain..com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@domain#com" should show "Email is incorrect" error - hash symbol is not allowed', () => {
                cy.get('#signupEmail')
                    .type('user@domain#com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@domain!com" should show "Email is incorrect" error - exclamation mark is not allowed', () => {
                cy.get('#signupEmail')
                    .type('user@domain!com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@subdomain@domain.com" should show "Email is incorrect" error - extra @ in subdomain', () => {
                cy.get('#signupEmail')
                    .type('user@subdomain@domain.com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"userdomain.com" should show "Email is incorrect" error - missing @', () => {
                cy.get('#signupEmail')
                    .type('userdomain.com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user name@domain.com" should show "Email is incorrect" error - whitespace', () => {
                cy.get('#signupEmail')
                    .type('user name@domain.com')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@domain.c" should show "Email is incorrect" error - TLD (Top-Level Domain) too short, must be at least 2 characters', () => {
                cy.get('#signupEmail')
                    .type('user@domain.c')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user@invalid-tld.123" should show "Email is incorrect" error - the top-level domain (.123) is not a valid TLD according to established standards', () => {
                cy.get('#signupEmail')
                    .type('user@invalid-tld.123')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });
            
            it('"user&name@email-provider.net" should show "Email is incorrect" error - contains an invalid character (&) in the local part', () => {
                cy.get('#signupEmail')
                    .type('user&name@email-provider.net')
                    .blur()
                    .next()
                    .should('have.text', 'Email is incorrect');
            });

        });

    });

    describe('Field "Password"', () => {
       
        it('Unfocus empty field "Password" should show "Password required" error', () => {
            cy.get('#signupPassword')
                .focus()
                .blur()
                .next()
                .should('have.text', 'Password required');
        });

        it('Any error in field "Password" should be with red (rgb(220, 53, 69)) border', () => {
            cy.get('#signupPassword')
                .focus()
                .blur()
                .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
       
        it('7 VALID characters in field "Password" should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
            cy.get('#signupPassword')
                .type('12345aA', { sensitive: true })
                .blur()
                .next()
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
       
        it('8 VALID characters in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
            cy.get('#signupPassword')
                .type('123456aA', { sensitive: true })
                .blur();

            cy.get('#signupLastName .invalid-feedback')
                .should('not.exist');
        });

        it('15 VALID characters in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
            cy.get('#signupPassword')
                .type('aA1234567890123', { sensitive: true })
                .blur();

            cy.get('#signupLastName .invalid-feedback')
                .should('not.exist');
        });

        it('16 VALID characters in field "Password" should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
            cy.get('#signupPassword')
                .type('aA12345678901234', { sensitive: true })
                .blur()
                .next()
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
       
        describe('Field "Password" with VALID inputs', () => {

            it('"CodeMaster2025" in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
                cy.get('#signupPassword')
                    .type('CodeMaster2025', { sensitive: true })
                    .blur();

                cy.get('#signupLastName .invalid-feedback')
                    .should('not.exist');
            });

            it('"MyP@ssword7" in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
                cy.get('#signupPassword')
                    .type('MyP@ssword7', { sensitive: true })
                    .blur();

                cy.get('#signupLastName .invalid-feedback')
                    .should('not.exist');
            });

            it('"vAlid1234" in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', () => {
                cy.get('#signupPassword')
                    .type('vAlid1234', { sensitive: true })
                    .blur();

                cy.get('#signupLastName .invalid-feedback')
                    .should('not.exist');
            });

        });
       
        describe('Field "Password" with INVALID inputs', () => {

            it('"password" in field "Password" should show error - no capital letter or number', () => {
                cy.get('#signupPassword')
                    .type('password', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            it('"PASSWORD123" in field "Password" should show error - no lowercase letter', () => {
                cy.get('#signupPassword')
                    .type('PASSWORD123', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            it('"12345678" in field "Password" should show error - no capital or lowercase letter', () => {
                cy.get('#signupPassword')
                    .type('12345678', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            it('"abcDEFGH" in field "Password" should show error - no number', () => {
                cy.get('#signupPassword')
                    .type('abcDEFGH', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            it('"1234abcd" in field "Password" should show error - no capital letter', () => {
                cy.get('#signupPassword')
                    .type('1234abcd', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            it('"A1b@" in field "Password" should show error - too short, less than 8 characters', () => {
                cy.get('#signupPassword')
                    .type('A1b@', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            it('"A1@defghijklmnopqrst" in field "Password" should show error - too long, more than 15 characters', () => {
                cy.get('#signupPassword')
                    .type('A1@defghijklmnopqrst', { sensitive: true })
                    .blur()
                    .next()
                    .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

        });

    });

    describe('Field "Re-enter password"', () => {
       
        it('Unfocus empty field "Re-enter password" should show "Re-enter password required" error', () => {
            cy.get('#signupRepeatPassword')
                .focus()
                .blur()
                .next()
                .should('have.text', 'Re-enter password required');
        });

        it('Any error in field "Re-enter password" should be with red (rgb(220, 53, 69)) border', () => {
            cy.get('#signupRepeatPassword')
                .focus()
                .blur()
                .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Same valid inputs in "Password" and "Re-enter password" should NOT show "Passwords do not match" error', () => {
            cy.get('#signupPassword')
                .type('123456aA', { sensitive: true });

            cy.get('#signupRepeatPassword')
                .type('123456aA', { sensitive: true });

            cy.get('#signupRepeatPassword .invalid-feedback')
                .should('not.exist');
        });

        it('Different valid inputs in "Password" and "Re-enter password" should show "Passwords do not match" error', () => {
            cy.get('#signupPassword')
                .type('123456aA', { sensitive: true });

            cy.get('#signupRepeatPassword')
                .type('123456aAbB', { sensitive: true })
                .blur()
                .next()
                .should('have.text', 'Passwords do not match');
        });

    });

    describe('Button [Register]', () => {
       
        it('Button [Register] should be disabled by default', () => {
            cy.get('.modal-footer button')
                .should('be.disabled');
        });
       
        it('Button [Register] should be disabled with INVALID data in any field', () => {
            cy.get('#signupName')
                .type('Username');

            cy.get('#signupLastName')
                .type('Lastname');

            cy.get('#signupEmail')
                .type(validEmail);

            cy.get('#signupPassword')
                .type(validPassword, { sensitive: true });

            cy.get('#signupRepeatPassword')
              .type(validPassword + '123', { sensitive: true });

            cy.get('.modal-footer button')
                .should('be.disabled');
        });

        it('Button [Register] should be enabled with VALID data in all fields', () => {
            cy.get('#signupName')
                .type('Username');

            cy.get('#signupLastName')
                .type('Lastname');

            cy.get('#signupEmail')
                .type(validEmail);

            cy.get('#signupPassword')
                .type(validPassword, { sensitive: true });

            cy.get('#signupRepeatPassword')
                .type(validPassword, { sensitive: true });

            cy.get('.modal-footer button')
                .should('be.enabled');
        });

        describe('User should be created with valid data', () => {
            
            it('Click on button [Register] with VALID data in all fields should create new user', () => {
                cy.get('#signupName')
                    .type('Username');
    
                cy.get('#signupLastName')
                    .type('Lastname');
    
                cy.get('#signupEmail')
                    .type(validEmail);
    
                cy.get('#signupPassword')
                    .type(validPassword, { sensitive: true });
    
                cy.get('#signupRepeatPassword')
                    .type(validPassword, { sensitive: true });
    
                cy.get('.modal-footer button')
                    .click();
    
                cy.get('.alert-list')
                    .should('have.text', 'Registration complete');
                
                cy.get('#userNavDropdown')
                    .should('have.text', ' My profile ');
                
                cy.url().should('include', '/panel/garage'); 
    
            });

        });
       
    });

});

describe('Login tests', () => {

    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }); //ingnore fetch and xhr responces
    });
    
    it('Login should be success with valid data', () => {
        cy.login(validEmail, validPassword);

        cy.get('.alert-list')
            .should('have.text', 'You have been successfully logged in');
                
        cy.get('#userNavDropdown')
            .should('have.text', ' My profile ');
                
        cy.url().should('include', '/panel/garage'); 
    });

});
