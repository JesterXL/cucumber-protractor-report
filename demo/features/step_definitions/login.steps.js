var chai = require('chai');
chai.should();
var expect = chai.expect;
var loginPage = require('../../login/login.page');

module.exports = function()
{

	this.When(/^I go to login$/, function ()
	{
		return loginPage.go();
	});

	this.Then(/^I use "([^"]*)" as the username and "([^"]*)" as the password$/, function (username, password)
	{
		return loginPage.setUsername(username)
		.then(()=>
		{
			return loginPage.setPassword(password);
		})
		.then(()=>
		{
			return loginPage.clickLogin();
		});
	});

	this.Then(/^I should see my workout$/, function (callback)
	{
	//	callback.pending();
	//	return;
		element.all(by.tagName('jxl-workout-card'))
		.then((results)=>
		{
			expect(results).to.have.lengthOf(3);
			callback();
		});
	});

	this.Then(/^I should see a login failure message$/, function ()
	{
		return loginPage.hasErrorMessage();
	});

};
