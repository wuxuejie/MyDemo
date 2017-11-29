Ext.define('main.view.main.personalContainer.Main', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.personalContainer',
    viewModel: 'personalContainer-main',
    controller: 'personalContainer-main',
    requires: [
        'main.view.main.personalContainer.MainController',
        'main.view.main.personalContainer.MainModel'
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
        cls:'personal-container-bar',
        defaults: {
            style: 'border:1px solid #006cb8;border-top-width:0px;border-bottom-width:0px;',
            listeners: {
                click: 'onMenuClick'
            }
        },
        items: [{
            text: '个人中心',
            iconCls: 'fa fa-user',
            tag: "1"
        },
        {
            text: '管理中心',
            iconCls: 'fa fa-user-md',
            tag: "2"
        },
        {
            text: '版本说明',
            iconCls: 'fa fa-info-circle',
            tag: "3"
        },
        {
            text: '安全退出',
            iconCls: 'fa fa-power-off',
            tag: "4"
        }],
        tbar: {
            xtype: 'box',
            html: '<div class="caretUp"><div class="warp"></div><div class="in"></div></div>'
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