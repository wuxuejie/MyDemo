Ext.define('common.control.grid.MainGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mainGrid',
    requires: [
        'Ext.grid.Panel',
        'Ext.ux.PreviewPlugin'
    ],
    scroll: 'both',
    titleField: '',
    collapsedWidth: 300,//缩进后宽度必须是300（列宽+起来） 
    viewConfig: {
        enableTextSelection: true //主列表不允许复制单元格值
    },
    bodyStyle: 'border-left-width:0 !important;',
    firstLoad: true
});
