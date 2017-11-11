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
        'Ext.container.Viewport',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'main.view.main.BannerBar',

        'main.view.main.MainController',
        'main.view.main.MainModel',
        'main.view.main.List',
        'main.view.top.Main',
        'LeftTree',
        'ViewsSecurity'
    ],
    xtype: 'app-uxiframe',
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    initComponent: function () {
        var me = this;
        var isFront = true;
        me.items = [{
            region: 'north',
            xtype: 'topBar',
            padding: '0 0 0 0'
        }, {
            xtype: 'lefttree',
            region: 'west',
            width: 146,
            isFront: isFront,
            backendItems: function () {
                return ViewsSecurity.getBackItems(isFront);
            },
            frontItems: function () {
                return ViewsSecurity.getFrontItems(isFront);
            }
        }, {
            xtype: 'panel',
            region: 'center',
            layout: 'fit',
            items: [{
                xtype: 'uxiframe',
                loadMask: '正在加载应用……'
            }]
        }];
        me.callParent(arguments);
    }

});
