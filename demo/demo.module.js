(function() {

angular
	.module('demo', 
		[
		'ui.router',
		'demo.login',
		'demo.workouts'
	])
	.config(configApp)
	.run(startup);

function configApp($stateProvider, $urlRouterProvider)
{
	$stateProvider
	.state('login', {
		url: '/login',
		template: '<jxl-login></jxl-login>',
		data: {title: 'Login'}
	})
	.state('workouts', {
		url: '/workouts',
		template: '<jxl-workouts></jxl-workouts>',
		data: {title: 'Workouts'},
		resolve: {
			getWorkouts: function(workoutsModel)
			{
				return workoutsModel.getWorkouts();
			}
		}
	})
	.state('exercise', {
		url: '/workout/exercise/:id',
		template: '<jxl-exercise></jxl-exercise>',
		data: {title: 'Exercise'},
		resolve: {
			getWorkouts: function(workoutsModel)
			{
				return workoutsModel.getWorkouts();
			}
		}
	});
}

function startup($state, $rootScope)
{
	$state.go('login');
}

})();
