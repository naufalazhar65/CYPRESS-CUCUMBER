Feature: Edit User Profile

    Background:
        Given the user is logged in
        When the user navigates to the Edit User page


    Scenario: Navigate to Edit User Page
        Then the user should be on the Edit User page
        And the user should see the user details form

    Scenario: Edit User Profile
        When the user updates the user details with new information
        And the user submits the updated details
        Then a success message for profile update should be displayed
        And the user details should be updated

    Scenario: Edit User Profile with Invalid Information
        When the user updates the user details with invalid information
        And the user submits the updated details
        Then an error message for invalid information should be displayed
        And the user details should not be updated

    Scenario: Cancel Edit User Profile
        When the user navigates back without saving changes
        Then the user details should remain unchanged

