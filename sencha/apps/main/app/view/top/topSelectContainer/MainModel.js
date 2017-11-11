/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('main.view.top.topSelectContainer.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.topSelectContainer-main',

    data: {
        onOver:false,
        htmlValue:function (record) {
            return 'wxj'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
