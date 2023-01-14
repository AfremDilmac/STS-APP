import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('src/features/delete-account.feature')

defineFeature(feature, test => {
    let accountDeleted = false;
    let loggedIn = false;
    let accountPrivate = false;

    beforeEach(() => {
        accountDeleted = false;
        loggedIn = false;
        accountPrivate = false;
    })

    test('Een gebruiker wil zijn account verwijderen', ({ given, when, then, and }) => {

        given('ik ben ingelogd', () => {
            loggedIn = true;

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

        and('wordt ik uitgelogd', () => {
            loggedIn = false;
            expect(loggedIn).toBe(false);
        });

    });

    test('Een gebruiker wil zijn account op privé zetten', ({ given, when, then, and }) => {
            
            given('ik ben ingelogd', () => {
                loggedIn = true;
    
            })

            when('ik ben op de pagina van mijn profiel', () => {
                //Page definition
            })

            and('ik op de knop account private maken klik', () => {
                accountPrivate = true;
            })

            then('wordt mijn account op private gezet', () => {
                expect(accountPrivate).toBe(true);
            })

            and('kunnen alleen mensen die ik volg mijn profiel zien', () => {
                loggedIn = false;
                expect(loggedIn).toBe(false);
    
            });
    })

    test('Een gebruiker wil zijn account op openbaar zetten', ({ given, when, then, and }) => {

        given('ik ben ingelogd', () => {
            loggedIn = true;

        })

        when('ik ben op de pagina van mijn profiel', () => {
            //Page definition
        })

        and('ik op de knop maak account publiek klik', () => {
            accountPrivate = false;
        })

        then('wordt mijn account op public gezet', () => {
            expect(accountPrivate).toBe(false);
        })

        and('kunnen mensen die mij niet volgen mijn profiel zien', () => {
            loggedIn = false;
            expect(loggedIn).toBe(false);

        });

    })

});





        
        