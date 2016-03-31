Feature: Login

	Scenario: test login works
		When I go to login
		Then I use "test" as the username and "test" as the password
		Then I should see my workout
