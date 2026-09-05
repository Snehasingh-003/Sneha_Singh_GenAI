# Feature: Student Registration Form

#   Scenario: Successful student registration with valid details
#     Given the user is on the Student Registration page
#     When the user enters name "Sneha Singh"
#     And the user enters email "sneha@test.com"
#     And the user selects gender "Female"
#     And the user enters mobile number "9876543210"
#     And the user enters date of birth "10 August 2000"
#     And the user enters subject "Computer Science"
#     And the user selects hobby "Reading"
#     And the user enters address "Bangalore Karnataka"
#     And the user selects state "NCR"
#     And the user selects city "Agra"
#     And the user clicks the Submit button
#     Then the student registration should be completed successfully

#   Scenario: Unsuccessful student registration with missing mandatory fields
#     Given the user is on the Student Registration page
#     When the user leaves name blank
#     And the user leaves email blank
#     And the user clicks the Submit button
#     Then validation messages should be displayed













Feature: Student Registration Form

Scenario Outline: Successful student registration with valid details

  Given the user is on the Student Registration page
  When the user enters name "<name>"
  And the user enters email "<email>"
  And the user selects gender "<gender>"
  And the user enters mobile number "<mobile>"
  And the user enters date of birth "<dob>"
  And the user enters subject "<subject>"
  And the user selects hobby "<hobby>"
  And the user enters address "<address>"
  And the user selects state "<state>"
  And the user selects city "<city>"
  And the user clicks the Submit button
  Then the student registration should be completed successfully

Examples:
| name         | email            | gender | mobile     | dob            | subject          | hobby   | address   | state | city  |
| Sneha Singh  | sneha@test.com   | Female | 9876543210 | 2000-01-12     | Computer Science | Reading | Bangalore | NCR   | Agra  |
| John David   | john@test.com    | Male   | 9988776655 | 1999-04-15     | Maths            | Sports  | Chennai   | NCR   | Lucknow |







Scenario Outline: Verify registration validation for invalid data

    Given the user is on the Student Registration page
    When the user registers with "<name>" "<email>" "<gender>" "<mobile>" "<dob>" "<subject>" "<hobby>" "<address>" "<state>" "<city>"
    And the user clicks the Submit button
    Then validation messages should be displayed

Examples:
    | name        | email            | gender | mobile     | dob         | subject          | hobby   | address             | state | city |
    |             | sneha@test.com   | Female | 9876543210 | 2000-03-23 | Computer Science | Reading | Bangalore Karnataka | NCR   | Agra |
    | Sneha Singh |                  | Female | 9876543210 | 2002-06-19 | Computer Science | Reading | Bangalore Karnataka | NCR   | Agra |
   