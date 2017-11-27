Ext.define('main.view.main.Top', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.topBar',
    cls: 'NavigationBar',
    height: 50,
    style: 'backgroundColor:#006cb8',
    margin: '0 0 0 0',
    controller: 'main',
    viewModel: 'main',
    requires: [
        'main.view.main.MainController',
        'main.view.main.MainModel',
        'main.view.main.personalContainer.Main',
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
        xtype: 'button',
        iconCls: 'icon-apps',
        width: 73
    }, '->', {
        xtype: 'button',
        height: 50,
        cls: 'iknow-tbar-head-panel',
        bind: {
            html: '{cName}',
        }
    }, {
        xtype: 'personalContainer',
        tag: 'head',
        layout: 'hbox',
        cls: 'iknow-tbar-head-panel'
    }],
    listeners: {
        // afterrender: "onAfterrender"
    }
});