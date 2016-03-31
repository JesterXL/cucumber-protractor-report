(function() {

angular.module('featureReport')
	.directive('jxlProgress', jxlProgress)

function jxlProgress($window)
{
	function link(scope, element, attrs)
    {
		element[0].addEventListener('mdl-componentupgraded', function()
		{
			var progressNode = element[0].firstChild;
			progressNode.MaterialProgress.setProgress(scope.percentage);
		});
		$window.componentHandler.upgradeElement(element[0].firstChild);
		
    }

	return {
        restrict: 'E',
        scope: {
        	percentage: '=percent'
        },
        transclude: false,
        template: function()
        {
        	return '<div style="width:80px;" class="mdl-progress mdl-js-progress"></div>';
        },
        link: link
    };
}

})();