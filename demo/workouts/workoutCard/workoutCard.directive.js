(function() {

angular.module('demo.workouts.workoutCard')
	.directive('jxlWorkoutCard', jxlWorkoutCard)

function jxlWorkoutCard($window)
{
	console.log("jxlWorkoutCard::constructor");
	function link(scope, element, attrs)
    {
    	_.forEach(document.querySelectorAll('.mdl-card'), function(txt)
    	{
    		$window.componentHandler.upgradeElement(txt);
    	});
		
    }

	return {
        restrict: 'E',
        scope: {
        	exercise: '='
        },
        link: link,
        transclude: false,
        templateUrl: "workouts/workoutCard/workoutCard.directive.html",
        controller: 'WorkoutCardController',
        controllerAs: 'vm',
        bindToController: true
    };
}

})();