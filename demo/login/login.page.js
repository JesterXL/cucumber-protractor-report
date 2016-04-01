var chai     = require('chai');
var expect   = chai.expect;

function go()
{
	return browser.get('http://localhost:3001/#/login');
}

function setUsername(value)
{
	return new Promise((success, failure)=>
	{
		return element.all(by.id('username'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		.sendKeys(value)
		.then(()=>
		{
			success();
		});
	});
}

function setPassword(value)
{
	return new Promise((success, failure)=>
	{
		return element.all(by.id('password'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		.sendKeys(value)
		.then(()=>
		{
			success();
		});
	});
}

function clickLogin()
{
	return new Promise((success, failure)=>
	{
		return element.all(by.css('.mdl-button'))
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

function hasErrorMessage()
{
	return new Promise((success, failure)=>
	{
		return element.all(by.tagName('h6'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		.getText()
		.then((text)=>
		{
			if(text == "For now, please use username of 'test' and password of 'test'.")
			{
				success();
			}
			else
			{
				failure();
			}
		});
	});
}

module.exports = {
	setUsername: setUsername,
	setPassword: setPassword,
	clickLogin: clickLogin,
	hasErrorMessage: hasErrorMessage,
	go: go
};