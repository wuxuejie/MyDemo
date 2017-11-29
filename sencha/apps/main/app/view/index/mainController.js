
// export class app extends Ext.app.ViewController{
//     constructor(props) {
//         super(props);
//     }
//     alias = 'controller.index.main'
//     init = function () {
//         var isdate = common.Common
//         .isValidDate();
//         alert(`isdate:${isdate}`);
//     }
// }
Ext.define('main.view.index.mainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index.main',
    init: function () {
        var isdate = common.Common.isValidDate();
        
        Ext.toast(`isdate:${isdate}`, '', 't');
    }
});
