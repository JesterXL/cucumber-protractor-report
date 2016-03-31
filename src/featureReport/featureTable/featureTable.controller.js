(function() {

angular
	.module('featureReport')
	.controller('FeaturesTableController', FeaturesTableController)

function FeaturesTableController($state, FeaturesFactory)
{
	var vm = this;
	vm.features = FeaturesFactory.features;

	vm.showFeature = function(feature)
	{
		$state.go('scenarios', {id: feature.uniqueID});
	};
}

})();