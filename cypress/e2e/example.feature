Feature: Login to Application

    As a Valid User
    I want to Login into Application

    Scenario: Valid login
        Given I open google
        When I submit login
        Then Should see homepage