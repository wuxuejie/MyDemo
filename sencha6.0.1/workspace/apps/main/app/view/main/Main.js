/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.appMain',
    xtype: 'app-main',
    requires: [
        'main.view.main.MainController',
        'main.view.main.MainModel',
        'main.view.main.Top',
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
        width:146,
        bind: {
            width: '{width}',
        },
        scrollable: 'y',
        cls: 'scrollbar',
        bodyStyle: 'background-color:#32404E'
    }, {
        xtype: 'panel',
        name:'app-container',
        region: 'center',
        layout: 'fit',
        items: [{
            xtype: 'index'
        }]
    }]

});