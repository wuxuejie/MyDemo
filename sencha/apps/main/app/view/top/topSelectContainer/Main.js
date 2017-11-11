Ext.define('main.view.top.topSelectContainer.Main', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.topSelectContainer',
    viewModel: 'topSelectContainer-main',
    controller: 'topSelectContainer-main',
    requires: [
        'main.view.top.topSelectContainer.MainController',
        'main.view.top.topSelectContainer.MainModel'
    ],
    setShowText: function (value) {
        this.showText = value;
    },
    subMenu: null,
    setsubMenu: function (value) {
        this.subMenu = value;
    },
    subMenuItems: null,
    setSubMenuItems: function (value) {
        this.subMenuItems = value;
    },

    listeners: {
        afterrender: 'onAfterrender'
    },
    getSubMenu: function () {
        var me = this;

        if (me.isShow && me.subMenu) {
            return me.subMenu;
        }

        if (!me.subMenuItems || !me.subMenuItems.length) {
            return null;
        }

        var menus = Ext.Array.clone(me.subMenuItems);

        if (me.subMenu) {
            return me.subMenu;
        }

        me.subMenu = Ext.create('Ext.menu.Menu', {
            ui: 'iknow-menu',
            plain: me.menuPlain,
            showSeparator: false,
            isHidingMenu: 0,
            isShowing: 0,
            items: menus || [],
            tbar: {
                xtype: 'box',
                html: '<div style="">'
                    + '<div class="caretUp" style="position:absolute;top:-10px;right:15px;border-bottom:10px solid #006cb8"></div>'
                    + '<div class="caretUp" style="position:absolute;top:-9px;right:15px;"></div>'
                    + '</div>'
            },
            bbar: {
                xtype: 'box',
                html: '<div style="width:100%;height:3px;background-color:#fff;border:1px solid #006cb8;border-top-width:0px;"></div>'
            },
            defaults: {
                style: 'border:1px solid #006cb8;border-top-width:0px;border-bottom-width:0px;'
            },
            listeners: {
                beforehide: function (menu, e) {
                    menu.isHidingMenu = 0;
                },
                hide: function () {
                    me.fnSetHtml('icon-icon110');
                    me.isShow = false;
                },
                show: function () {
                    me.isShow = true;
                },
                mouseenter: function (menu, e) {
                    if (menu.isHidingMenu != 0) {
                        clearTimeout(menu.isHidingMenu);
                        menu.isHidingMenu = 0;
                    }
                },
                mouseleave: function (menu, e) {
                    var fromEl = e.getRelatedTarget(), isChildEl = me.el.contains(fromEl) || menu.el.contains(fromEl);
                    if (isChildEl) {
                        return;
                    }
                    if (!menu.isHidden()) {
                        menu.isHidingMenu = Ext.defer(menu.hide, 10, menu);
                    }
                }
            }
        });

        return me.subMenu;
    },


    fnSetHtml: function (gly) {
        var me = this;
        var tbtext = me.down('tbtext[tag=action]');
        if (!tbtext) {
            return;
        }
        var html = '<b style="color:#fff;font-size:12px;">' + (me.showText || '') + '</b>';
        if (me.isShowIcon) {
            html += '<span style="margin-left:5px;font-family:icomoon; font-size:18; color: #ffffff;" class="' + gly + '"></span>';
        }
        tbtext.setConfig('html', html);
    }
});