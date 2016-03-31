(function() {

    angular
        .module("demo")
        .factory("serviceLocator", function () {
            var apiPort = 9037;
            var URL = window.location.protocol + '//' + window.location.hostname + ':' + apiPort;

            return {
                API_PORT: apiPort,
                LOGIN: URL + "/login",
                WORKOUTS_TODAY: URL + "/api/workouts/today"
            };
        });

})();