/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.top.personalContainer.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personalContainer-main',

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
    onMenuClick:function(btn){
        console.log(btn.tag);
    },
    //安全退出
    onLogOut: function () {
        console.log('onLogOut');
    }
});