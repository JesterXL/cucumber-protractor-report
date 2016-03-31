(function() {

    angular
        .module("demo.login")
        .factory("loginService", function (serviceLocator, $http, $q)
        {
            function login(username, password)
            {
            	var deferred = $q.defer();
            	$http.post(serviceLocator.LOGIN,
            	{
            		username: username,
            		password: password
            	})
            	.then(function(response)
            	{
            		if(response.data.result === true)
            		{
            			deferred.resolve();
            		}
            		else
            		{
            			deferred.reject();
            		}
            	},
            	function(error)
            	{
            		if(error.data)
            		{
            			deferred.reject(error.data);
            		}
            		else
            		{
            			deferred.reject("Unknown error.");
            		}
            	});
            	return deferred.promise;
            }

            return {
            	login: login
            }
        });

})();