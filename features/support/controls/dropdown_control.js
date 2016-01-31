
var DropdownControl = function(){

  var BasePageObj = require("./base_control.js");
  var BasePage = new BasePageObj();


  this.of_type = function(element) {
    return element.getTagName();
  };


  this.has_dropdown_displayed = function(element) {
    return element.isDisplayed() ? true : false;
  };


  this.has_dropdown_enabled = function(element) {
    return element.isEnabled() ? true : false;
  };


  this.select = function(inputObj) {
    var select = BasePage.getElement(inputObj);
    return select;
  };


  this.selectDropdownByText = function(inputObj, text) {
    var select = this.select(inputObj);
    //select.BasePage.getElement({type: 'cssContainingText', value: text}).click();
    select.element(by.cssContainingText('option', text)).click()
    .then(function(){logger.info("DropdownSelect Success with value: "+text)},
        function(err){logger.error("DropdownSelect Failed with: " +err)});
  };

};

module.exports = DropdownControl;