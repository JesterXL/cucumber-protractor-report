(function() {

angular
	.module('demo')
	.controller('DemoController', DemoController)

function DemoController($scope, $state, $rootScope)
{
	console.log("DemoController::constructor");
	var vm = this;
	vm.title = "Workout";
	vm.subTitle = "---";
	vm.main = true;

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams)
	{
		updateTitleFromState(toState);
	});

	function updateTitleFromState(toState)
	{
		console.log("toState:", toState);
		if(toState && toState.name === 'workouts')
		{
			vm.title = "Workouts";
			vm.main = true;
		}
		else if(toState && toState.name === 'login')
		{
			vm.title = "Login";
			vm.main = true;
		}
		else if(toState && toState.name === 'exercise')
		{
			vm.title = "Workouts";
			vm.subTitle = "Exercise";
			vm.main = false;
		}
	}

	updateTitleFromState($state.current);
}

})();