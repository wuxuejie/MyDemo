/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('main.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.appMain',
    xtype: 'app-main',
    requires: [
        'main.view.main.MainController',
        'main.view.main.MainModel', 
        'main.view.main.Top',
    ],
    xtype: 'app-uxiframe',
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    items: [{
        region: 'north',
        xtype: 'topBar',
        padding: '0 0 0 0'
    }, {
        xtype: 'leftBar',
        // collapsed:true,
        // collapsible:true,
        region: 'west',
        width: 146,
        bind: {
            width: '{width}',
        },
        scrollable: 'y',
        // cls: 'scrollbar',
        bodyStyle: 'background-color:#32404E',
        placeholder:{
            xtype: 'leftBar',
            width: 146,            
            bind: {
                width: '{width}',
            },
            scrollable: 'y',
            // cls: 'scrollbar',
            bodyStyle: 'background-color:#32404E',
        }
        // collapseMode:'mini',
        // placeholderCollapse1: function(direction, animate) {
        //     var me = this,
        //         ownerCt = me.ownerCt,
        //         collapseDir = direction || me.collapseDirection,
        //         floatCls = Ext.panel.Panel.floatCls,
        //         collapseTool = me.collapseTool,
        //         placeholder = me.getPlaceholder(collapseDir),
        //         slideInDirection;
     
        //     me.isCollapsingOrExpanding = 1;
     
        //     // Upcoming layout run will ignore this Component 
        //     me.setHiddenState(true);
        //     me.collapsed = collapseDir;
     
        //     if (placeholder.rendered) {
        //         // We may have been added to another Container from that in which we rendered the placeholder 
        //         if (placeholder.el.dom.parentNode !== me.el.dom.parentNode) {
        //             me.el.dom.parentNode.insertBefore(placeholder.el.dom, me.el.dom);
        //         }
     
        //         placeholder.hidden = false;
        //         placeholder.setHiddenState(false);
        //         placeholder.el.show();
        //         ownerCt.updateLayout();
        //     } else {
        //         placeholder.setWidth(73)
        //         ownerCt.insert(ownerCt.items.indexOf(me), placeholder);
        //     }
     
        //     if (me.rendered) {
        //         // We assume that if collapse was caused by keyboard action 
        //         // on focused collapse tool, the logical focus transition 
        //         // is to placeholder's expand tool. Note that it may not be 
        //         // the case when the user *clicked* collapse tool while focus 
        //         // was elsewhere; in that case we dare not touch focus 
        //         // to avoid sudden jumps. 
        //         if (collapseTool && Ext.ComponentManager.getActiveComponent() === collapseTool) {
        //             me.focusPlaceholderExpandTool = true;
        //         }
                
        //         // We MUST NOT hide using display because that resets all scroll information. 
        //         me.el.setVisibilityMode(me.placeholderCollapseHideMode);
                
        //         if (animate) {
        //             me.el.addCls(floatCls);
        //             placeholder.el.hide();
        //             slideInDirection = me.convertCollapseDir(collapseDir);
                    
        //             me.el.slideOut(slideInDirection, {
        //                 preserveScroll: true,
        //                 duration: Ext.Number.from(animate, Ext.fx.Anim.prototype.duration),
        //                 listeners: {
        //                     scope: me,
        //                     afteranimate: function() {
        //                         var me = this;
                                
        //                         me.el.removeCls(floatCls);
                                
        //                         /* We need to show the element so that slideIn will work correctly.
        //                          * However, if we leave it visible then it can be seen before
        //                          * the animation starts, causing a flicker. The solution,
        //                          * borrowed from date picker, is to hide it using display:none.
        //                          * The slideIn effect includes a call to fixDisplay() that will
        //                          * undo the display none at the appropriate time.
        //                          */
        //                         Ext.suspendLayouts();
        //                         me.placeholder.hide();
        //                         me.el.show();
        //                         me.collapsed = false;
        //                         me.setHiddenState(false);
                     
        //                         // Stop the center region from moving when laid out without the placeholder there. 
        //                         // Unless we are expanding from a floated out situation. In that case, it's laid out immediately. 
        //                         // if (center && !floatedPos) {
        //                         //     center.hidden = true;
        //                         // }
                     
        //                         Ext.resumeLayouts(true);
        //                         // center.hidden = false;
        //                         me.el.addCls(floatCls);

        //                         // me.placeholder.el.show().setStyle('display', 'none').slideIn(slideInDirection, {
        //                         //     easing: 'linear',
        //                         //     duration: 100,
        //                         //     listeners: {
        //                         //         afteranimate: me.doPlaceholderCollapse,
        //                         //         scope: me
        //                         //     }
        //                         // });
        //                     }
        //                 }
        //             });
        //         }
        //         else {
        //             me.el.hide();
        //             me.doPlaceholderCollapse();
        //         }
        //     }
        //     else {
        //         me.isCollapsingOrExpanding = 0;
        //         if (!me.preventCollapseFire) {
        //             me.fireEvent('collapse', me);
        //         }
        //     }
     
        //     return me;
        // },
        // placeholderCollapse: function (direction, animate) {
        //     var me = this,
        //         ownerCt = me.ownerCt,
        //         collapseDir = direction || me.collapseDirection,
        //         floatCls = Ext.panel.Panel.floatCls,
        //         collapseTool = me.collapseTool,
        //         placeholder = me.getPlaceholder(collapseDir),
        //         slideInDirection;

        //     me.isCollapsingOrExpanding = 1;

        //     // Upcoming layout run will ignore this Component 
        //     me.setHiddenState(true);
        //     me.collapsed = collapseDir;

        //     if (placeholder.rendered) {
        //         // We may have been added to another Container from that in which we rendered the placeholder 
        //         if (placeholder.el.dom.parentNode !== me.el.dom.parentNode) {
        //             me.el.dom.parentNode.insertBefore(placeholder.el.dom, me.el.dom);
        //         }

        //         placeholder.hidden = false;
        //         placeholder.setHiddenState(false);
        //         // placeholder.el.show();
        //         ownerCt.updateLayout();
        //     } else {
        //         placeholder.setWidth(73);
        //         ownerCt.insert(ownerCt.items.indexOf(me), placeholder);
        //     }

        //     if (me.rendered) {
        //         // We assume that if collapse was caused by keyboard action 
        //         // on focused collapse tool, the logical focus transition 
        //         // is to placeholder's expand tool. Note that it may not be 
        //         // the case when the user *clicked* collapse tool while focus 
        //         // was elsewhere; in that case we dare not touch focus 
        //         // to avoid sudden jumps. 
        //         if (collapseTool && Ext.ComponentManager.getActiveComponent() === collapseTool) {
        //             me.focusPlaceholderExpandTool = true;
        //         }

        //         // We MUST NOT hide using display because that resets all scroll information. 
        //         me.el.setVisibilityMode(me.placeholderCollapseHideMode);

        //         if (animate) {
        //             me.el.addCls(floatCls);
        //             placeholder.el.hide();
        //             slideInDirection = me.convertCollapseDir(collapseDir);

        //             me.el.slideOut(slideInDirection, {
        //                 preserveScroll: true,
        //                 duration: Ext.Number.from(animate, Ext.fx.Anim.prototype.duration),
        //                 listeners: {
        //                     scope: me,
        //                     afteranimate: function () {
        //                         var me = this;                                
        //                         // me.el.removeCls(floatCls);
        //                         Ext.suspendLayouts();
        //                         me.placeholder.hide();
        //                         me.el.show();
        //                         me.collapsed = false;
        //                         me.setHiddenState(false);
        //                         Ext.resumeLayouts(true);
        //                         me.el.addCls(floatCls);
        //                         // me.doPlaceholderCollapse();
        //                         // var me = this;
        //                         // Ext.suspendLayouts();
        //                         // me.placeholder.hide();
        //                         // me.show();
        //                         // me.el.show();
        //                         // me.collapsed = false;
        //                         // me.setHiddenState(false);
        //                         // Ext.resumeLayouts(true);
        //                         // // center.hidden = false;
        //                         // me.el.addCls(floatCls);
        //                     }
        //                 }
        //             });
        //         }
        //         else {
        //             me.el.hide();
        //             me.doPlaceholderCollapse();
        //         }
        //     }
        //     else {
        //         me.isCollapsingOrExpanding = 0;
        //         if (!me.preventCollapseFire) {
        //             me.fireEvent('collapse', me);
        //         }
        //     }

        //     return me;
        // },
        // placeholderExpand: function (animate) {
        //     var me = this,
        //         collapseDir = me.collapsed,
        //         expandTool = me.placeholder.expandTool,
        //         floatCls = Ext.panel.Panel.floatCls,
        //         center = me.ownerLayout ? me.ownerLayout.centerRegion : null,
        //         finalPos, floatedPos;

        //     // Layouts suspended - don't bother with animation shenanigans 
        //     if (Ext.Component.layoutSuspendCount) {
        //         animate = false;
        //     }

        //     if (me.floatedFromCollapse) {
        //         floatedPos = me.getPosition(true);
        //         // these are the same cleanups performed by the normal slideOut mechanism: 
        //         me.slideOutFloatedPanelBegin();
        //         me.slideOutFloatedPanelEnd();
        //         me.floated = false;
        //     }

        //     // We assume that if expand was caused by keyboard action on focused 
        //     // placeholder expand tool, the logical focus transition is to the 
        //     // panel header's collapse tool. 
        //     // Note that it may not be the case when the user *clicked* expand tool 
        //     // while focus was elsewhere; in that case we dare not touch focus to avoid 
        //     // sudden jumps. 
        //     if (expandTool && Ext.ComponentManager.getActiveComponent() === expandTool) {
        //         me.focusHeaderCollapseTool = true;

        //         // There is an odd issue with JAWS screen reader: when expanding a panel, 
        //         // it will announce Expand tool again before focus is forced to Collapse 
        //         // tool. I'm not sure why that happens since focus does not move from 
        //         // Expand tool during animation; this hack should work around 
        //         // the problem until we come up with more understanding and a proper 
        //         // solution. The attributes are restored below in doPlaceholderExpand. 
        //         expandTool._ariaRole = expandTool.ariaEl.dom.getAttribute('role');
        //         expandTool._ariaLabel = expandTool.ariaEl.dom.getAttribute('aria-label');

        //         expandTool.ariaEl.dom.setAttribute('role', 'presentation');
        //         expandTool.ariaEl.dom.removeAttribute('aria-label');
        //     }

        //     if (animate) {
        //         // Expand me and hide the placeholder 
        //         Ext.suspendLayouts();
        //         me.placeholder.hide();
        //         me.el.show();
        //         me.collapsed = false;
        //         me.setHiddenState(false);

        //         // Stop the center region from moving when laid out without the placeholder there. 
        //         // Unless we are expanding from a floated out situation. In that case, it's laid out immediately. 
        //         if (center && !floatedPos) {
        //             center.hidden = true;
        //         }

        //         Ext.resumeLayouts(true);
        //         center.hidden = false;
        //         me.el.addCls(floatCls);

        //         // At this point, this Panel is arranged in its correct, expanded layout. 
        //         // The center region has not been affected because it has been flagged as hidden. 
        //         // 
        //         // If we are proceeding from floated, the center region has also been arranged 
        //         // in its new layout to accommodate this expansion, so no further layout is needed, just 
        //         // element animation. 
        //         // 
        //         // If we are proceeding from fully collapsed, the center region has *not* been relayed out because 
        //         // the UI look and feel dictates that it stays stable until the expanding panel has slid in all the 
        //         // way, and *then* it snaps into place. 

        //         me.isCollapsingOrExpanding = 2;

        //         // Floated, move it back to the floated pos, and thence into the correct place 
        //         if (floatedPos) {
        //             finalPos = me.getXY();
        //             me.setLocalXY(floatedPos[0], floatedPos[1]);
        //             me.setXY([finalPos[0], finalPos[1]], {
        //                 duration: Ext.Number.from(animate, Ext.fx.Anim.prototype.duration),
        //                 listeners: {
        //                     scope: me,
        //                     afteranimate: function () {
        //                         var me = this;

        //                         me.el.removeCls(floatCls);
        //                         me.isCollapsingOrExpanding = 0;
        //                         me.fireEvent('expand', me);
        //                     }
        //                 }
        //             });
        //         }
        //         // Not floated, slide it in to the correct place 
        //         else {
        //             me.el.hide();
        //             me.placeholder.el.show();
        //             me.placeholder.hidden = false;

        //             // Slide this Component's el back into place, after which we lay out AGAIN 
        //             me.setHiddenState(false);
        //             me.el.slideIn(me.convertCollapseDir(collapseDir), {
        //                 preserveScroll: true,
        //                 duration: Ext.Number.from(animate, Ext.fx.Anim.prototype.duration),
        //                 listeners: {
        //                     afteranimate: me.doPlaceholderExpand,
        //                     scope: me
        //                 }
        //             });
        //         }
        //     }
        //     else {
        //         me.floated = me.collapsed = false;
        //         me.doPlaceholderExpand(true);
        //     }

        //     return me;
        // },
    }, {
        xtype: 'panel',
        name: 'app-container',
        region: 'center',
        layout: 'fit',
        items: [{
            xtype: 'index'
        }]
    }]

});