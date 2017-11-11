Ext.define('main.view.main.BreakTopButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.breaktopbutton',
    glyph: '',
    targetText: '',
    apps: null,
    iconCls: 'icon-apps',
    beforeRender: function () {
        var me = this;

        me.callParent();

        //App.GlobalAction.SelectApps({}, function (result) {
            var data = [];

        //    if (result && result.length) {
        //        Ext.each(result, function (apps) {
        //            Ext.each(apps.list, function (app) {
        //                data.push({
        //                    text: app.appName,
        //                    href: app.linkaddr,
        //                    id: app.appId,
        //                    iconCls: app.icon,
        //                    bgColor: app.color
        //                });
        //            });
        //        });
        //    }

            me.appStore = Ext.create('Ext.data.Store', {
                fields: ['text', 'id', 'iconCls', 'bgColor', 'href'],
                data: data
            });
        //});
    },
    listeners: {
        afterrender: function (tb, op) {
            tb.getEl().on({
                click: tb.onClick,
                mouseover: tb.onMouseOver,
                mouseout: tb.onMouseOut,
                scope: tb
            });

            tb.getEl().setStyle('cursor', 'pointer');
        }
    },
    subMenu: null,
    subMenuItems: null,
    onParent: false,
    getSubMenu: function () {
        var me = this;

        if (me.appStore.getCount() == 0) {
            return;
        }

        if (me.subMenu) {
            return me.subMenu;
        }
        var panelWidth = 460,
            appsCount = me.appStore.getCount();

        //app的长度若小于5的 宽度则需要计算.
        if (appsCount < 5) {
            panelWidth = (appsCount * 90) + 10;
        }

        me.subMenu = Ext.create('Ext.menu.Menu', {
            plain: true,
            showSeparator: false,
            isHidingMenu: 0,
            isShowing: 0,
            items: [{
                xtype: 'panel',
                tag: 'appsBtnPanel',
                width: panelWidth,
                items: [{
                    xtype: 'box',//向上的arrow
                    floating: true,//设为浮动后，控件默认不会初始化，需要借助reference设置触发事件
                    shadow: false,//设为浮动后，默认会自带shadow
                    reference: 'floatEle',
                    border: false,
                    x: 26,
                    y: -15,
                    autoEl: {
                        html: '<div class="caretUp"></div>'
                    }
                }, {
                    xtype: 'dataview',
                    store: me.appStore,
                    layout: {
                        type: 'table',
                        columns: 5
                    },
                    tpl: [
                         '<div class="apps-box">',
                            '<ul>',
                                '<tpl for=".">',
                                    '<li class="appBtn" style="cursor:pointer;background-color:{bgColor};">',
                                        '<i class="{iconCls}"></i>',
                                        '<p>{text}</p>',
                                    '</li>',
                                '</tpl>',
                            '</ul>',
                        '</div>'
                    ],
                    itemSelector: '.appBtn',
                    listeners: {
                        itemclick: function (dataView, record) {
                            window.open(record.get('href'));
                        }
                    }
                }],
                margin: '5 0 0 0'
            }],
            listeners: {
                beforehide: function (menu, e) {
                    menu.isHidingMenu = 0;
                },
                mouseenter: function (menu, e) {
                    if (menu.isHidingMenu != 0) {
                        clearTimeout(menu.isHidingMenu);
                        menu.isHidingMenu = 0;
                    }
                    me.onParent = false;
                    me.onChild = true;
                },
                mouseleave: function (menu, e) {
                    Ext.defer(function () {
                        if (me.onParent) {
                            return;
                        }
                        if (!menu.isHidden()) {
                            menu.isHidingMenu = Ext.defer(menu.hide, 500, menu);
                        }
                    }, 150, menu);
                }
            }
        });

        return me.subMenu;
    },
    onClick: function (tbEl, e, op) {
        var me = this,
            menu = me.getSubMenu();

        if (!menu) {
            return;
        }

        menu.isShowing = Ext.defer(function () {
            var menu = me.getSubMenu();
            if (menu.isHidingMenu != 0) {
                clearTimeout(menu.isHidingMenu);
                menu.isHidingMenu = 0;
            }
            if (menu.isVisible()) {
                return;
            }
            var tbPosition = me.getXY();
            var menuX = tbPosition[0],
                menuY = tbPosition[1] + 53;
            menu.showAt(menuX, menuY);

            this.lookupController().lookupReference('floatEle').show();
        }, 10, menu);
    },
    onMouseOver: function (tbEl, e, op) {
        var me = this,
            menu = me.getSubMenu();

        var fromEl = tbEl.getRelatedTarget(),
          isChildEl = me.el.contains(fromEl) || (menu && menu.el && menu.el.contains(fromEl));

        if (isChildEl) {
            return;
        }
        me.onParent = true;
        me.onChild = false;
    },
    onMouseOut: function (tbEl, e, op) {
        var me = this,
            menu = me.getSubMenu();

        Ext.defer(function () {
            if (!menu || me.onChild) {
                return;
            }

            if (!menu.isHidden()) {
                menu.isHidingMenu = Ext.defer(menu.hide, 500, menu);
            }
            else if (menu.isShowing) {
                clearTimeout(menu.isShowing);
            }
        }, 150, menu);
    }
});