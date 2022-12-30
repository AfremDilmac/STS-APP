Feature: Logging in the application

    It should be possible to login with an existing username and password. If a user doesn't have an account these should be able to register with an email and password.

    Scenario: A user with a valid username and password can login
    Given i have a valid username and password  
    When i enter the valid username and password
    Then i should be logged in

    Scenario: A user with a valid username and wrong password
    Given i have a valid username and wrong password
    When i enter the valid username and wrong password
    Then i should not be able to login
    And i should be able to request a password change

    Scenario: A user wants to create a new account
    Given i have an email address
    When i create a new account
    And i enter a new password
    Then i should be able to login