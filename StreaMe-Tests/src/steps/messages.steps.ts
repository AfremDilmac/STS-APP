import { defineFeature, loadFeature } from "jest-cucumber";
import { MessageValidator } from "../components/message-validator";

const feature = loadFeature('src/features/message.feature')


defineFeature(feature, test => {
    let messageValidator = new MessageValidator();
    
    beforeEach(() => {
        messageValidator = new MessageValidator();
    })

    test('Message 1 user', ({given, when, then, and}) =>{

        given('I am in the StreaME application', () =>{
            //StreaME home page
        })

        when('I search for another existing user by username', () => {
            messageValidator.searchUser("Afrem")
        });

        then('I should see the user’s profile', () => {
            messageValidator.userProfile('Afrem');
        });

        and('I should be able to see all of the existing chat messages', () =>{
            messageValidator.userChat();
        });

        and('I should be able to send a message', () =>{
            messageValidator.sendChat("Test message");
        });

    });

    test('Opening a non existing conversation', ({given, when, then}) =>{

        given('I am in the StreaME application', () =>{
            //StreaME home page
        })

        when('I search for another non existing user by username', () => {
            expect(messageValidator.searchUser("")).toBe(false);
        });

        then('I should see no user profile', () => {
            messageValidator.userProfile('');
        });
    });

    test('Opening a conversation', ({given, when, and, then}) =>{

        given('I am in the StreaME application', () =>{
            //StreaME home page
        })

        when('I search for another existing user by username', () =>{
            messageValidator.searchUser("Afrem")
        });

        then('I should see the user’s profile', () =>{
            messageValidator.userProfile('Afrem');
        });

        and('I should see all of the existing chat messages between me and users', () => {
            messageValidator.userChat();
        });
    }
    );
});
