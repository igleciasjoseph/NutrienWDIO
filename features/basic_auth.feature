Feature: The Internet Guinea Pig Website

  @BASIC_AUTH
  Scenario Outline: As a user, I can log into the secure area
    Given I use basic auth to login with <username> and <password>
    Then I should see a paragraph saying <message>

    Examples:
      | username | password | message                                                |
      | admin    | admin    | Congratulations! You must have the proper credentials. |
      # | foo      | bar      | not authorized                                         |

  @BASIC_AUTH
  Scenario Outline: API test for basic auth
    When I API test basic auth with <username> and <password>
    Then the API response should have status <status> and contain <message>

    Examples:
      | username | password | status | message                                                |
      | admin    | admin    | 200    | Congratulations! You must have the proper credentials. |
      | foo      | bar      | 401    | Not authorized                                         |
