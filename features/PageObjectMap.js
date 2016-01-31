module.exports = {

    calculator_page: new (require("./support/pageobjects/calculator_page.js")),

    calculator_page_ui_map: require("./support/ui_mappings/calculator_page_mapping.js"),

    base_control: new (require("./support/controls/base_control.js")),
    textbox_control: new (require("./support/controls/textbox_control.js")),
    dropdown_control: new (require("./support/controls/dropdown_control.js")),
    button_control: new (require("./support/controls/button_control.js"))

};
