// conf.js
exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
    			'./features/step_definitions/*.steps.js'
    		],
    format: 'json:./src/cucumber_report.json'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  			'./features/*.feature'
  		]
}