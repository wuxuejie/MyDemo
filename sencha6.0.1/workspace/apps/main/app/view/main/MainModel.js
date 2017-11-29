/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('main.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
<<<<<<< HEAD:sencha6.0.1/workspace/apps/main/app/view/main/MainModel.js
        cName:'IKNOW',
        name: 'main',
        isMicro: false,
        top:{
            companys:[],
            cName:'IKNOW',
            uName:'马云1',
            src:''
        }
=======
        isMicro: false
>>>>>>> 098cb46d6419887c517c7d8fe70d5ea422b7ac1f:sencha/apps/main/app/view/left/MainModel.js
    },
    formulas: {
        width: function (get) {
            return get('isMicro') ? 40 : 146;
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
