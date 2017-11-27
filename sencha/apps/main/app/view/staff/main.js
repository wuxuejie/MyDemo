
Ext.define("main.view.staff.main",{
    extend: "Ext.panel.Panel",
    xtype: 'staff',
    requires: [
        "main.view.staff.mainController",
        "main.view.staff.mainModel"
    ],

    controller: "staff-main",
    viewModel: {
        type: "staff-main"
    },

    html: "Hello, staff!!"
});
