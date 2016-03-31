(function() {

angular
	.module('demo.workouts.exercise.setRep')
	.controller('SetRepController', SetRepController)

function SetRepController($scope)
{
	console.log("SetRepController::constructor");
	var vm = this;
	vm.onDeleteSet = onDeleteSet;

	function onDeleteSet()
	{
		$scope.$emit('onDeleteSet', vm.set);
	}

	// setInterval(function()
	// {
	// 	console.log("complete:", vm.complete);
	// }, 2000);
	
}

})();