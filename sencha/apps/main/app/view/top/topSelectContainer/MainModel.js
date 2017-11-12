/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('main.view.top.topSelectContainer.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.topSelectContainer-main',

    data: {
        onOver:false,
        iconClass:'icon-icon110',
        htmlValue:function (record) {
            ('<b style="color:#fff;font-size:12px">{uName}</b>') + '<span style="margin-left:5px;font-family:icomoon; font-size:18; color: #ffffff;" class="{iconClass}"></span>'
        },
        uName:'asdfasd'
    }

    //TODO - add data, formulas and/or methods to support your view
});
