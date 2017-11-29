Ext.define('main.view.staff.mainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.staff-main',
    requires: [
        'common.baseStore'
   ],
   
    stores: {
        mainStore: {
            type: 'baseStore',
            fields:[ 'name', 'email', 'phone'],
            data: [
                { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
                { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
            ]
        }
    }

});
