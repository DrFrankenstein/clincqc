/// <reference path="~/scripts/google-maps-3-vs-1-0.js" />
/// <reference path="~/scripts/closure-library/closure/goog/base.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/events.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/event.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/component.js" />
/// <reference path="~/scripts/closure-library/closure/goog/style/style.js" />

goog.provide("clincqc.ui.RouteEditor");

goog.require("goog.ui.Component");
goog.require("goog.events");
goog.require("goog.events.Event");

/** @constructor */
clincqc.ui.RouteEditor = function(route, opt_domhelper) {
    goog.ui.Component.call(this, opt_domhelper);
    
    if(route === null)
    {
    }    
};
goog.inherits(clincqc.ui.RouteEditor, goog.ui.Component);

/** @enum {Number} */
clincqc.ui.RouteEditor.EditMode = {
    INACTIVE: 0,
    START_POINT: 1,
    END_POINT: 2
};

goog.mixin(clincqc.ui.RouteEditor.prototype, {
    stick: true,
    active: true,

    mode: clincqc.ui.RouteEditor.EditMode.INACTIVE,

    activate: function() {
        this.active = true;
        goog.events.dispatchEvent(this, goog.events.Event(goog.ui.Component.EventType.ACTIVATE, this));
    },
    deactivate: function() {
        this.active = false;
        goog.events.dispatchEvent(this, goog.events.Event(goog.ui.Component.EventType.DEACTIVATE, this));
    },

    setMode: function(mode) {
        switch(mode)
        {
        case clincqc.ui.RouteEditor.EditMode.INACTIVE:
            break;
        }
    }
});