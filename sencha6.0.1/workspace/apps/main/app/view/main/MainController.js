/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onSwitchBar: function (btn) {
        var me = this,
            vm = me.getViewModel();
        var isMicro = vm.get('isMicro');
        var left = me.getView();
        vm.set('isMicro', !isMicro);  
        if(!isMicro){
            left.collapse();
        }else{
            left.expand();
        }    
    },

    onMenuClick: function (btn) {
        console.log(btn.tag);

        switch (parseInt(btn.tag)) {
            case 1:
                alert('个人中心');
                break;
            case 2:
                //管理中心
                break;
            case 3:
                //版本说明
                break;
            case 4:
                //安全退出
                break;
            default:
                break;
        }

    },
    
    mouseOver: function (tbEl, e, op) {
        var me = this,
            menu = Ext.getCmp('option'),
            vm = this.getViewModel();

        if (menu && menu.isVisible()) {
            return;
        }
        vm.set('iconClass', 'icon-icon115');        
        setTimeout(function () { menu.showBy(me.view, "tr-br");}, 10);
    },

    mouseOut: function (tbEl, e, op) {
        var me = this,
            menu = Ext.getCmp('option'),
            vm = this.getViewModel();
        var fromEl = e.getRelatedTarget(),
            isChildEl = me.view.el.contains(fromEl) || menu.el.contains(fromEl);
        if (isChildEl) {
            return;
        }
        if (menu && !menu.isHidden()) {
            menu.hide();
            vm.set('iconClass', 'icon-icon110');
        }
    },
    
    onGoHome: function () {
        Ext.toast('返回主页', '', 't');
    }
});