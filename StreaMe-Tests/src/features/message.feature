Feature: Opening a conversation

    It should be possible to look an existing user up. Just after looking him up you should see a profile summary and it should be possible to open the conversation.

    Scenario: Message 1 user.
    Given I am in the StreaME application
    When i search for another existing user by username 
    Then i should see the user’s profile  
    And i should be able to see all of the existing chat messages
    And I should be able to send a message. 

    Scenario: Opening a non existing conversation.
    Given I am in the StreaME application  
    When i search for another non existing user by username
    Then i should see no user profile

    Scenario: Opening a conversation
    Given I am in the StreaME application
    When i search for another existing user by username 
    Then i should see the user’s profile  
    And i should see all of the existing chat messages between me and users