/// <reference path="~/scripts/closure-library/closure/goog/base.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/events.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/component.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/button.js" />

goog.provide("clincqc.ui.HomePanel");

goog.require("goog.events");
goog.require("goog.ui.Component");
goog.require("goog.ui.Button");

/** @constructor */
clincqc.ui.HomePanel = function(opt_domhelper) {
    goog.ui.Component.call(this, opt_domhelper);

    this.bNewRoute = new goog.ui.Button("New Route");
    this.addChild(this.bNewRoute, true);
};
goog.inherits(clincqc.ui.HomePanel, goog.ui.Component);

clincqc.ui.HomePanel.prototype.bNewRoute = null;