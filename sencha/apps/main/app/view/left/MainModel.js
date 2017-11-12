/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('main.view.left.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.left-main',

    data: {
        isMicro: false,width:73
    },
    formulas: {
        width: function (get) {
            return get('isMicro') ? 73 : 146;
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});