var chai     = require('chai');
var expect   = chai.expect;

function go()
{
	return browser.setLocation('workouts');
}

function chooseSquat()
{
	return new Promise((success, failure)=>
	{
		return element.all(by.tagName('jxl-workout-card'))
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
	chooseSquat: chooseSquat,
	go: go
};