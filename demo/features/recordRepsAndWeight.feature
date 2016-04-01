Feature: As a user I want to record my reps amount and weight so that I can keep track of my powerlifting progression.

	Scenario: record squat reps and weight
		When I go to my workout for today
		And I choose squat
		Then I can enter "3" reps
		And I can enter "380" pounds
		Then I can check completed