var chai     = require('chai');
var expect   = chai.expect;

function go()
{
	return browser.setLocation('workouts');
}

function inputReps(reps)
{
	return new Promise((success, failure)=>
	{
		return element.all(by.model('vm.set.reps'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		.clear()
		.sendKeys(reps)
		.then(()=>
		{
			success();
		});
	});
}

function inputWeight(weight)
{
	return new Promise((success, failure)=>
	{
		return element.all(by.model('vm.set.weight'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		.clear()
		.sendKeys(weight)
		.then(()=>
		{
			success();
		});
	});
}

function markCompleted()
{
	return new Promise((success, failure)=>
	{
		return element.all(by.model('vm.workoutComplete'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		.click()
		.then(()=>
		{
			success();
		});
	});
}


module.exports = {
	inputReps: inputReps,
	inputWeight: inputWeight,
	markCompleted: markCompleted,
	go: go
};