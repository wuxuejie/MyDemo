Ext.define('main.view.top.Main', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.topBar',
    viewModel: 'main',
    controller: 'main',
    cls: 'NavigationBar',
    height: 50,
    style: 'backgroundColor:#006cb8',
    margin: '0 0 0 0',
    requires: [
        'main.view.top.MainController',
        'main.view.top.MainModel',
        'main.view.top.topSelectContainer.Main',
    ],
    defaults : {
        scale: 'large',
        height: 50,
        margin: '0 0 0 0',
        style: 'border-radius:0px'
    },
    items:[{
        iconCls: 'fa icon-icon4b',
        tooltip: '返回主页',
        width: 73
    }, {
        xtype: 'breaktopbutton',
        width: 73
    }, {
        xtype: 'tbtext',
        tag: 'frontTitle',
        html: 'IKnow',
        style: 'font-size:18px;color:#fff;font-weight:700;text-align:center;line-height:50px;cursor:pointer',
        width: 80,
        listeners: {
            afterrender:'onAfterrender'
        }
    }, {
        xtype: 'label',
        tag: 'backTitle',
        html: 'IKnow后台',
        width: 120,
        style: 'font-size:18px;color:#fff;line-height:50px;font-weight:700;text-align:center;'
    },'->',{
        xtype: 'topSelectContainer',
        menuPlain: true,
        tag: 'companys',
        height: 50,
        cls: 'iknow-tbar-head-panel',
        bind:{
            subMenuItems: '{companys}',
            showText: '{cName}',
        },
        isShowIcon: true,
        items: [{
            xtype: 'tbtext',
            tag: 'action',
            margin: '15 10 0 10',
            html: '<b style="color:#fff;font-size: 12;">{cName}</b>'
        }]
    },{
        xtype: 'topSelectContainer',
        tag: 'head',
        layout: 'hbox',
        cls: 'iknow-tbar-head-panel',
        isShowIcon: true,
        bind:{
            showText: '{cName}'
        },
        height: 50,
        defaults:{
            xtype:'button',
            click:'onMenuClick'
        },
        items: [{
            xtype: 'image',
            cls: 'iknow-tbar-head',
            margin: '5 10 0 20',
            style: 'border-radius:35px;border-width:0px',
            width: 35,
            height: 35,
            bind:{
                title: '{uName}',
                src: '{src}'
            }
        }, {
            xtype: 'tbtext',
            tag: 'action',
            margin: '15 10 0 10',
            bind:{
                html: ('<b style="color:#fff;font-size:12px">{uName}</b>') + '<span style="margin-left:5px;font-family:icomoon; font-size:18; color: #ffffff;" class="icon-icon110"></span>'
            }
        }],
        subMenuItems: [{
            text: '个人中心',
            iconCls: 'fa top-grglzx',
            tag: "1"
        },{
            text: '管理中心',
            iconCls: 'fa top-qyglzx',
            href: "",
            hrefTarget: '_blank'
        },{
            text: '版本说明',
            iconCls: 'fa icon-23',
            hrefTarget: '_blank',
            href: ""
        },{
            text: '安全退出',
            iconCls: 'fa fa-power-off',
            hrefTarget: '_self',
            handler:'onLogOut'
        }]
    }],
    listeners: {
        afterrender: function () {
            //todo
        }
    }
});