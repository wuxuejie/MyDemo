Ext.define('main.view.main.BannerBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.bannerBar',
    cls: 'NavigationBar',
    height: 50,
    style: 'backgroundColor:#006cb8',
    margin: '0 0 0 0',
    requires: [
        'main.view.main.BreakTopButton',
        'main.view.main.HeadOnTopContainer'
    ],
    initComponent: function () {
        var me = this,
            cName = 'IKnow',
            uName = '张三';

        me.defaults = {
            scale: 'large',
            height: 50,
            margin: '0 0 0 0',
            style: 'border-radius:0px'
        };
        var tbar = [{
            iconCls: 'fa icon-icon4b',
            tooltip: '返回主页',
            width: 73
        }, {
            xtype: 'breaktopbutton',
            width: 73,
            toolbar: me
        }, {
            xtype: 'tbtext',
            tag: 'frontTitle',
            html: 'IKnow',
            style: 'font-size:18px;color:#fff;font-weight:700;text-align:center;line-height:50px;cursor:pointer',
            width: 80,
            listeners: {
                afterrender: function (tb, op) {
                    tb.getEl().on('click', function () {
                        window.location.href = '#/task';
                    });
                }
            }
        }, {
            xtype: 'label',
            tag: 'backTitle',
            html: 'IKnow后台',
            width: 120,
            style: 'font-size:18px;color:#fff;line-height:50px;font-weight:700;text-align:center;'
        }];

        tbar.push('->');

        /***************公司开始****************/
        var companys = [];

        var text = '<b style="color:#fff;font-size: 12;">' + cName + '</b>';
        tbar.push({
            xtype: 'headOnTopContainer',
            //xtype: 'button',
            menuPlain: true,
            tag: 'companys',
            height: 50,
            cls: 'iknow-tbar-head-panel',
            subMenuItems: companys,
            showText: cName,
            isShowIcon: true,
            menuClick: function (menu, item) {
                //todo
            },
            items: [{
                xtype: 'tbtext',
                tag: 'action',
                margin: '15 10 0 10',
                html: text
            }]
        });

        /***************公司结束****************/


        /***************头像开始****************/
        var menItems = [];

        menItems.push({
            text: '个人中心',
            iconCls: 'fa top-grglzx',
            href: "",
            hrefTarget: '_blank'
        });
        //管理员出现管理中心
        menItems.push({
            text: '管理中心',
            iconCls: 'fa top-qyglzx',
            href: "",
            hrefTarget: '_blank'
        });
        menItems.push({
            text: '版本说明',
            iconCls: 'fa icon-23',
            hrefTarget: '_blank',
            handler: function () {
                //todo
            }
        });

        menItems.push({
            text: '安全退出',
            iconCls: 'fa fa-power-off',
            hrefTarget: '_self',
            handler: function () {
                //todo
            }
        });

        //用户头像图片
        var d = (new Date()).valueOf(),
            handler = '',
            src = '';

        //暂时把名称显示出来,以后要去掉的 只要把下面的注释给还原就行了
        tbar.push({
            xtype: 'headOnTopContainer',
            tag: 'head',
            layout: 'hbox',
            cls: 'iknow-tbar-head-panel',
            isShowIcon: true,
            showText: uName,
            margin: '0 10 0 0',
            width: 80,
            height: 50,
            subMenuItems: menItems,
            items: [{
                xtype: 'image',
                title: uName,
                cls: 'iknow-tbar-head',
                margin: '5 10 0 20',
                style: 'border-radius:35px;border-width:0px',
                width: 35,
                height: 35,
                src: src
            }, {
                xtype: 'tbtext',
                tag: 'action',
                margin: '15 10 0 10',
                //margin: '15 0 0 -10',
                //html: '<span style="font-family:icomoon; font-size:18px; color: #ffffff;" class="icon-icon110"></span>',
                html: ('<b style="color:#fff;font-size:12px">' + uName + '</b>') + '<span style="margin-left:5px;font-family:icomoon; font-size:18; color: #ffffff;" class="icon-icon110"></span>'
            }]
        });
        /***************头像结束****************/

        me.items = tbar;
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function () {
            //todo
        }
    }
});