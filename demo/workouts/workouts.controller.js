(function() {

angular
	.module('demo.workouts')
	.controller('WorkoutsController', WorkoutsController)

function WorkoutsController(workoutTodayService, $state, $stateParams, workoutsModel)
{
	console.log("WorkoutsController::constructor");
	var vm = this;
	vm.exercises = workoutsModel.workouts;
	vm.onClick = onClick;

	function onClick(exercise)
	{
		$state.go("exercise", {id: exercise.id});
	}
	
}

})();