/// <reference path="~/scripts/google-maps-3-vs-1-0.js" />
/// <reference path="~/scripts/closure-library/closure/goog/base.js" />
/// <reference path="~/scripts/closure-library/closure/goog/array/array.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/events.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/component.js" />
/// <reference path="~/scripts/closure-library/closure/goog/style/style.js" />

goog.provide("clincqc.ui.PanelStack");

goog.require("goog.array");
goog.require("goog.events");
goog.require("goog.ui.Component");

/** @constructor */
clincqc.ui.PanelStack = function(opt_domhelper, opt_initpanel) {
    goog.ui.Component.call(this, opt_domhelper);

    if(goog.isDef(opt_initpanel)) this.stack = [opt_initpanel];
};
goog.inherits(clincqc.ui.PanelStack, goog.ui.Component);

goog.mixin(clincqc.ui.PanelStack.prototype, {
    stack: [],
    push: function(panel) {
        if(this.stack.length > 0)
        {
            goog.array.peek(this.stack).getElement().style.display = "none";
        }

        this.addChild(panel, true);
        this.stack.push(panel);
    },
    pop: function() {
        var panel = this.stack.pop();
        this.removeChild(panel);

        goog.array.peek(this.stack).getElement().style.display = "";
    }
});
