Ext.define('main.view.main.Left', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftBar',
    controller: 'main',
    viewModel: 'main',
    requires: [
        'main.view.main.MainController',
        'main.view.main.MainModel',
    ],
    scrollable: 'y',
    cls: 'scrollbar',
    bodyStyle: 'background-color:#32404E',
    tbar: {
        style: 'background-color: #32404e;',
        items: [{
            iconCls: 'fa fa-outdent',
            flex: 1,
            style: 'background-color: #32404e; border-color: #32404e;box-shadow: 0px 0px 0px #32404e;',
            handler: 'onSwitchBar'
        }]
    },
    items: {
        xtype: 'treelist',
        ui: 'navigation',
        expanderFirst: false,
        expanderOnly: false,
        bind: {
            // width: '{width}',
            micro: '{isMicro}'
        },
        store: {
            root: {
                expanded: true,
                children: [{
                    text: '客户中心',
                    leaf: true,
                    href: 'index',
                    iconCls: 'x-fa fa-frown-o'
                }, {
                    text: '员工管理',
                    expanded: true,
                    iconCls: 'x-fa fa-folder',
                    children: [{
                        text: '员工列表',
                        leaf: true,
                        iconCls: 'x-fa fa-book',
                        href: 'staff'
                    }, {
                        text: '角色管理',
                        leaf: true,
                        iconCls: 'x-fa fa-book',
                        href: 'staff'
                    }, {
                        text: '模块管理',
                        leaf: true,
                        iconCls: 'x-fa fa-book',
                        href: 'staff'
                    }, {
                        text: '项目管理',
                        leaf: true,
                        iconCls: 'x-fa fa-book',
                        href: 'staff'
                    }]
                }, {
                    text: '商品中心',
                    leaf: true,
                    href: 'index',
                    iconCls: 'x-fa fa-usd'
                }, {
                    text: '报表中心',
                    leaf: true,
                    href: 'index',
                    iconCls: 'x-fa fa-usd'
                }]
            },
            fields: [{ name: "text" }]
        },
        listeners: {
            selectionchange: function (tree, node) {
                if (node.raw && node.raw.href) {
                    var panel = tree.up('appMain').down('[name=app-container]');
                    panel.removeAll();
                    var content = Ext.create({ xtype: node.raw.href });
                    panel.add(content);
                }
            },
            afterselectionchange: function (tree, node) {
                // var panel = tree.up('treelist');
                // panel.disableScrollBtn(panel, tree);
            }
        }
    },
    bbar: {
        style: 'background-color: #32404e;',
        items: [{
            iconCls: 'fa fa-outdent',
            flex: 1,
            style: 'background-color: #32404e; border-color: #32404e;box-shadow: 0px 0px 0px #32404e;',
            handler: 'onSwitchBar'
        }]
    }
});