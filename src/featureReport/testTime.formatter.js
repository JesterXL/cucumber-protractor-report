(function() {

var testTimeFormatter = _.memoize(_testTimeFormatter);

angular
	.module('featureReport')
	.filter('testTimeFormatter', testTimeFormatter);

function _testTimeFormatter()
{
	return function(input)
	{
		// return moment(input).format("SS") + ' seconds';
		return input;
	};
}

})();