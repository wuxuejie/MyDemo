Ext.define('main.view.left.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftBar',
    viewModel: 'left-main',
    controller: 'left-main',
    requires: [
        'main.view.left.MainController',
        'main.view.left.MainModel'
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
        store: {
            root: {
                expanded: true,
                children: [{
                    text: 'detention',
                    leaf: true,
                    iconCls: 'x-fa fa-frown-o'
                }, {
                    text: 'homework',
                    expanded: true,
                    iconCls: 'x-fa fa-folder',
                    children: [{
                        text: 'book report',
                        leaf: true,
                        iconCls: 'x-fa fa-book'
                    }, {
                        text: 'algebra',
                        leaf: true,
                        iconCls: 'x-fa fa-graduation-cap'
                    }]
                }, {
                    text: 'buy lottery tickets',
                    leaf: true,
                    iconCls: 'x-fa fa-usd'
                }]
            },
            fields: [{ name: "text" }]
        },
        listeners: {
            selectionchange: function (tree, node) {
                var href = node.get('href'),
                    tempHref = node.get('tempHref');
                if (href) {
                    href = tempHref || href;
                    node.set('tempHref', '');

                    var target = node.get('hrefTarget');
                    if (target == '_blank')
                        window.open(href);
                    else
                        window.location.href = href;
                }
            },
            afterselectionchange: function (tree, node) {
                var panel = tree.up('weizhi-list-tree');
                panel.disableScrollBtn(panel, tree);
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