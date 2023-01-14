import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('src/features/delete-account.feature')

defineFeature(feature, test => {
    let accountDeleted = false;
    let loggidIn = false;
    let accountPrivate = false;

    beforeEach(() => {
        accountDeleted = false;
        loggidIn = false;
        accountPrivate = false;
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

    test('A user wants to set his account to private', ({ given, when, then, and }) => {
            
            given('ik ben ingelogd', () => {
                loggidIn = true;
    
            })

            when('ik ben op de pagina van mijn profiel', () => {
                //Page definition
            })

            and('ik op de knop maak account privé klik', () => {
                accountPrivate = true;
            })

            then('wordt mijn account privé', () => {
                expect(accountPrivate).toBe(true);
            })

            and('word ik uitgelogd', () => {
                expect(loggidIn).toBe(false);
    
            });
    })

    test('A user wants to set his account to public', ({ given, when, then, and }) => {

        given('ik ben ingelogd', () => {
            loggidIn = true;

        })

        when('ik ben op de pagina van mijn profiel', () => {
            //Page definition
        })

        and('ik op de knop maak account publiek klik', () => {
            accountPrivate = false;
        })

        then('wordt mijn account publiek', () => {
            expect(accountPrivate).toBe(false);
        })

        and('word ik uitgelogd', () => {
            expect(loggidIn).toBe(false);

        });

    })

});





        
        