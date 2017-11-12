/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        // 'Ext.container.Viewport',
        // 'Ext.plugin.Viewport',
        // 'Ext.window.MessageBox',
        // 'main.view.main.BannerBar',

        'main.view.main.MainController',
        'main.view.main.MainModel',
        // 'main.view.main.List',
        'main.view.top.Main',
        //'main.view.left.Main',
        // 'ViewsSecurity'
    ],
    xtype: 'app-uxiframe',
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    items: [{
        region: 'north',
        xtype: 'topBar',
        padding: '0 0 0 0'
    }, {
        xtype: 'leftBar',
        region: 'west',
        bind: {
            width: '{width}',
        },
        scrollable: 'y',
        cls: 'scrollbar',
        bodyStyle: 'background-color:#32404E',
        // tbar: {
        //     style: 'background-color: #32404e;',
        //     items: [{
        //         iconCls: 'fa fa-outdent',
        //         flex: 1,
        //         style: 'background-color: #32404e; border-color: #32404e;box-shadow: 0px 0px 0px #32404e;',
        //         handler: 'onSwitchBar'
        //     }]
        // },
        // backendItems: function () {
        //     return ViewsSecurity.getBackItems(true);
        // },
        // frontItems: function () {
        //     return ViewsSecurity.getFrontItems(false);
        // }
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'fit',
        items: [{
            xtype: 'uxiframe',
            loadMask: '正在加载应用……'
        }]
    }]

});