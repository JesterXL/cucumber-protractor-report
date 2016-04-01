Feature: As a user I want to login so that I can see my workouts for today.

	Scenario: test login works
		When I go to login
		Then I use "test" as the username and "test" as the password
		Then I should see my workout

	Scenario: cow login fails
		When I go to login
		Then I use "cow" as the username and "cow" as the password
		Then I should see a login failure message

