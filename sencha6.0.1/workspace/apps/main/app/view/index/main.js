
Ext.define("main.view.index.main",{
    extend: "Ext.panel.Panel",
    xtype: 'index',
    requires: [
        "main.view.index.mainController",
        "main.view.index.mainModel",
        "common.Common"
    ],

    controller: "index.main",
    viewModel: {
        type: "index.main"
    },

    html: "Hello, index!!"
});
