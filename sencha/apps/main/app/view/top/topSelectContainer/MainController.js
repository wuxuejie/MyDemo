/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.top.topSelectContainer.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.topSelectContainer-main',

    onAfterrender: function (tb, op) {
        var vm = this.getViewModel();
        tb.on({
            element: 'el',
            mouseover: this.mouseOver,
            mouseout: this.mouseOut,
            scope: tb
        });

        // tb.getEl().setStyle('cursor', 'pointer');
    },
    onMenuAfterrender:function(menu){
        menu.setItems(this.subMenuItems);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    mouseOver: function (tbEl, e, op) {
        var me = this,
            menu = this.getSubMenu();

        if (!menu) {
            return;
        }

        menu.isShowing = Ext.defer(function () {
            if (menu.isHidingMenu != 0) {
                clearTimeout(menu.isHidingMenu);
                menu.isHidingMenu = 0;
            }

            me.fnSetHtml('icon-icon115');

            if (menu.isVisible()) {
                return;
            }

            menu.showBy(me, "tr-br");
        }, 10, menu);
    },

    mouseOut: function (tbEl, e, op) {
        var me = this,
            menu = me.getSubMenu();

        var fromEl = tbEl.getRelatedTarget(),
          isChildEl = me.el.contains(fromEl) || (menu && menu.el && menu.el.contains(fromEl));

        if (isChildEl) {
            return;
        }

        if (!menu) {
            return;
        }

        if (!menu.isHidden()) {
            menu.isHidingMenu = Ext.defer(menu.hide, 10, menu);
        }
        else if (menu.isShowing) {
            clearTimeout(menu.isShowing);
        }
    }
});
