(function() {

angular
	.module('featureReport')
	.controller('FeatureReportController', FeatureReportController)

function FeatureReportController($scope, $state, $rootScope, FeaturesFactory)
{
	var vm = this;
	vm.title = "Feature Report";
	vm.subTitle = "Scenarios";
	vm.main = true;

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams)
	{
		console.log("toState:", toState);
		if(toState && toState.name === 'features')
		{
			vm.main = true;
		}
		else if(toState && toState.name === 'scenarios')
		{
			// vm.title = FeaturesFactory.getFeatureFromID(toParams.id).name;
			vm.main = false;
		}
	});
}

})();