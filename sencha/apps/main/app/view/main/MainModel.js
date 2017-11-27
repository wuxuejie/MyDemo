/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('main.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        cName:'IKNOW',
        name: 'main',
        isMicro: false,
        top:{
            companys:[],
            cName:'IKNOW',
            uName:'马云1',
            src:''
        }
    },
    formulas: {
        width: function (get) {
            return get('isMicro') ? 40 : 146;
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
