(function() {

angular
	.module('featureReport')
	.factory('FeaturesFactory', FeaturesFactory);


function FeaturesFactory($http)
{
	var factory = {};
	factory.features = null;
	factory.getFeatureFromID = getFeatureFromID;
	factory.loadReport = loadReport;
	var vm = factory;

	function getFeatureFromID(id)
	{
		//console.log("FeaturesFactory::getFeatureFromID, id:", id);
		var result = _.find(vm.features, (feature)=>
		{
			//console.log("line:", feature.line);
			// return String(feature.line) === id;
			return String(feature.uniqueID) === id;
		});
		//console.log("result:", result);
		return result;
	}

	function loadReport()
	{
		//console.log("FeaturesFactory::loadReport...");
		var uniqueID = 0;
		return $http.get('cucumber_report.json')
		.then(function(json)
		{
			vm.features = json.data;
			vm.features = _.filter(vm.features, (feature)=>
			{
				return _.isUndefined(feature.elements) === false;
			});
			vm.features = _.map(vm.features, (feature)=>
			{
				feature.uniqueID = uniqueID++;
				if(feature.name.length > 120)
				{
					feature.shortName = feature.name.substr(0, 120) + '...';
				}
				else
				{
					feature.shortName = feature.name;
				}
				feature.passedPercentage = 0;
				feature.passableScenarios = 0;
				feature.totalTests = 0;
				feature.elements = _.map(feature.elements, (element)=>
				{
					if(element.keyword.toLowerCase() === 'scenario')
					{
						feature.passableScenarios++;
						var passedSteps = _.partition(element.steps, (step)=>
						{
							feature.totalTests++;
							var passed = step.result.status.toLowerCase() === 'passed';
							step.passed = passed;
							return passed;
						});
						element.passedPercentage = passedSteps[0].length / element.steps.length;
						feature.passedPercentage += element.passedPercentage;
					}
					if(element.keyword.toLowerCase() === 'background')
					{
						element.name = 'Background';
					}
					return element;
				});
				//console.log("****");
				//console.log("feature.passedPercentage:", feature.passedPercentage);
				//console.log("feature.passableScenarios:", feature.passableScenarios);
				feature.passedPercentage = (feature.passedPercentage / feature.passableScenarios) * 100;
				feature.passedPercentage = _.round(feature.passedPercentage, 2);
				if(_.isNaN(feature.passedPercentage))
				{
					feature.passedPercentage = 0;
				}
				return feature;
			});
		});
	}
	
	return factory;
}


})();
