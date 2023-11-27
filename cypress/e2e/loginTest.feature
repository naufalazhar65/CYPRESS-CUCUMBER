Feature: User Login

    Background:
        Given the user is on the login page

    Scenario Outline: Successful login
        When the user logs in with "<email>" and "<password>"
        And the user clicks the login button
        Then the user should be redirected to the dashboard

        Examples:
            | email                   | password  |
            | naufalazhar65@gmail.com | naufal354 |

    Scenario Outline: Login with invalid credentials
        When the user logs in with "<email>" and "<password>"
        And the user clicks the login button
        Then an error message should be displayed

        Examples:
            | email           | password        |
            | invalidUsername | invalidPassword |

    Scenario: Forgot password functionality
        When the user clicks on the "Forgotten Password" link
        And provides a valid email for password recovery
        And submits the password recovery form
        Then a success message for password recovery should be displayed
