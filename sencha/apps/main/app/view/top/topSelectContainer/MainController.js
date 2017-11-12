/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.top.topSelectContainer.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.topSelectContainer-main',

    mouseOver: function (tbEl, e, op) {
        var me = this,
            menu = Ext.getCmp('option'),
            vm = this.getViewModel();

        if (menu && menu.isVisible()) {
            return;
        }
        
        vm.set('iconClass', 'icon-icon115');
        menu.showBy(me.view, "tr-br");
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
    fnSetHtml: function (gly) {
        var me = this.view;
        var tbtext = me.down('tbtext[tag=action]');
        if (!tbtext) {
            return;
        }
        var html = '<b style="color:#fff;font-size:12px;">' + (me.showText || '') + '</b>';
        if (me.isShowIcon) {
            html += '<span style="margin-left:5px;font-family:icomoon; font-size:18; color: #ffffff;" class="' + gly + '"></span>';
        }
        tbtext.setConfig('html', html);
    },

    //安全退出
    onLogOut: function () {
        console.log('onLogOut');
    }
});