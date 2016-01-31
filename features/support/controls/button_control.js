
var ButtonControl = function(){

	var BasePageObj = require("./base_control.js");
	var BasePage = new BasePageObj();


	this.of_type = function(element) {
		return element.getTagName();
	};


	this.has_button_displayed = function(element) {
		return element.isDisplayed() ? true : false;
	};


	this.has_button_enabled = function(element) {
		return element.isEnabled() ? true : false;
	};


	this.click_button = function(inputObj) {
		var element = BasePage.getElement(inputObj);
		element.click()
			.then(function(){logger.info("ButtonClick Success")},
			function(err){logger.error("ButtonClick Failed with: " +err)});
	};

};

module.exports = ButtonControl;