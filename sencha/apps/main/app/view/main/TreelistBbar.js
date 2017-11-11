Ext.define('main.treeListBbar', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'treelistbbar',
    requires: [
        'Adapter'
    ],
    defaults: {
        height: 41
    },
    style: 'padding:0px;margin:0px;text-align:center;border-top:1px solid #283541;',
    initComponent: function () {
        var me = this,
            settingBtn,
            backtoFrontBtn,
            itemArray = [];

        settingBtn = Adapter.getTreelistSettingBtn();
        backtoFrontBtn = Adapter.getTreelistBacktoFrontBtn();

        itemArray = itemArray
                .concat(settingBtn)
                .concat(backtoFrontBtn);

        me.callParent();
        me.add(itemArray);
    }
});