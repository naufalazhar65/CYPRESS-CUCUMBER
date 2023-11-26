Feature: Login and Logout

    Scenario Outline: User logs in with credentials
        Given the user is on the login page
        When the user logs in with "<username>" and "<password>"
        Then the user should be redirected to the Products page

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |


    Scenario Outline: User sees an error message for invalid credentials
        Given the user is on the login page
        When the user logs in with "<username>" and "<password>"
        Then an error message should be displayed

        Examples:
            | username | password |
            | user1    | invalidPass123  |


    Scenario Outline: User logs out after successful login
        Given the user is on the login page
        When the user logs in with "<username>" and "<password>"
        And the user logs out
        Then the user should be redirected to the Swag Labs homepage

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |

