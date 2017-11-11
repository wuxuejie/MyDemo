Ext.define('ViewsSecurity', {
    statics: {
        isFront: function (url) {
            var arrayFront = [
             "#/agreement",
             "#/employeeservice",
             "#/employeeservice?supplier",
             "#/employeeservicedetail",
             "#/employeeservicedetail?supplier",
             "#/order",
             "#/order?supplier",
             "#/employeematerial",
             "#/salary",
             "#/settlement",
             "#/task",
             "#/systemset",
             "#/requestbill",
             "#/writeoff",
             "#/invoice",
             "#/accountrecord",

             "#/overview",
             "#/gather",
             "#/declaration",
             "#/client",
             "#/alteration",
             "#/copartner",
             "#/employee",
             "#/accountrecordview",
             "#/expensesview",
             "#/salaryemployee"
            ];
            var front = false;
            Ext.each(arrayFront, function (item) {
                if (url.indexOf('?') >= 0)
                    url = url.substring(0, url.indexOf('?'));

                if (Ext.String.endsWith(url, item, true) || Ext.String.endsWith(url, item + 'index.aspx', true)) {
                    front = true;
                    return false;
                }
            });
            return front;
        },
        findModule: function (xtype) {
            var modules = Security.Modules,
                module;
            Ext.Array.each(modules, function (item) {
                if (xtype.toLowerCase() == item.XType.toLowerCase()) {
                    module = item.Code;
                    return false;
                }
            });
            return module;
        },
        findXtype: function (module) {
            var modules = Security.Modules,
                xtype;
            Ext.Array.each(modules, function (item) {
                if (module.toLowerCase() == item.Code.toLowerCase()) {
                    xtype = item.XType;
                    return false;
                }
            });
            return xtype;
        },
        existsCommissioners: function (item) {
            var commissioners = Security.Ticket.Account.Commissioners;
            if (commissioners == undefined) {
                return false;
            }
            var z = Ext.Array.contains(commissioners, item);
            return z;
        },
        existsUsers: function (item) {
            var Users = Security.Ticket.Account.Users;
            var z = false;
            Ext.Array.each(Users, function (a) {
                if (a.UserId == item) {
                    z = true;
                    return false;
                }
            });
            return z;
        },
        getDefaultCommissioner: function (item) {
            var Users = Security.Ticket.Account
            var z = null;
            Ext.Array.each(Users, function (a) {
                if (Ext.Array.contains(a.Commissioners, item)) {
                    z = { UserId: Users.UserId, UserName: Users.UserName };
                    return false;
                }
            });
            return z;
        },
        getHrefText: function (href, text, target, attr) {
            return Ext.String.format('<a href="{0}" target="{2}" {3}>{1}</a>', href, text, target || '_self', attr || '');
        },
        getFrontItems: function () {
            var me = this,
                //fModules = Security.Ticket.Modules;
                fModules = [];
            frontModules = [], modules = [], isContains = false;

            var task = { iconCls: 'fa icon-uniE930', text: me.getHrefText('#/task', '任务'), name: 'task', leaf: true, isFront: true, parentId: 'root', href: '#/task', hrefTarget: '_self' },
                copartner = { iconCls: 'fa icon-uniE92F', text: '客户/供应商', name: 'copartner', isFront: true, children: [], selectable: false },
                service = { iconCls: 'fa icon-uniE92D', text: '服务约定', name: 'service', isFront: true, children: [], selectable: false },
                order = { iconCls: 'fa icon-uniE927', text: '服务订单', name: 'order', isFront: true, children: [], selectable: false },
                employee = { iconCls: 'fa icon-uniE92E', text: me.getHrefText('#/employee', '服务雇员'), name: 'employee', leaf: true, isFront: true, href: '#/employee', hrefTarget: '_self' },
                settlement = { iconCls: 'fa icon-uniE92C', text: '费用', name: 'settlement', isFront: true, children: [], selectable: false },
                writeoff = { iconCls: 'fa icon-uniE92A', text: '财务', name: 'writeoff', isFront: true, children: [], selectable: false },
                tools = { iconCls: 'fa icon-uniE92B', text: '应用工具', name: 'tools', isFront: true, children: [], selectable: false },
                sspf = { iconCls: 'fa icon-uniE929', text: '险金管理', name: 'sspf', isFront: true, children: [], selectable: false };
                //report = { iconCls: 'fa icon-uniE928', text: me.getHrefText(_iknowConstant.reportUrl + Security.Ticket.LogigToken, '报表', '_blank', 'onclick="void(0);"'), href: _iknowConstant.reportUrl + Security.Ticket.LogigToken, hrefTarget: '_blank', leaf: true, isFront: true };


            Ext.Object.each(fModules, function (key, value, myself) {
                var lkey = key.toLowerCase();
                if (lkey == 'salarysets') {
                    lkey = 'salary';
                } else if (lkey == 'verification') {
                    lkey = 'writeoff';
                }
                else if (lkey == 'billing') {
                    lkey = 'requestbill'
                } else if (lkey == 'personal') {
                    lkey = 'employee';
                } else if (lkey == 'customer') {
                    lkey = 'client';
                }
                modules.push(lkey);
            });

            //任务
            frontModules.push(task);

            //客户、供应商
            if (Ext.Array.contains(modules, 'client')) {
                copartner.children.push({
                    href: '#/client',
                    leaf: true,
                    text: me.getHrefText('#/client', '客户')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'copartner')) {
                copartner.children.push({
                    href: '#/copartner',
                    leaf: true,
                    text: me.getHrefText('#/copartner', '供应商')
                });
                isContains = true;
            }
            if (isContains) {
                frontModules.push(copartner);
                isContains = false;
            }

            //服务方案、薪资账套
            if (Ext.Array.contains(modules, 'agreement')) {
                service.children.push({
                    href: '#/agreement',
                    leaf: true,
                    text: me.getHrefText('#/agreement', '服务方案')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'salary')) {
                service.children.push({
                    href: '#/salary',
                    leaf: true,
                    text: me.getHrefText('#/salary', '薪资账套')
                });
                isContains = true;
            }
            if (isContains) {
                frontModules.push(service);
                isContains = false;
            }

            if (Ext.Array.contains(modules, 'employeeservice')) {
                order.children.push({
                    href: '#/employeeservice',
                    text: me.getHrefText('#/employeeservice', '客户雇员名册'),
                    leaf: true
                });
                order.children.push({
                    href: '#/employeeservice?supplier',
                    text: me.getHrefText('#/employeeservice?supplier', '供应商雇员名册'),
                    leaf: true
                });
                order.children.push({
                    href: '#/employeeservicedetail',
                    text: me.getHrefText('#/employeeservicedetail', '客户雇员服务'),
                    leaf: true
                });
                order.children.push({
                    href: '#/employeeservicedetail?supplier',
                    text: me.getHrefText('#/employeeservicedetail?supplier', '供应商雇员服务'),
                    leaf: true
                });
                order.children.push({
                    href: '#/order',
                    text: me.getHrefText('#/order', '客户服务订单'),
                    leaf: true
                });
                order.children.push({
                    href: '#/order?supplier',
                    text: me.getHrefText('#/order?supplier', '供应商服务订单'),
                    leaf: true
                });
                //order.children.push({
                //    //href: '#/employeematerial',
                //    text: '雇员资料', //me.getHrefText('#/employeematerial', '雇员资料'),
                //    leaf: true
                //});

                frontModules.push(order);
            }


            //服务雇员
            if (Ext.Array.contains(modules, 'employee')) {
                frontModules.push(employee);
            }

            //费用
            if (Ext.Array.contains(modules, 'settlement')) {
                settlement.children.push({
                    href: '#/settlement',
                    leaf: true,
                    text: me.getHrefText('#/settlement', '结算')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'requestbill')) {
                settlement.children.push({
                    href: '#/requestbill',
                    leaf: true,
                    text: me.getHrefText('#/requestbill', '请款')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'writeoff')) {
                settlement.children.push({
                    href: '#/writeoff',
                    leaf: true,
                    text: me.getHrefText('#/writeoff', '核销')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'expensesview')) {
                settlement.children.push({
                    href: '#/expensesview',
                    leaf: true,
                    text: me.getHrefText('#/expensesview', '费用总览')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'salaryemployee')) {
                settlement.children.push({
                    href: '#/salaryemployee',
                    leaf: true,
                    text: me.getHrefText('#/salaryemployee', '薪资总览')
                });
                isContains = true;
            }
            if (isContains) {
                frontModules.push(settlement);
                isContains = false;
            }

            //财务
            if (Ext.Array.contains(modules, 'invoice')) {
                writeoff.children.push({
                    href: '#/invoice',
                    leaf: true,
                    text: me.getHrefText('#/invoice', '发票')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'accountrecord')) {
                writeoff.children.push({
                    href: '#/accountrecord',
                    leaf: true,
                    text: me.getHrefText('#/accountrecord', '日记账')
                });
                isContains = true;
            }
            if (isContains) {
                frontModules.push(writeoff);
                isContains = false;
            }

            //险金管理
            if (Ext.Array.contains(modules, 'gather')) {
                sspf.children.push({
                    href: '#/gather',
                    leaf: true,
                    text: me.getHrefText('#/gather', '险金采集')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'declaration')) {
                sspf.children.push({
                    href: '#/declaration',
                    leaf: true,
                    text: me.getHrefText('#/declaration', '险金申报')
                });
                isContains = true;
            }
            if (Ext.Array.contains(modules, 'alteration')) {
                sspf.children.push({
                    href: '#/alteration',
                    leaf: true,
                    text: me.getHrefText('#/alteration', '险金调整')
                });
                isContains = true;
            }
            if (isContains) {
                frontModules.push(sspf);
                isContains = false;
            }

            //应用工具
            tools.children.push({
                text: '电子资料',
                leaf: true,
                tooltip: '敬请期待'
            });
            tools.children.push({
                text: '事件记录',
                leaf: true,
                tooltip: '敬请期待'
            });
            tools.children.push({
                text: '群发邮件',
                leaf: true,
                tooltip: '敬请期待'
            });
            tools.children.push({
                text: '群发短信',
                leaf: true,
                tooltip: '敬请期待'
            });
            tools.children.push({
                href: 'http://' + window.location.host + '/WeixinBackGround',
                hrefTarget: '_blank',
                leaf: true,
                text: me.getHrefText('http://' + window.location.host + '/WeixinBackGround', '微信', '_blank', 'onclick="void(0);"')
            });
            frontModules.push(tools);

            //报表
            //frontModules.push(report);

            return frontModules;
        },
        getBackItems: function () {
            var me = this,
                //bModules = Security.Ticket.BackstageModules;
            bModules = [];
            var backModules = [];

            var org = { iconCls: 'fa icon-uniE926', text: me.getHrefText('#/globalorganization', '组织结构'), name: 'org', leaf: true, isFront: false, href: '#/globalorganization', hrefTarget: '_self' },
                position = { iconCls: 'fa icon-uniE925', text: me.getHrefText('#/position', '角色'), name: 'position', leaf: true, isFront: false, href: '#/position', hrefTarget: '_self' },
                user = { iconCls: 'fa icon-uniE92F', text: me.getHrefText('#/userextend', '用户'), name: 'user', leaf: true, isFront: false, href: '#/userextend', hrefTarget: '_self' },
                standard = { iconCls: 'fa icon-uniE924', text: '标准', name: 'standard', isFront: false, children: [], selectable: false },
                verifyFlow = { iconCls: 'fa icon-uniE923', text: me.getHrefText('#/verifymatterflow', '审核流程'), name: 'verifyFlow', leaf: true, isFront: false, href: '#/verifymatterflow', hrefTarget: '_self' },
                matterFlow = { iconCls: 'fa icon-uniE922', text: '事项流程', name: 'matterFlow', isFront: false, children: [], selectable: false },
                tool = { iconCls: 'fa icon-uniE920', text: '数据维护', name: 'tool', isFront: false, children: [], selectable: false },
                setting = { iconCls: 'fa icon-uniE921', text: '设置', name: 'setting', isFront: false, children: [], selectable: false };

            Ext.Object.each(bModules, function (key, value, myself) {
                var lkey = key.toLowerCase();
                if (lkey == "standarditemsets") {
                    lkey = "standard";
                } else if (lkey == "othersetting") {
                    lkey = "settings";
                }
            });

            //组织结构
            backModules.push(org);

            //角色
            backModules.push(position);

            //用户
            backModules.push(user);

            //标准
            standard.children.push({
                href: '#/sspfstandard',
                leaf: true,
                text: me.getHrefText('#/sspfstandard', '险金政策')
            });
            standard.children.push({
                href: '#/standard',
                leaf: true,
                text: me.getHrefText('#/standard', '服务标准')
            });
            backModules.push(standard);


            //审核流程
            backModules.push(verifyFlow);

            //事项流程
            matterFlow.children.push({
                href: '#/generalmatterflow',
                leaf: true,
                text: me.getHrefText('#/generalmatterflow', '人事流程')
            });
            matterFlow.children.push({
                href: '#/sspfmatterflow',
                leaf: true,
                text: me.getHrefText('#/sspfmatterflow', '险金流程')
            });
            matterFlow.children.push({
                href: '#/othermatterflow',
                leaf: true,
                text: me.getHrefText('#/othermatterflow', '其他流程')
            });
            backModules.push(matterFlow);


            //数据维护
            tool.children.push({
                href: '#/permission',
                leaf: true,
                text: me.getHrefText('#/permission', '权责总览')
            }, {
                href: '#/log',
                leaf: true,
                text: me.getHrefText('#/log', '日志总览')
            }, {
                href: '#/tools',
                leaf: true,
                text: me.getHrefText('#/tools', '数据清除')
            }, {
                text: '数据调整',
                leaf: true,
                tooltip: '敬请期待'
            }, {
                text: '初始设置',
                leaf: true,
                tooltip: '敬请期待'
            }, {
                text: '初始数据',
                leaf: true,
                tooltip: '敬请期待'
            });
            backModules.push(tool);

            //设置
            setting.children.push({
                href: '#/settings?settingType=1',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=1', '公司抬头')
            }, {
                href: '#/settings?settingType=7',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=7', '业务资料')
            }, {
                href: '#/settings?settingType=2',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=2', '业务账户')
            }, {
                href: '#/settings?settingType=6',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=6', '财务设置')
            }, {
                href: '#/settings?settingType=3',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=3', '编码设置')
            }, {
                href: '#/settings?settingType=4',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=4', '定制设置')
            }, {
                href: '#/settings?settingType=5',
                leaf: true,
                text: me.getHrefText('#/settings?settingType=5', '选项设置')
            });
            backModules.push(setting);

            return backModules;
        },
        isBackstageAdmin: function () {
            return true;
        }
    }
});