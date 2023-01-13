import { defineFeature, loadFeature } from "jest-cucumber";
import { GroupValidator } from "../components/group-validator";

const feature = loadFeature('src/features/group.feature')


defineFeature(feature, test => {
    let groupValidator = new GroupValidator();
    let accessGranted = false;
    let accountCreated = false;

    beforeEach(() => {
        groupValidator = new GroupValidator();
    })

    test('Add one user', ({given, when, then, and}) =>{

        given('I am in the StreaME application', () =>{
            //StreaME home page
           
        })

        and('I am in a groupchat', () => {
            //Groupchat page
        });

        when('I search another existing user by username', () => {
            groupValidator.SearchUser('Afrem');   
        });

        then('i should see the users profile', () => {
            groupValidator.ShowUser('Afrem')
        })

        and('the user should be added to the groupchat', () => {
            groupValidator.AddUser('Afrem');
        })
    });
  
});
