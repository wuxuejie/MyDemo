/**
 * Created by Jerry Tang @20161229
 * 适配器功能
 * 1、识别各应用
 * 2、实现对各应用的banner和navigation的处理
 * 3、实现对各应用内部模块跳转的处理
 */
Ext.define('Adapter', {
    config: {
        packageVersion: '1.2.2',
        homeUrl: 'http://192.168.1.225/ui/homepage',
        moaUrl: 'http://192.168.1.225',
        addressUrl: 'http://192.168.1.225/address',
        logoutUrl: 'http://192.168.1.225'
    },
    statics: {
        /**
         * 获得应用下拉框显示的应用数据
         */
        getShowAppBtnData: function (data) {
            var appBtnData = data,
                    showAppBtnData = [];//希望显示的应用按钮

            Ext.each(appBtnData, function (item, index) {
                //人事服务(EHR)1011
                //屏蔽运维中心(服务中心||OSS)1012
                switch (item.appId) {
                    //case 1011:
                    case 1012:
                        item.isHidden = true;
                        break;
                }
            });

            for (var i = 0; i < appBtnData.length; i++) {
                if (appBtnData[i].isHidden != true) {
                    showAppBtnData.push(appBtnData[i])
                }
            }

            return showAppBtnData;
        },
        /**
         * 构建应用下拉框显示的应用列表panel
         */
        getAppBtnPanel: function (viewModel) {
            var appBtnPanel = {
                xtype: 'dataview',
                bind: { store: "{appsBtn}" },
                tpl: [
                     '<div class="apps-box">',
                        '<ul>',
                     '<tpl for=".">',
                         '<li class="appBtn" style="cursor:pointer;background-color:{color};">',
                            '<i class="{icon}"></i>',
                            '<p>{appName}</p>',
                            '</li>',
                         '</tpl>',
                         '</ul>',
                     '</div>'
                ],
                itemSelector: 'li.appBtn',
                listeners: {
                    itemmouseenter: function () {
                    },
                    itemClick: function (obj, record, item, index, e, eOpts) {
                        var appId = record.data.appId;
                        window.open(record.data.linkaddr + "?member_token=" + viewModel.get("token"), "_blank");
                    }
                }
            };
            return appBtnPanel;
        },

        /**
         * 左侧导航树的返回前台
         */
        getTreelistBacktoFrontBtn: function () {
            var isFront = ViewsSecurity.isFront(window.location.hash) || window.location.hash.length == 0;

            var backtoFrontBtn = {
                xtype: 'button',
                text: '返回前台',
                tag: 'treelistBackBtn',
                iconCls: 'fa icon-uniE920',
                ui: 'button-text-grey',
                href: '#/task',
                hrefTarget: '_self',
                hidden: isFront
            };

            return backtoFrontBtn;
        },
        /**
         * 左侧导航树的后台设置
         */
        getTreelistSettingBtn: function () {
            var TreelistSettingBtn = {
                xtype: 'displayfield'
            };
            //是否是管理员
            var isBackAdmin = ViewsSecurity.isBackstageAdmin();
            var isFront = ViewsSecurity.isFront(window.location.hash) || window.location.hash.length == 0;
            if (isBackAdmin) {
                TreelistSettingBtn = {
                    xtype: 'button',
                    text: '后台设置',
                    tag: 'treelistSettingBtn',
                    iconCls: 'fa top-icon2b',
                    ui: 'button-text-grey',
                    href: '#/globalorganization',
                    hrefTarget: '_self',
                    hidden: !isFront
                };
            }

            return TreelistSettingBtn;
        },

        //设置导航节点树的滚动条
        getScrollbar: function (obj) {
            var scrollObj = obj;

            scrollObj.getEl().on('mouseenter', function () {
                scrollObj.setScrollable('y');
            }, scrollObj);

            scrollObj.getEl().on('mouseleave', function () {
                scrollObj.setScrollable(false);
            }, scrollObj);
        }
    }
});