/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('main.Application', {
    extend: 'Ext.app.Application',
    
    name: 'main',

    launch: function () {
        var me = this;
        me.viewport = Ext.widget("app-uxiframe");
        if (window.location.hash == '') {
            me.redirectTo('#/task');
        }
    },
    routes: {
        '/:name:parameter': {
            action: 'onRoutes',
            conditions: {
                ':parameter': '(\\?.*)?'
            }
        }
    },
    onRoutes: function (name, params) {
        var me = this,
            viewport = me.viewport,
            bannerBar = viewport.down('bannerBar'),
            treeList = viewport.down('lefttree'),
            frontTitle = bannerBar.down('[tag=frontTitle]'),
            backTitle = bannerBar.down('label[tag=backTitle]'),
            container = viewport.down('uxiframe');
        var url = '#/' + name;
        if (!!params)
            url += params;
        var isFront = ViewsSecurity.isFront(url);

        //前后切换时触发，switchFn包含加载菜单（此处加载的是将要切换到的菜单）和设置当前选中节点, 
        if (treeList.isFront != isFront)
            treeList.switchFn(url);
        else if (!treeList.hasLoaded) //刷新页面时触发，加载菜单（此处加载的是当前所在的菜单）并设置当前选中节点
            treeList.initMenu(url);
        else
            treeList.setCurrentSelection(treeList.down('treelist'), url); //页面内通过导航或者其他按钮跳转时触发，此时设置当前选中节点即可

        //如果是后台，但不是管理员则不让跳转到后台
        if (!isFront && !ViewsSecurity.isBackstageAdmin()) {
            return;
        }

        //根据前台 隐藏按钮
        var frontBtn = treeList.down('treelistbbar').down('button[tag=treelistBackBtn]'),
            backBtn = treeList.down('treelistbbar').down('button[tag=treelistSettingBtn]');

        if (frontBtn) {
            frontBtn.setHidden(isFront);
        }
        if (backBtn) {
            backBtn.setHidden(!isFront);
        }

        //根据前后台更换标题
        frontTitle.setHidden(!isFront);
        backTitle.setHidden(isFront);

        viewport.isFront = treeList.isFront = isFront;//记录当前是前台还是后台
        viewport.modelItem = name; //记录当前模块

        var names = me.getLeftBtnTag(name, params);
        document.title = names[1];

        var containUrl = 'http://' + window.location.host + '/apps/' + name + (params || '');
        container.load(containUrl);
    },
    //根据跳转模块获取对应的操作按钮名称
    getLeftBtnTag: function (name, params) {
        name = name.toLowerCase();
        switch (name) {
            case 'task':
                return ['task', '任务'];

            case 'copartner':
                return ['copartner', '供应商'];
            case 'client':
                return ['copartner', '客户'];

            case 'agreement':
                return ['service', '服务方案'];
            case 'salary':
                return ['service', '薪资账套'];

            case 'order':
                return !!params ? ['order', '供应商订单'] : ['order', '客户订单'];

            case 'employee':
                return ['employee', '雇员'];

            case 'settlement':
                return ['settlement', '凭证'];
            case 'requestbill':
                return ['settlement', '请款'];
            case 'writeoff':
                return ['settlement', '核销'];
            case 'expensesview':
                return ['settlement', '费用总览'];

            case 'invoice':
                return ['writeoff', '发票'];
            case 'accountrecord':
                return ['writeoff', '日记账'];
            case 'salaryemployee':
                return ['writeoff', '薪资发放'];

            case 'accountrecordview':
                return ['writeoff', '日记账细况'];
            case 'gather':
                return ['sspf', '采集'];
            case 'declaration':
                return ['sspf', '申报'];
            case 'alteration':
                return ['sspf', '调整单'];
            case 'globalorganization':
                return ['org', '组织结构'];
            case 'position':
                return ['position', '角色'];
            case 'userextend':
                return ['user', '用户'];

            case 'sspfstandard':
                return ['standard', '险金政策'];
            case 'standard':
                return ['standard', '服务标准'];

            case 'verifymatterflow':
                return ['verifyFlow', '审核流程'];

            case 'generalmatterflow':
                return ['matterFlow', '人事流程'];
            case 'sspfmatterflow':
                return ['matterFlow', '险金流程'];
            case 'othermatterflow':
                return ['matterFlow', '其他流程'];

            case 'settings':
                var settingType = params.split('=')[1],
                    settingTitle = '';
                if (settingType == 1) {
                    settingTitle = '公司抬头';
                } else if (settingType == 2) {
                    settingTitle = '业务账户';
                } else if (settingType == 3) {
                    settingTitle = '编码设置';
                } else if (settingType == 4) {
                    settingTitle = '定制设置';
                } else if (settingType == 5) {
                    settingTitle = '选项设置';
                } else if (settingType == 6) {
                    settingTitle = '财务设置';
                } else if (settingType == 7) {
                    settingTitle = '业务资料';
                }
                return ['setting', settingTitle];

            case 'permission':
                return ['tools', '权责总览'];
            case 'log':
                return ['tools', '日志总览'];
            case 'tools':
                return ['tools', '数据维护'];
            case 'employeeservice':
                return (!!params && params.indexOf('supplier') > -1) ? ['employeeservice', '供应商雇员名册'] : ['employeeservice', '客户雇员名册'];
            case 'employeeservicedetail':
                return (!!params && params.indexOf('supplier') > -1) ? ['employeeservicedetail', '供应商雇员服务'] : ['employeeservicedetail', '客户雇员服务'];
            default:
                return ['', ''];
        }
    }
});
