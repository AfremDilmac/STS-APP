Feature: Updating a profile

    It should be able to update a user profile.

    Scenario: Upload a user profile image
    Given I am in the StreaME application
    When i upload a user profile image and click on upload
    Then i should be able to see my new profile image

    Scenario: Update a user username
    Given I am in the streaME application
    When i enter a new username and click on Update
    Then i should be able to see my new username

    Scenario: Update preferences for messaging between users
    Given I am in the streaME application
    When i select the option everybody
    Then everbody should be able to message me

    Scenario: Update gender
    Given I am in the streaME application
    When i choose a gender and click on Update
    Then i should be able to see my new gender