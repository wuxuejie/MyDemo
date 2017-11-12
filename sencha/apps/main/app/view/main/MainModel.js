/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('main.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'main',
        isMicro: false
    },
    formulas: {
        width: function (get) {
            return get('isMicro') ? 73 : 146;
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
