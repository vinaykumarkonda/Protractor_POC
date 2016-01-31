
var myHooks = function () {

    var log4js = require('log4js');
    log4js.loadAppender('file');
    log4js.addAppender(log4js.appenders.file('log4.log'), 'logs');
    logger = log4js.getLogger('logs');

    this.Before(function (scenario, callback) {
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>---(Start of Scenario)--->>>>>>>>>>>>>>>>>>>>>>>>>");
        logger.info('Scenario: ' + scenario.getName());
        callback();
    });

    this.After(function (scenario, callback) {
        /*       // Logs the performance for every scenario
         scenario.attach(
         browser.manage().logs().get('performance').then(function (performanceLogs) {
         performanceLogs.forEach(function (performanceLog) {
         var message = JSON.parse(performanceLog.message).message;
         if (message.method == 'Network.responseReceived') {
         //logger.info(message);
         }
         });
         logger.info("<<<<<<<<<<<<<<<<<<<<<<<<<---(End of Scenario)---<<<<<<<<<<<<<<<<<<<<<<<<<");
         },
         function(err){//logger.warn(String(err) + " occurred when trying to read performance log");
         logger.info("<<<<<<<<<<<<<<<<<<<<<<<<<---(End of Scenario)---<<<<<<<<<<<<<<<<<<<<<<<<<");
         }),
         'text/log');
         scenario.attach(browser.getPageSource(),  'text/html');
         */

        // Logs the browser and takes screenshot for every failed scenario
        if (scenario.isFailed())
        {
            browser.takeScreenshot().then(function (png) {
                var fs = require('fs');

                var decodedImage = new Buffer(png, 'base64').toString('binary');

                scenario.attach(decodedImage, 'image/png');
            });

            /*
             scenario.attach(
             browser.manage().logs().get('browser').then(function(browserLogs) {
             logger.info('log: ' + require('util').inspect(browserLogs));
             browserLogs.forEach(function (browserLog) {
             if (browserLog.level.name === 'SEVERE') {
             //logger.error(browserLog.message);
             } else if (browserLog.level.name === 'WARNING') {
             //logger.warn(browserLog.message);
             }
             });
             logger.info("<<<<<<<<<<<<<<<<<<<<<<<<<---(End of Scenario)---<<<<<<<<<<<<<<<<<<<<<<<<<");
             },
             function(err){//logger.warn(String(err) + " occurred when trying to read performance log");
             logger.info("<<<<<<<<<<<<<<<<<<<<<<<<<---(End of Scenario)---<<<<<<<<<<<<<<<<<<<<<<<<<");
             }),
             'text/log');
             */
        }
        else {
            callback();
        }
    });

/*
    var outputDir = '../result';
    var createHtmlReport = function(sourceJson) {
        var CucumberHtmlReport = require('cucumber-html-report');
        var report = new CucumberHtmlReport({
            source: sourceJson, // source json
            dest: outputDir // target directory (will create if not exists)
        });
        report.createReport();
    };

    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    JsonFormatter.log = function(string) {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        var targetJson = outputDir + 'cucumber_report.json';
        fs.writeFile(targetJson, string, function(err) {
            if (err) {
                console.log('Failed to save cucumber test results to json file.');
                console.log(err);
            } else {
                createHtmlReport(targetJson);
            }
        });
    };

    this.registerListener(JsonFormatter);
*/

    this.registerHandler('BeforeFeature', function (event, callback) {
        var feature = event.getPayloadItem('feature').getName();
        logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>---(Start of Feature)--->>>>>>>>>>>>>>>>>>>>>>>>>");
        logger.info('Feature: ' + feature);
        callback();
    });

    this.registerHandler('AfterFeature', function (event, callback) {
        var feature = event.getPayloadItem('feature').getName();
        logger.info("<<<<<<<<<<<<<<<<<<<<<<<<<---(End of Feature)---<<<<<<<<<<<<<<<<<<<<<<<<<");
        callback();
    });

};

module.exports = myHooks;