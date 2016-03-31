(function() {

angular.module('demo')
	.directive('jxlDemo', jxlDemo)

function jxlDemo()
{
	return {
        restrict: 'E',
        scope: {},
        transclude: false,
        templateUrl: "demo.directive.html",
        controller: 'DemoController',
        controllerAs: 'vm'
    };
}

})();