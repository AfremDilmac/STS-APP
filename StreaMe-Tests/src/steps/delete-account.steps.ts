import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('src/features/delete-account.feature')

defineFeature(feature, test => {
    let accountDeleted = false;
    let loggidIn = false;

    beforeEach(() => {
        accountDeleted = false;
        loggidIn = false;
    })

    test('A user wants to delete his account', ({ given, when, then, and }) => {

        given('ik ben ingelogd', () => {
            loggidIn = true;

        })
        
        when('ik ben op de pagina van mijn profiel', () => {
            //Page definition
        })

        and('ik op de knop verwijder account klik', () => {
            accountDeleted = true;
        });

        then('wordt mijn account verwijderd', () => {
            expect(accountDeleted).toBe(true);
        });

        and('word ik uitgelogd', () => {
            expect(loggidIn).toBe(false);

        });

    });
});





        
        