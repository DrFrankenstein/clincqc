/// <reference path="~/scripts/closure-library/closure/goog/base.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/events.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/eventtype.js" />
/// <reference path="~/scripts/closure-library/closure/goog/dom/dom.js" />
/// <reference path="~/scripts/app/ui/main.js" />

// Main entry point

goog.require("goog.events");
goog.require("goog.events.EventType");
goog.require("goog.dom");

goog.require("clincqc.ui");

function main() {
    goog.events.listen(goog.dom.getWindow(), goog.events.EventType.LOAD, onLoad);
}

function onLoad(e) {
    clincqc.ui.init();
}