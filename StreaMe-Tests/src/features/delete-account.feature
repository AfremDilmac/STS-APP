Feature: Account aanpassen

als gebruiker wil ik mijn account kunnen verwijderen zodat ik niet meer op de applicatie kan. 

    Scenario: Een gebruiker wil zijn account verwijderen
    Given ik ben ingelogd
    When ik ben op de pagina van mijn profiel
    And ik op de knop verwijder account klik
    Then wordt mijn account verwijderd
    And wordt ik uitgelogd


    Scenario: Een gebruiker wil zijn account op privé zetten
    Given ik ben ingelogd
    When ik ben op de pagina van mijn profiel
    And ik op de knop account private maken klik
    Then wordt mijn account op private gezet
    And kunnen alleen mensen die ik volg mijn profiel zien

    Scenario: Een gebruiker wil zijn account op openbaar zetten
    Given ik ben ingelogd
    When ik ben op de pagina van mijn profiel
    And ik op de knop maak account publiek klik
    Then wordt mijn account op public gezet
    And kunnen mensen die mij niet volgen mijn profiel zien
