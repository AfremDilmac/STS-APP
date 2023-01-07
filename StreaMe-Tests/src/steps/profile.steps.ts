import { defineFeature, loadFeature } from "jest-cucumber";
import { ProfileValidator } from "../components/profile-validator";

const feature = loadFeature('src/features/profile.feature')


defineFeature(feature, test => {
    let profileValidator = new ProfileValidator();
    
    beforeEach(() => {
        profileValidator = new ProfileValidator();
    })

    test('Upload a user profile image', ({given, when, then}) =>{

        given('I am in the StreaME application', () =>{
            //StreaME home page
        })

        when('i upload a user profile image and click on upload', () => {
           profileValidator.UpdateImage("image url");
        });

        then('i should be able to see my new profile image', () => {
           profileValidator.ShowProfile("Afrem");
        });
    });

    test('Update a user username', ({given, when, then}) =>{

        given('I am in the streaME application', () =>{
            //StreaME home page
        })

        when('i enter a new username and click on Update', () => {
            profileValidator.ChangeUsername("Afrem");
        });

        then('i should be able to see my new username', () => {
            profileValidator.ShowProfile("Afrem");
        });
    });

    test('Update preferences for messaging between users', ({given, when, then}) =>{

        given('I am in the streaME application', () =>{
            //StreaME home page
        })

        when('i select the option everybody', () =>{
            /*
            0 = only friends
            1 = same studies
            2 = everybody
            */ 
            profileValidator.UpdatePreferences(2);
        });

        then('everbody should be able to message me', () =>{
           profileValidator.ShowProfile("Afrem");
        });
    });

    test('Update gender', ({given, when, then}) =>{

        given('I am in the streaME application', () =>{
            //StreaME home page
        })

        when('i choose a gender and click on Update', () => {
            profileValidator.UpdateGender("male");
        });

        then('i should be able to see my new gender', () => {
           profileValidator.ShowProfile("Afrem");
        });
    });
});
