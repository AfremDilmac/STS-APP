import { defineFeature, loadFeature } from "jest-cucumber";
import { PasswordValidator } from "../components/password-validator";

const feature = loadFeature('src/features/logging-in.feature')


defineFeature(feature, test => {
    let passwordValidator = new PasswordValidator();
    let accessGranted = false;
    let accountCreated = false;

    beforeEach(() => {
        passwordValidator = new PasswordValidator();
    })

    test('A user with a valid email and password can login', ({given, when, then}) =>{

        given('I have a valid email and password', () =>{
            passwordValidator.setEmail('Afrem@mail.be');
            passwordValidator.setPassword('1234');
        })

        when('I enter the valid email and password', () => {
            accessGranted = passwordValidator.validatePassword('1234','Afrem@mail.be');
        });

        then('I should be logged in', () => {
            expect(accessGranted).toBe(true);
          });
    });

    test('A user with a valid email and wrong password', ({given, when, then, and}) =>{

        given('i have a valid email and wrong password', () =>{
            passwordValidator.setEmail('Afrem@mail.be');
            passwordValidator.setPassword('1234');
        })

        when('i enter the valid email and wrong password', () => {
            accessGranted = passwordValidator.validatePassword('1238','Afrem@mail.be');
        });

        then('i should not be able to login', () => {
            expect(accessGranted).toBe(false);
          });

        and('i should be able to request a password change', () =>{
            //Page definition

        });

    });

    test('A user wants to create a new account', ({given, when, and, then}) =>{

        given('i have an email address', () =>{
            passwordValidator.setEmail('test@testmail.be');
        })

        when('I enter my email address', () =>{
            passwordValidator.setEmail('test@testmail.be');
        });

        and('i enter a new password', () =>{
            passwordValidator.setPassword('1234');
        });

        then('i create a new account', () => {
            accountCreated = passwordValidator.createAccount('test@testmail.be', '1234');
            expect(accountCreated).toBe(true);
        });

        and('i should be able to login', () => {
            accessGranted = passwordValidator.validatePassword('1234','test@testmail.be');
            expect(accessGranted).toBe(true);
          });
    }
    );
});
