
Ext.define("main.view.staff.main",{
    extend: "common.control.grid.MainGrid",
    alias: 'widget.staff',
    requires: [
        "main.view.staff.mainController",
        "main.view.staff.mainModel"
    ],
    controller: "staff-main",
    viewModel:"staff-main",
    bind: { store: '{mainStore}' },
    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
});
