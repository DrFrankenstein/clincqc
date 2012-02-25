/// <reference path="~/scripts/google-maps-3-vs-1-0.js" />
/// <reference path="~/scripts/closure-library/closure/goog/base.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/events.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/component.js" />
/// <reference path="~/scripts/closure-library/closure/goog/style/style.js" />

goog.provide("clincqc.ui.Map");

goog.require("goog.events");
goog.require("goog.ui.Component");
goog.require("goog.style");

/** @constructor */
clincqc.ui.Map = function(opt_options, opt_domhelper) {
    goog.ui.Component.call(this, opt_domhelper);

    this.options = opt_options || {};
};
goog.inherits(clincqc.ui.Map, goog.ui.Component);

clincqc.ui.Map.prototype.options = {};
clincqc.ui.Map.prototype.map = null;

clincqc.ui.Map.prototype.enterDocument = function() {
    clincqc.ui.Map.superClass_.enterDocument.call(this);

    this.map = new google.maps.Map(this.getElement(), this.options);
    goog.style.setHeight(this.getElement(), "100%");
};

clincqc.ui.Map.prototype.getMap = function() {
    return this.map;
};

clincqc.ui.Map.prototype.notifyResize = function () {
    google.maps.event.trigger(this.map, "resize");
};