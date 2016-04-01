var chai = require('chai');
chai.should();
var expect = chai.expect;
var loginPage = require('../../login/login.page');
var workoutsPage = require('../../workouts/workouts.page');
var exercisePage = require('../../workouts/exercise/exercise.page');

module.exports = function()
{

	this.When(/^I go to my workout for today$/, function (callback)
	{
		loginPage.go()
		.then(()=>
		{
			return loginPage.setUsername("test")
			.then(()=>
			{
				return loginPage.setPassword("test");
			})
			.then(()=>
			{
				return loginPage.clickLogin();
			});
		})
		.then(()=>
		{
			callback();
		})
	});

	this.When(/^I choose squat$/, function ()
	{
		return workoutsPage.chooseSquat();
	});

	this.Then(/^I can enter "([^"]*)" reps$/, function (reps)
	{
		return exercisePage.inputReps(reps);  
	});

	this.Then(/^I can enter "([^"]*)" pounds$/, function (weight)
	{
		return exercisePage.inputWeight(weight);
	});

	this.Then(/^I can check completed$/, function ()
	{
		return exercisePage.markCompleted();
	});


};
