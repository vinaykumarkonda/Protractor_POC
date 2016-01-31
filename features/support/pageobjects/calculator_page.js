
var CalculatorPage = function() {
    var calculatorapp = require("../ui_mappings/calculator_page_mapping.js");
    var textboxObj = require("../controls/textbox_control.js");
    var textbox = new textboxObj();

    var dropdownObj = require("../controls/dropdown_control.js");
    var dropdown = new dropdownObj();
    var buttonObj = require("../controls/button_control.js");
    var button = new buttonObj();

    this.loadURL = function() {
    logger.info('baseUrl '+ browser.baseUrl);
        browser.get(browser.baseUrl);
    };

    this.setFirstValue = function(value) {
        textbox.send_keys(calculatorapp.firstValue, value);
    };

    this.setSecondValue = function(value) {
        textbox.send_keys(calculatorapp.secondValue, value);
    };

    this.setOperator = function(text) {
        dropdown.selectDropdownByText(calculatorapp.operatorDropdown, text);
    };

    this.getResult = function() {
        return textbox.get_text(calculatorapp.getResultText);
    };

    this.clickGo = function() {
        button.click_button(calculatorapp.goButton);
    };

};

module.exports = CalculatorPage;