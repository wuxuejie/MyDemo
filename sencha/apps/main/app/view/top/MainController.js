/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.top.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onAfterrender: function () {
        console.log('onAfterrender');
    },
    
    onMenuClick:function(btn){
        debugger;
        console.log('onMenuClick');

    },
    //安全退出
    onLogOut:function(){
        console.log('onLogOut');

    }
});
