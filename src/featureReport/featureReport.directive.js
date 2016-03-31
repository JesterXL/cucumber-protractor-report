(function() {

angular.module('featureReport')
	.directive('jxlFeatureReport', jxlFeatureReport)

function jxlFeatureReport()
{
	return {
        restrict: 'E',
        scope: {},
        transclude: false,
        templateUrl: "featureReport/featureReport.directive.html",
        controller: 'FeatureReportController',
        controllerAs: 'vm'
    };
}

})();