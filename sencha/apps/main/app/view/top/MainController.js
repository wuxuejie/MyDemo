/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.top.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.top-main',
    // init: function () {
    //     var vm = this.getViewModel();
    //     var userNmae = vm.get('uName');

    //     this.getView().setHtml('<span style="font-weight: bold;color:#fff;padding:0 20px">' + userNmae + '<span>');

    // },
    // onAfterrender: function () {
    //     var vm = this.getViewModel();
    //     var userNmae = vm.get('uName');

    //     this.getView().setHtml('<span style="font-weight: bold;color:#fff;padding:0 20px">' + userNmae + '<span>');
    // },

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
    onGoHome: function () {
        Ext.toast('返回主页', '', 't');

    }
});