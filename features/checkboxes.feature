Feature: The Internet Guinea Pig Website

  @CHECKBOXES
  Scenario Outline: As a user, I can target the checkboxes
    Given I am on the Checkboxes page
    When I select checkbox <num>
    Then The checkbox should be checked
      Examples:
      | num |
      |   1 |
      |   2 |
