Feature: Login Feature

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    And click the login button
    Then the user should be redirected to the dashboard page

  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters invalid username and password
    And click the login button
    Then an error message should be displayed indicating invalid credentials


  @smoke
  Scenario Outline: Verify login with multiple users 
  Given the user is on the login page
  When User enters "<username>" and "<password>"
  Then an error message should be displayed indicating invalid credentials


Examples:

    | username                 | password      |
    | standard_user             | secret_sauces |
    | problem_user              | secret_sauces  |




@smoke
  Scenario Outline: Verify login with multiple users
  Given the user is on the login page
  When User enters "<username>" and "<password>"
  Then user should login successfully 

Examples:

    | username                 | password      |
    | standard_user             | secret_sauce |
    | problem_user              | secret_sauce  |
