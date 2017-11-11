Ext.define('LeftTree', {
    extend: 'Ext.panel.Panel',
    xtype: 'lefttree',
    requires: [
        'Ext.list.Tree'
        , 'Adapter'
        , 'main.treeListBbar'
    ],
    bItems: [],
    fItems: [],
    isFront: false,
    width: 146,
    scrollable: 'y',
    cls: 'scrollbar',
    bodyStyle: 'background-color:#32404E',
    tbar: {
        style: 'background-color: #32404e;',
        items: [{
            iconCls: 'fa fa-outdent',
            flex: 1,
            style: 'background-color: #32404e; border-color: #32404e;box-shadow: 0px 0px 0px #32404e;',
            handler: function () {
                var me = this,
                    weizhitree = me.up('lefttree'),
                    tree = weizhitree.down('treelist'),
                    isMicro = !tree.getMicro(),
                    width = isMicro ? 73 : 146,
                    iconCls = isMicro ? 'fa fa-indent' : 'fa fa-outdent';
                Ext.suspendLayouts();
                weizhitree.setWidth(width);
                tree.setMicro(isMicro);
                me.setIconCls(iconCls);
                Ext.resumeLayouts();
                weizhitree.updateLayout();
                weizhitree.down('toolbar[flag=bbar]').setVisible(!isMicro);
            }
        }]
    },
    bbar: {
        style: 'background-color: #32404e;',
        flag: 'bbar',
        height: 42,
        defaults: {
            flex: 1,
            height: 42
        },
        items: [{
            xtype: 'treelistbbar'
        }]
    },
    constructor: function () {
        var me = this;
        me.callParent(arguments);
        me.bItems = me.backendItems();
        me.fItems = me.frontItems();
    },
    items: {
        xtype: 'treelist',
        ui: 'navigation',
        expanderFirst: false,
        expanderOnly: false,
        store: {
            root: {
                expanded: true,
                children: [

                ]
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
    //加载菜单,根据URL 选中对应菜单
    initMenu: function (url) {
        debugger;
        var me = this,
            treelist = me.down('treelist'),
            root = treelist.getStore().getRoot();

        if (!root.hasChildNodes()) {
            if (me.isFront) {
                root.appendChild(Ext.clone(me.fItems));
            } else {
                root.appendChild(Ext.clone(me.bItems));
            }
        }
        me.hasLoaded = true;
        me.setCurrentSelection(treelist, url, root);
    },
    switchFn: function (url) {
        var me = this, treelist = me.down('treelist'),
            root = treelist.getStore().getRoot();

        root.removeAll();
        if (me.isFront) {
            me.isFront = false;
            root.appendChild(Ext.clone(me.bItems));
        } else {
            me.isFront = true;
            root.appendChild(Ext.clone(me.fItems));
        }

        me.hasLoaded = true;
        me.setCurrentSelection(treelist, url, root);
    },
    setCurrentSelection: function (treeList, url, root) {
        var me = this;
        if (!root)
            root = treeList.getStore().getRoot();

        var selectionNode = me.getSelectionNode(root, url);
        treeList.setSelection(selectionNode);
    },
    getSelectionNode: function (root, url) {
        if (!root || !root.childNodes || root.childNodes.length == 0)
            return null;

        var me = this,
            selectionNode = null,
            tempUrl = '',
            urlLowerCase = url.toLowerCase();
        if (urlLowerCase.indexOf('?') >= 0)
            tempUrl = urlLowerCase.substring(0, urlLowerCase.indexOf('?'));

        selectionNode = me.matchNodeWithUrl(root, urlLowerCase, url);
        if (!selectionNode) {
            if (urlLowerCase.indexOf('?supplier&') > -1) {
                tempUrl += '?supplier';
            }
            selectionNode = me.matchNodeWithUrl(root, tempUrl, url);
        }
        if (!selectionNode)
            selectionNode = root.childNodes[0];

        return selectionNode;
    },
    matchNodeWithUrl: function (root, matchUrl, url) {
        var selectionNode = null;

        Ext.each(root.childNodes, function (node) {
            if (node.isLeaf()) {
                var href = node.get('href').toLowerCase();
                if (href == matchUrl) {
                    selectionNode = node;
                    selectionNode.set('tempHref', url);
                    return false;
                }
            } else {
                Ext.each(node.childNodes, function (nc) {
                    var href = nc.get('href').toLowerCase();
                    if (href == matchUrl) {
                        selectionNode = nc;
                        selectionNode.set('tempHref', url);
                        node.expand();
                        return false;
                    }
                });
                if (selectionNode)
                    return false;
            }
        });

        return selectionNode;
    },
    destroy: function () {
        var me = this;
        me.bItems = me.fItems = me.isFront = null;
        delete me.bItems;
        delete me.fItems;
        delete me.isFront;
        me.callParent(arguments);
    },
    disableScrollBtn: function (p, t) {
        Ext.defer(function (panel, tree) {
            var container = panel.down('fieldcontainer[flag=scrollContainer]');
            if (container) {
                var btns = container.query('button'),
                disabled = tree.el.dom.scrollHeight <= tree.el.getHeight();

                Ext.each(btns, function (btn) {
                    btn.setDisabled(disabled);
                });
            }

        }, 500, this, [p, t]);
    },

    listeners: {
        afterrender: function (obj) {
            Adapter.getScrollbar(obj);
        }
    }
});