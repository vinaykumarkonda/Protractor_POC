
var myLogs = function () {

    this.console_logs = function () {


       var console_output = '';

        try {

            //var console_log = (console_log + browser.manage().logs().get('browser'));
            browser.manage().logs().get('browser').then(function (browserLog) {
                    var i = 0;

                logger.info(browserLog);
                logger.info(browserLog.length);
                    for (i; i <= browserLog.length - 1; i++) {
                    //    if (browserLog[i].level.name === 'SEVERE') {
                            console_output << ('\n' + browserLog[i]);
                        //}
                    }
                }
            );
        }

        catch(e) {
            logger.warn(e.to_s + " occurred when trying to read console log");
        }

        /*
         console_output = '';

         for(i; i<=console_log.length-1; i++){.forEach(function (log) {
         if (log.level.name === 'SEVERE') {
         console_output << log.to_s + "\n"
         } else if (log.level.name === 'WARNING') {
         console_output << log.to_s + "\n"
         }
         });

         logger.info(console_output);
         */
        logger.info(console_output);
        console_output;
    };

/*

 // Grab the client side console log
 this.log_console
 {
 logger.attachment({description: 'Console Logs', raw_data: this.console_logs, extension: 'log'})
 }
 ;

 // Grab the client side performance
 this.log_performance
 $logger.attachment({description: 'Performance Logs', raw_data: this.performance_logs, extension: 'log'})
 };

 //
 // Grab all the logs and take a screenshot.
 //
 this.log_all_details
 logger.attachment({description: 'Console Logs', raw_data: console_logs,  extension: 'log' })
 logger.attachment({description: 'Page Source', raw_data: browser.page_source,  extension: 'html'})
 begin
 logger.image({description: 'Screenshot', raw_data: browser.screenshot_as(:png),  extension: 'png'})
 rescue
 logger.error('Unable to capture screenshot');
 };
 };
 };

 this.attach_screenshot(description: 'Screenshot')
 logger.image( {description: description, raw_data: browser.screenshot_as(:png),  extension: 'png'})
 };

 */

};

module.exports = myLogs;
