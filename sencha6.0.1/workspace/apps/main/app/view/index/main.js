
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
    layout: 'border',
    height:800,
    width:800,
    controller: 'main',
    viewModel: 'main',
    html:'index'
});
