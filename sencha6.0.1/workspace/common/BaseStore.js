//已使用
Ext.define('common.baseStore', {
    alias: 'store.baseStore',
    extend: 'Ext.data.DirectStore',
    pageSize: 30,
    constructor: function (config) {
        config = Ext.apply({}, config);
        if (!config.proxy) {
            var proxy = {
                type: 'direct',
                reader: {
                    type: 'json',
                    'rootProperty': 'rows', 'messageProperty': 'message', 'idProperty': config.idProperty
                }
            };
            Ext.copyTo(proxy, config, 'paramOrder,paramsAsHash,directFn,api,simpleSortMode,extraParams');
            Ext.copyTo(proxy.reader, config, 'totalProperty,rootProperty,idProperty');
            config.proxy = proxy;
        }
        this.callParent([config]);
    }
});