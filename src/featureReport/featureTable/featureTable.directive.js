(function() {

angular
	.module('featureReport')
	.directive('jxlFeatureTable', jxlFeatureTable);

function jxlFeatureTable()
{
	return {
        restrict: 'E',
        scope: {},
        transclude: false,
        templateUrl: "./featureReport/featureTable/featureTable.directive.html",
        controller: 'FeaturesTableController',
        controllerAs: 'vm'
    };
}

})();
