(function() {

angular.module('demo.workouts.exercise.setRep')
	.directive('jxlSetRep', jxlSetRep)

function jxlSetRep($window)
{
	console.log("jxlSetRep::constructor");
	function link(scope, element, attrs)
    {
    	_.forEach(document.querySelectorAll('.mdl-textfield'), function(txt)
    	{
    		$window.componentHandler.upgradeElement(txt);
    	});
    }

	return {
        restrict: 'E',
        scope: {
        	exercise: '=',
        	set: '='
        },
        link: link,
        transclude: false,
        templateUrl: "workouts/exercise/setRep/setRep.directive.html",
        controller: 'SetRepController',
        controllerAs: 'vm',
        bindToController: true
    };
}

})();