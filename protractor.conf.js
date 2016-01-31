exports.config = {

	// ---------------------------------------------------------------------------
	// -----  Browser / Drivers --------------------------------------------------
	// ---------------------------------------------------------------------------

	directConnect: true,


	// ---------------------------------------------------------------------------
	// -----  Tests to run -------------------------------------------------------
	// ---------------------------------------------------------------------------

	specs: ['features/*.feature'],


	// ---------------------------------------------------------------------------
	// -----  Set up browsers ----------------------------------------------------
	// ---------------------------------------------------------------------------

	multiCapabilities: [{

		browserName: 'chrome',
		logName: 'Chrome - English',

		shardTestFiles: true,

		maxInstances: 2,

		chromeOptions: {
			perfLoggingPrefs: {
				enableNetwork: true,
				enablePage: false,
				enableTimeline: false
			}
		},

		loggingPrefs: {
			server: "ALL",
			driver: "ALL",
			performance: 'ALL',
			browser: 'ALL'
		}
	},
		{
			browserName: 'firefox',
			logName: 'Firefox - English',
			shardTestFiles: true,

			maxInstances: 2,

		}
	],


	// ---------------------------------------------------------------------------
	// -----  Global Test information --------------------------------------------
	// ---------------------------------------------------------------------------

	baseUrl: "http://juliemr.github.io/protractor-demo/",

	getPageTimeout: 10000,

	allScriptsTimeout: 11000,

	onPrepare: function() {
		//var CucumberHtmlReport = require('cucumber-html-report');
        //
		//var report = new CucumberHtmlReport({
		//	source: './report.json', // source json
		//	dest: './reports', // target directory (will create if not exists)
		//	name: 'report.html' // report file name (will be index.html if not exists)
		//});
        //
		//report.createReport();

/*
			//var jasmineReporters = require('jasmine-reporters');
		var HtmlReporter = require('protractor-html-screenshot-reporter');
			// returning the promise makes protractor wait for the reporter config before executing tests
			return browser.getProcessedConfig().then(function(config) {
				// you could use other properties here if you want, such as platform and version
				var browserName = config.capabilities.browserName;

				var junitReporter = new jasmineReporters.JUnitXmlReporter({
					consolidateAll: true,
					savePath: 'testresults',
					// this will produce distinct xml files for each capability
					filePrefix: browserName + '-xmloutput',
					modifySuiteName: function(generatedSuiteName, suite) {
						// this will produce distinct suite names for each capability,
						// e.g. 'firefox.login tests' and 'chrome.login tests'
						return browserName + '.' + generatedSuiteName;
					}
				});
				jasmine.getEnv().addReporter(junitReporter);
			});
*/
	},

	resultJsonOutputFile: 'report.json',


	// ---------------------------------------------------------------------------
	// -----  Test framework -----------------------------------------------------

	framework: 'custom',

	frameworkPath: './node_modules/protractor-cucumber-framework',


	cucumberOpts: {
		require: 'features/',
		format: 'pretty',
		defaultTimeoutInterval: 60000
	},

	"appenders": [
		{
			"type": "log4js-protractor-appender"
		}
	]


	// ---------------------------------------------------------------------------


};
