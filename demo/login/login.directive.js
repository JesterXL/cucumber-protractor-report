(function() {

angular.module('demo.login')
	.directive('jxlLogin', jxlLogin)

function jxlLogin($window)
{
	console.log("jxlLogin::constructor");
	function link(scope, element, attrs)
    {
    	_.forEach(document.querySelectorAll('.mdl-textfield'), function(txt)
    	{
    		$window.componentHandler.upgradeElement(txt);
    	});
		
    }

	return {
        restrict: 'E',
        scope: {},
        link: link,
        transclude: false,
        templateUrl: "login/login.directive.html",
        controller: 'LoginController',
        controllerAs: 'vm'
    };
}

})();