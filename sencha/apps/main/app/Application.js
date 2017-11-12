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
    // onRoutes: function (name, params) {
    //     // var me = this,
    //     //     viewport = me.viewport,
    //     //     bannerBar = viewport.down('bannerBar'),
    //     //     treeList = viewport.down('lefttree'),
    //     //     frontTitle = "bannerBar.down('[tag=frontTitle]')",
    //     //     backTitle = "bannerBar.down('label[tag=backTitle]')",
    //     //     container = viewport.down('uxiframe');
    //     // var url = '#/' + name;
    //     // if (!!params)
    //     //     url += params;
    //     // var isFront = "ViewsSecurity.isFront(url)";

    //     // //前锟斤拷锟叫伙拷时锟斤拷锟斤拷锟斤拷switchFn锟斤拷锟斤拷锟斤拷锟截菜碉拷锟斤拷锟剿达拷锟斤拷锟截碉拷锟角斤拷要锟叫伙拷锟斤拷锟侥菜碉拷锟斤拷锟斤拷锟斤拷锟矫碉拷前选锟叫节碉拷, 
    //     // if (treeList.isFront != isFront)
    //     //     treeList.switchFn(url);
    //     // else if (!treeList.hasLoaded) //刷锟斤拷页锟斤拷时锟斤拷锟斤拷锟斤拷锟斤拷锟截菜碉拷锟斤拷锟剿达拷锟斤拷锟截碉拷锟角碉拷前锟斤拷锟节的菜碉拷锟斤拷锟斤拷锟斤拷锟矫碉拷前选锟叫节碉拷
    //     //     treeList.initMenu(url);
    //     // else
    //     //     treeList.setCurrentSelection(treeList.down('treelist'), url); //页锟斤拷锟斤拷通锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷钮锟斤拷转时锟斤拷锟斤拷锟斤拷锟斤拷时锟斤拷锟矫碉拷前选锟叫节点即锟斤拷

    //     // //锟斤拷锟斤拷呛锟教�锟斤拷锟斤拷锟斤拷锟角癸拷锟斤拷员锟斤拷锟斤拷锟斤拷转锟斤拷锟斤拷台
    //     // if (!isFront && !ViewsSecurity.isBackstageAdmin()) {
    //     //     return;
    //     // }

    //     // //锟斤拷锟斤拷前台 锟斤拷锟截帮拷钮
    //     // var frontBtn = treeList.down('treelistbbar').down('button[tag=treelistBackBtn]'),
    //     //     backBtn = treeList.down('treelistbbar').down('button[tag=treelistSettingBtn]');

    //     // if (frontBtn) {
    //     //     frontBtn.setHidden(isFront);
    //     // }
    //     // if (backBtn) {
    //     //     backBtn.setHidden(!isFront);
    //     // }

    //     // //锟斤拷锟斤拷前锟斤拷台锟斤拷锟斤拷锟斤拷锟斤拷
    //     // frontTitle.setHidden(!isFront);
    //     // backTitle.setHidden(isFront);

    //     // viewport.isFront = treeList.isFront = isFront;//锟斤拷录锟斤拷前锟斤拷前台锟斤拷锟角猴拷台
    //     // viewport.modelItem = name; //锟斤拷录锟斤拷前模锟斤拷

    //     // var names = me.getLeftBtnTag(name, params);
    //     // document.title = names[1];

    //     // var containUrl = 'http://' + window.location.host + '/apps/' + name + (params || '');
    //     // container.load(containUrl);
    // },
    // //锟斤拷锟斤拷锟斤拷转模锟斤拷锟饺★拷锟接︼拷牟锟斤拷锟斤拷锟脚ワ拷锟斤拷锟�
    // getLeftBtnTag: function (name, params) {
    //     name = name.toLowerCase();
    //     switch (name) {
    //         case 'task':
    //             return ['task', '锟斤拷锟斤拷'];

    //         case 'copartner':
    //             return ['copartner', '锟斤拷应锟斤拷'];
    //         case 'client':
    //             return ['copartner', '锟酵伙拷'];

    //         case 'agreement':
    //             return ['service', '锟斤拷锟今方帮拷'];
    //         case 'salary':
    //             return ['service', '薪锟斤拷锟斤拷锟斤拷'];

    //         case 'order':
    //             return !!params ? ['order', '锟斤拷应锟教讹拷锟斤拷'] : ['order', '锟酵伙拷锟斤拷锟斤拷'];

    //         case 'employee':
    //             return ['employee', '锟斤拷员'];

    //         case 'settlement':
    //             return ['settlement', '凭证'];
    //         case 'requestbill':
    //             return ['settlement', '锟斤拷锟�'];
    //         case 'writeoff':
    //             return ['settlement', '锟斤拷锟斤拷'];
    //         case 'expensesview':
    //             return ['settlement', '锟斤拷锟斤拷锟斤拷锟斤拷'];

    //         case 'invoice':
    //             return ['writeoff', '锟斤拷票'];
    //         case 'accountrecord':
    //             return ['writeoff', '锟秸硷拷锟斤拷'];
    //         case 'salaryemployee':
    //             return ['writeoff', '薪锟绞凤拷锟斤拷'];

    //         case 'accountrecordview':
    //             return ['writeoff', '锟秸硷拷锟斤拷细锟斤拷'];
    //         case 'gather':
    //             return ['sspf', '锟缴硷拷'];
    //         case 'declaration':
    //             return ['sspf', '锟疥报'];
    //         case 'alteration':
    //             return ['sspf', '锟斤拷锟斤拷锟斤拷'];
    //         case 'globalorganization':
    //             return ['org', '锟斤拷织锟结构'];
    //         case 'position':
    //             return ['position', '锟斤拷色'];
    //         case 'userextend':
    //             return ['user', '锟矫伙拷'];

    //         case 'sspfstandard':
    //             return ['standard', '锟秸斤拷锟斤拷锟斤拷'];
    //         case 'standard':
    //             return ['standard', '锟斤拷锟斤拷锟阶�'];

    //         case 'verifymatterflow':
    //             return ['verifyFlow', '锟斤拷锟斤拷锟斤拷锟�'];

    //         case 'generalmatterflow':
    //             return ['matterFlow', '锟斤拷锟斤拷锟斤拷锟斤拷'];
    //         case 'sspfmatterflow':
    //             return ['matterFlow', '锟秸斤拷锟斤拷锟斤拷'];
    //         case 'othermatterflow':
    //             return ['matterFlow', '锟斤拷锟斤拷锟斤拷锟斤拷'];

    //         case 'settings':
    //             var settingType = params.split('=')[1],
    //                 settingTitle = '';
    //             if (settingType == 1) {
    //                 settingTitle = '锟斤拷司抬头';
    //             } else if (settingType == 2) {
    //                 settingTitle = '业锟斤拷锟剿伙拷';
    //             } else if (settingType == 3) {
    //                 settingTitle = '锟斤拷锟斤拷锟斤拷锟斤拷';
    //             } else if (settingType == 4) {
    //                 settingTitle = '锟斤拷锟斤拷锟斤拷锟斤拷';
    //             } else if (settingType == 5) {
    //                 settingTitle = '选锟斤拷锟斤拷锟斤拷';
    //             } else if (settingType == 6) {
    //                 settingTitle = '锟斤拷锟斤拷锟斤拷锟斤拷';
    //             } else if (settingType == 7) {
    //                 settingTitle = '业锟斤拷锟斤拷锟斤拷';
    //             }
    //             return ['setting', settingTitle];

    //         case 'permission':
    //             return ['tools', '权锟斤拷锟斤拷锟斤拷'];
    //         case 'log':
    //             return ['tools', '锟斤拷志锟斤拷锟斤拷'];
    //         case 'tools':
    //             return ['tools', '锟斤拷锟斤拷维锟斤拷'];
    //         case 'employeeservice':
    //             return (!!params && params.indexOf('supplier') > -1) ? ['employeeservice', '锟斤拷应锟教癸拷员锟斤拷锟斤拷'] : ['employeeservice', '锟酵伙拷锟斤拷员锟斤拷锟斤拷'];
    //         case 'employeeservicedetail':
    //             return (!!params && params.indexOf('supplier') > -1) ? ['employeeservicedetail', '锟斤拷应锟教癸拷员锟斤拷锟斤拷'] : ['employeeservicedetail', '锟酵伙拷锟斤拷员锟斤拷锟斤拷'];
    //         default:
    //             return ['', ''];
    //     }
    // }
});
