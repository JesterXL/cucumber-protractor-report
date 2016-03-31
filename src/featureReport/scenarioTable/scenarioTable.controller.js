(function() {

angular
	.module('featureReport')
	.controller('ScenarioTableController', ScenarioTableController)

function ScenarioTableController($stateParams, FeaturesFactory)
{
	var vm = this;
	vm.feature = FeaturesFactory.getFeatureFromID($stateParams.id);
}

})();