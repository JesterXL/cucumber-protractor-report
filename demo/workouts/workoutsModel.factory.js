(function() {

    angular
        .module("demo.workouts")
        .factory("workoutsModel", function (workoutTodayService, $q)
        {
        	var _workouts = null;

        	function getWorkouts()
			{
				console.log("workoutsModel::getWorkouts");
				if(_workouts === null)
				{
					//console.log("no workouts, loading...");
					return workoutTodayService.load()
					.then(function(results)
					{
					//	console.log("got some.");
						_workouts = results;
					}, function(error)
					{
						console.log("failed to load workouts.");
						console.log("error:", error);
					});
				}
				else
				{
					//console.log("workouts loaded, resolving using cache...");
					var deferred = $q.defer();
					deferred.resolve();
					return deferred.promise;
				}
			}

			function getExerciseByID(id)
			{
				if(_workouts)
				{
					return _.find(_workouts, function(item)
					{
						return item.id === id;
					});
				}
			}

            return {
            	getWorkouts: getWorkouts,
            	getExerciseByID: getExerciseByID,
            	get workouts(){ return _workouts; }
            };
        });

})();