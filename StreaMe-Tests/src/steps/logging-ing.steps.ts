import { defineFeature, loadFeature } from "jest-cucumber";
import { PasswordValidator } from "../components/password-validator";

const feature = loadFeature('src/features/logging-in.feature')


defineFeature(feature, test => {
    let passwordValidator = new PasswordValidator();
    let accessGranted = false;

    beforeEach(() => {
        passwordValidator = new PasswordValidator();
    })

    test('A user with a valid username and password can login', ({given, when, then}) =>{

        given('I have a valid username and password', () =>{
            passwordValidator.setUsername('Afrem');
            passwordValidator.setPassword('1234');
        })

        when('I enter the valid username and password', () => {
            accessGranted = passwordValidator.validatePassword('1234','Afrem');
        });

        then('I should be logged in', () => {
            expect(accessGranted).toBe(true);
          });
    });

    test('A user with a valid username and wrong password', ({given, when, then, and}) =>{

        given('i have a valid username and wrong password', () =>{
            passwordValidator.setUsername('Afrem');
            passwordValidator.setPassword('1234');
        })

        when('i enter the valid username and wrong password', () => {
            accessGranted = passwordValidator.validatePassword('1238','Afrem');
        });

        then('i should not be able to login', () => {
            expect(accessGranted).toBe(false);
          });

        and('i should be able to request a password change', () =>{
            //Page definition
        });

    });

});