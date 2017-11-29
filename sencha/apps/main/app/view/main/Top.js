<<<<<<< HEAD:sencha/apps/main/app/view/main/Top.js
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
=======
﻿Ext.define('main.view.top.Main', {
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
        'main.view.top.personalContainer.Main',
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
>>>>>>> 098cb46d6419887c517c7d8fe70d5ea422b7ac1f:sencha/apps/main/app/view/top/Main.js
});