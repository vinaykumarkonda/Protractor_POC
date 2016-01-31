
var TextboxControl = function(){

    var BasePageObj = require("C:/vinay/Protractor/Projects/protractor-demo/features/support/controls/base_control.js");
    var BasePage = new BasePageObj();

    this.of_type = function(element) {
        return element.getAttribute('type');
    };

    this.has_textbox_displayed = function(element) {
        return element.isDisplayed() ? true : false;
    };

    this.has_textbox_enabled = function(element) {
        return element.isEnabled() ? true : false;
    };

    this.send_keys = function(inputObj, value) {
        var element = BasePage.getElement(inputObj);
        element.sendKeys(value)
            .then(function(){logger.info("sendKeys Success with value :" + value)},
            function(err){logger.error("sendKeys Failed with: " +err)});
    };

    this.get_text = function(inputObj) {
        var element = BasePage.getElement(inputObj);
        return element.getText();
         //   .then(function(text){logger.info("getText Success with value :" + text); return text;},
         //function(err){logger.error("getText Failed with: " +err)});
    };

};

module.exports = TextboxControl;