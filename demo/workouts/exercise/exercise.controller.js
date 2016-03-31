(function() {

angular
	.module('demo.workouts.exercise')
	.controller('ExerciseController', ExerciseController)

function ExerciseController(workoutsModel, $stateParams, $scope)
{
	console.log("ExerciseController::constructor");
	var vm = this;
	vm.onAddSet = onAddSet;
	vm.currentExercise = workoutsModel.getExerciseByID($stateParams.id);
	$scope.$on('onDeleteSet', onDeleteSet);


	function onAddSet()
	{
		vm.currentExercise.sets.push({reps: 0, weight: 0});	
	}

	function onDeleteSet(event, set)
	{
		var indice = _.findIndex(vm.currentExercise.sets, function(item)
		{
			return item === set;
		});
		if(indice > -1)
		{
			vm.currentExercise.sets.splice(indice, 1);
		}
	}
	
}

})();