(function() {

angular
	.module('featureReport', ['ui.router'])
	.config(configApp)
	.run(startup);

function configApp($stateProvider, $urlRouterProvider)
{
	$stateProvider
	.state('features', {
		url: '/features',
		template: '<jxl-feature-table></jxl-feature-table>',
		data: {title: 'Features'},
		resolve: {
			getFile: function(FeaturesFactory)
			{
				return FeaturesFactory.loadReport();
			}
		}
	})
	.state('scenarios', {
		url: '/features/:id/scenarios',
		template: '<jxl-scenario-table></jxl-scenario-table>',
		data: {title: 'Scenario'}
	});
}

function startup($state, $rootScope)
{
	// console.log("current:", $state.current);

	// $rootScope.$on('$stateChangeStart', 
	// 	function(event, toState, toParams, fromState, fromParams, options){
	// 		console.log("stateChangeStart:", toState.name);
	// 	});

	// $rootScope.$on('$stateNotFound', 
	// function(event, unfoundState, fromState, fromParams){ 
	// 	console.log("stateNotFound");
	//     console.log(unfoundState.to); // "lazy.state"
	//     console.log(unfoundState.toParams); // {a:1, b:2}
	//     console.log(unfoundState.options); // {inherit:false} + default options
	// });

	// $rootScope.$on('$stateChangeSuccess', 
	// function(event, toState, toParams, fromState, fromParams){
	// 	console.log("stateChangeSuccess:", toState.name);
	// });

	// $rootScope.$on('$stateChangeError', 
	// function(event, toState, toParams, fromState, fromParams, error){
	// 	console.log("stateChangeError:", toState.name);
	// 	console.error(error);
	// });

	$state.go('features');
}

})();
