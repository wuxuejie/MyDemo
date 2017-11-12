Ext.define('main.view.top.Main', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.topBar',
    viewModel: 'top-main',
    controller: 'top-main',
    cls: 'NavigationBar',
    height: 50,
    style: 'backgroundColor:#006cb8',
    margin: '0 0 0 0',
    requires: [
        'main.view.top.MainController',
        'main.view.top.MainModel',
        'main.view.top.topSelectContainer.Main',
    ],
    defaults: {
        scale: 'large',
        height: 50,
        margin: '0 0 0 0',
        style: 'border-radius:0px;color:#fff;font-weight: bold;padding:0 20px',
    },
    items: [{
        iconCls: 'fa icon-icon4b',
        tooltip: '返回主页',
        width: 73,
        handler: 'onGoHome',
    }, {
        xtype: 'breaktopbutton',
        width: 73
    }, '->', {
        xtype: 'button',
        height: 50,
        cls: 'iknow-tbar-head-panel',
        bind: {
            html: '{cName}',
        }
    }, {
        xtype: 'topSelectContainer',
        tag: 'head',
        layout: 'hbox',
        cls: 'iknow-tbar-head-panel'
    }],
    listeners: {
        // afterrender: "onAfterrender"
    }
});