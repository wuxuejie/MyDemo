Ext.define('common.Common', {
    singleton: true,
    getToday: function () {
        var me = this,
            clientToday = Ext.Date.format(new Date(), 'Y-m-d');
        if (me.today != clientToday) {
            Ext.Ajax.request({
                async: false,
                url: '/handler/global.ashx',
                params: {
                    action: 'GetToday'
                },
                success: function (response, opts) {
                    me.today = Ext.Date.format(new Date(), 'Y-m-d');
                },
                failure: function (response, opts) {
                    me.today = clientToday;
                }
            });
        }

        return me.today;
    },
    /// <summary>
    /// 判断日期是否为有效日期
    /// </summary>
    /// <param name="val">传入的日期</param>
    /// <returns>有效日期：true,否则：false</returns>  
    isValidDate: function (date) {
        try {
            if (!date || date == null || date == '') return false;
            if (date instanceof Date) {
                var y = date.getFullYear();
                return y < 2079 && y > 1900;
            }
            var year = new Date(date).getFullYear();
            return year < 2079 && year > 1900;
        } catch (e) {
            return false;
        }
    }
});
