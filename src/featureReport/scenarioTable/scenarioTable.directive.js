(function() {

angular.module('featureReport')
	.directive('jxlScenarioTable', jxlScenarioTable)

function jxlScenarioTable()
{
	return {
        restrict: 'E',
        scope: {},
        transclude: false,
        templateUrl: "featureReport/scenarioTable/scenarioTable.directive.html",
        controller: 'ScenarioTableController',
        controllerAs: 'vm'
    };
}

})();