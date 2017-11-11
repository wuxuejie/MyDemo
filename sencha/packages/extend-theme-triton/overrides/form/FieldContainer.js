Ext.define("IKnow.form.FieldContainer", {
    override: "Ext.form.FieldContainer",
    initComponent: function () {
        var me = this;
        if (me.allowBlank === false) {
            me.beforeLabelTextTpl = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        }

        //带文字的提示
        if (me.questionText) {
            me.afterLabelTextTpl = Ext.String.format('<span class="fa fa-question-circle" style="color:{0};font-size:15px;padding-right:2px;float:right;" data-qtip="{1}"></span>', me.questionColor || '#FEAAAB', me.questionText);
        }//只显示符号 没有文字的提示
        else if (me.questionSimble) {
            me.afterLabelTextTpl = Ext.String.format('<span class="fa fa-question-circle" style="color:{0};font-size:15px;padding-right:2px;float:right;" id="{1}"></span>', me.questionColor || '#FEAAAB', me.getId() + 'span');
        }
        me.callParent();
    }
});