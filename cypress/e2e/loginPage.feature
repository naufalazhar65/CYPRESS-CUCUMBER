Feature: Login Page Functionality
    Background:
        Given the user is on the login page

    Scenario: Verify Elements on LoginPage
        Then the user should see the username input field
        And the user should see the password input field
        And the user should see the login button
        And the user should see the "Forgotten Password" link

    Scenario: Login with Valid Credentials
        When the user enters valid login credentials
        And the user clicks the login button
        Then the user should be redirected to the dashboard

    Scenario: Login with Invalid Credentials
        When the user enters invalid login credentials
        And the user clicks the login button
        Then an error message should be displayed
        And the user should not be redirected

    Scenario: Forgot Password Link
        When the user clicks on the "Forgotten Password" link
        Then the user should be on the password recovery page
        And the user should see the email input field
        And the user should see the submit button

    Scenario: Back to Login from Password Recovery
        When the user clicks on the "Forgotten Password" link
        When the user navigates back to the login page from the password recovery page
        Then the user should see the username input field
        And the user should see the password input field
        And the user should see the login button
        And the user should see the "Forgotten Password" link
