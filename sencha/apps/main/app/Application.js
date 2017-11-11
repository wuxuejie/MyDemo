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

        //ǰ���л�ʱ������switchFn�������ز˵����˴����ص��ǽ�Ҫ�л����Ĳ˵��������õ�ǰѡ�нڵ�, 
        if (treeList.isFront != isFront)
            treeList.switchFn(url);
        else if (!treeList.hasLoaded) //ˢ��ҳ��ʱ���������ز˵����˴����ص��ǵ�ǰ���ڵĲ˵��������õ�ǰѡ�нڵ�
            treeList.initMenu(url);
        else
            treeList.setCurrentSelection(treeList.down('treelist'), url); //ҳ����ͨ����������������ť��תʱ��������ʱ���õ�ǰѡ�нڵ㼴��

        //����Ǻ�̨�������ǹ���Ա������ת����̨
        if (!isFront && !ViewsSecurity.isBackstageAdmin()) {
            return;
        }

        //����ǰ̨ ���ذ�ť
        var frontBtn = treeList.down('treelistbbar').down('button[tag=treelistBackBtn]'),
            backBtn = treeList.down('treelistbbar').down('button[tag=treelistSettingBtn]');

        if (frontBtn) {
            frontBtn.setHidden(isFront);
        }
        if (backBtn) {
            backBtn.setHidden(!isFront);
        }

        //����ǰ��̨��������
        frontTitle.setHidden(!isFront);
        backTitle.setHidden(isFront);

        viewport.isFront = treeList.isFront = isFront;//��¼��ǰ��ǰ̨���Ǻ�̨
        viewport.modelItem = name; //��¼��ǰģ��

        var names = me.getLeftBtnTag(name, params);
        document.title = names[1];

        var containUrl = 'http://' + window.location.host + '/apps/' + name + (params || '');
        container.load(containUrl);
    },
    //������תģ���ȡ��Ӧ�Ĳ�����ť����
    getLeftBtnTag: function (name, params) {
        name = name.toLowerCase();
        switch (name) {
            case 'task':
                return ['task', '����'];

            case 'copartner':
                return ['copartner', '��Ӧ��'];
            case 'client':
                return ['copartner', '�ͻ�'];

            case 'agreement':
                return ['service', '���񷽰�'];
            case 'salary':
                return ['service', 'н������'];

            case 'order':
                return !!params ? ['order', '��Ӧ�̶���'] : ['order', '�ͻ�����'];

            case 'employee':
                return ['employee', '��Ա'];

            case 'settlement':
                return ['settlement', 'ƾ֤'];
            case 'requestbill':
                return ['settlement', '���'];
            case 'writeoff':
                return ['settlement', '����'];
            case 'expensesview':
                return ['settlement', '��������'];

            case 'invoice':
                return ['writeoff', '��Ʊ'];
            case 'accountrecord':
                return ['writeoff', '�ռ���'];
            case 'salaryemployee':
                return ['writeoff', 'н�ʷ���'];

            case 'accountrecordview':
                return ['writeoff', '�ռ���ϸ��'];
            case 'gather':
                return ['sspf', '�ɼ�'];
            case 'declaration':
                return ['sspf', '�걨'];
            case 'alteration':
                return ['sspf', '������'];
            case 'globalorganization':
                return ['org', '��֯�ṹ'];
            case 'position':
                return ['position', '��ɫ'];
            case 'userextend':
                return ['user', '�û�'];

            case 'sspfstandard':
                return ['standard', '�ս�����'];
            case 'standard':
                return ['standard', '�����׼'];

            case 'verifymatterflow':
                return ['verifyFlow', '�������'];

            case 'generalmatterflow':
                return ['matterFlow', '��������'];
            case 'sspfmatterflow':
                return ['matterFlow', '�ս�����'];
            case 'othermatterflow':
                return ['matterFlow', '��������'];

            case 'settings':
                var settingType = params.split('=')[1],
                    settingTitle = '';
                if (settingType == 1) {
                    settingTitle = '��˾̧ͷ';
                } else if (settingType == 2) {
                    settingTitle = 'ҵ���˻�';
                } else if (settingType == 3) {
                    settingTitle = '��������';
                } else if (settingType == 4) {
                    settingTitle = '��������';
                } else if (settingType == 5) {
                    settingTitle = 'ѡ������';
                } else if (settingType == 6) {
                    settingTitle = '��������';
                } else if (settingType == 7) {
                    settingTitle = 'ҵ������';
                }
                return ['setting', settingTitle];

            case 'permission':
                return ['tools', 'Ȩ������'];
            case 'log':
                return ['tools', '��־����'];
            case 'tools':
                return ['tools', '����ά��'];
            case 'employeeservice':
                return (!!params && params.indexOf('supplier') > -1) ? ['employeeservice', '��Ӧ�̹�Ա����'] : ['employeeservice', '�ͻ���Ա����'];
            case 'employeeservicedetail':
                return (!!params && params.indexOf('supplier') > -1) ? ['employeeservicedetail', '��Ӧ�̹�Ա����'] : ['employeeservicedetail', '�ͻ���Ա����'];
            default:
                return ['', ''];
        }
    }
});
