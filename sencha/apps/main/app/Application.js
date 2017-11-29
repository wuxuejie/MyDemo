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
    }
});
