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
        var vm = this.getViewModel();
        var isMicro = vm.get('isMicro');
        vm.set('isMicro', !isMicro);     
    }
});