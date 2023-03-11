Feature: Login
  I as an user
  Would like to Login
  To access the system
  

  Scenario: Login with success
    Given I see the email field
    And I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
