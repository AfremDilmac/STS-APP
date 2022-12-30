Feature: Add person to groupchat

    It should be possible to lookup an user and add him to an existing groupchat. After adding the user, his username should appear on screen.  

    Scenario: Add one user
    Given I am in the StreaME application
    And I am in a groupchat
    When I search another existing user by username
    Then i should see the user's profile
    And the user should be added to the groupchat

    