Feature: Account verwijderen

als gebruiker wil ik mijn account kunnen verwijderen zodat ik niet meer op de applicatie kan. 

    Scenario: Account verwijderen
    Given ik ben ingelogd
    When ik ben op de pagina van mijn profiel
    And ik op de knop verwijder account klik
    Then wordt mijn account verwijderd
    And wordt ik uitgelogd
