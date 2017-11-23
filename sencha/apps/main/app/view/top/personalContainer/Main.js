Ext.define('main.view.top.personalContainer.Main', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.personalContainer',
    viewModel: 'personalContainer-main',
    controller: 'personalContainer-main',
    requires: [
        'main.view.top.personalContainer.MainController',
        'main.view.top.personalContainer.MainModel'
    ],
    handleMouseEvents: true,
    onRender: function () {
        var me = this, btn = me.el;
        me.callParent(arguments);
        me.mon(btn, {
            scope: me,
            mouseover: me.onMouseOver,
            mouseout: me.onMouseOut
        });
        Ext.button.Manager.register(me);
    },
    setShowText: function (value) {
        this.showText = value;
    },
    height: 50,
    defaults: {
        xtype: 'button'
    },
    items: [{
        xtype: 'image',
        cls: 'iknow-tbar-head',
        margin: '5 10 0 20',
        style: 'border-radius:35px;border-width:0px',
        width: 35,
        height: 35,
        bind: {
            title: '{uName}',
            src: '{src}'
        }
    }, {
        xtype: 'tbtext',
        tag: 'action',
        margin: '15 10 0 10',
        bind: {
            text: ('<b style="color:#fff;font-size:12px">{uName}</b>') + '<span style="margin-left:5px;font-family:icomoon; font-size:18; color: #ffffff;" class="{iconClass}"></span>'
        }
    }, {
        id: 'option',
        hidden: true,
        xtype: 'menu',
        ui: 'iknow-menu',
        showSeparator: false,
        isHidingMenu: 0,
        isShowing: 0,
        defaults: {
            style: 'border:1px solid #006cb8;border-top-width:0px;border-bottom-width:0px;',
            listeners: {
                click: 'onMenuClick'
            }
        },
        items: [{
            text: '个人中心',
            iconCls: 'fa top-grglzx',
            tag: "1"
        },
        {
            text: '管理中心',
            iconCls: 'fa top-qyglzx',
            tag: "2"
        },
        {
            text: '版本说明',
            iconCls: 'fa icon-23',
            tag: "3"
        },
        {
            text: '安全退出',
            iconCls: 'fa fa-power-off',
            tag: "4"
        }],
        tbar: {
            xtype: 'box',
            html: '<div style="position:relative;width:100%;height:3px;background-color:#fff;border:1px solid #006cb8;border-bottom-width:0px;margin-top:10px;">' +
                '<div class="caretUp" style="position:absolute;top:-10px;right:15px;border-bottom:10px solid #006cb8"></div>' +
                '<div class="caretUp" style="position:absolute;top:-9px;right:15px;"></div>' +
                '</div>'
        },
        bbar: {
            xtype: 'box',
            html: '<div style="width:100%;height:3px;background-color:#fff;border:1px solid #006cb8;border-top-width:0px;"></div>'
        },
        listeners: {
            mouseleave: 'mouseOut'
        }
    }],
    onMouseOver: function (e) {
        if (!this.disabled && !e.within(this.el, true, true)) {
            this.fireEvent('mouseover', this, e);
        }
    },

    onMouseOut: function (e) {
        if (!this.disabled && !e.within(this.el, true, true)) {
            this.fireEvent('mouseout', this, e);
        }
    },

    listeners: {
        mouseover: 'mouseOver',
        mouseout: 'mouseOut'
    }
});