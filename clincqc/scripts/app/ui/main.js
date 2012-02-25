/// <reference path="~/scripts/google-maps-3-vs-1-0.js" />
/// <reference path="~/scripts/closure-library/closure/goog/base.js" />
/// <reference path="~/scripts/closure-library/closure/goog/dom/dom.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/events.js" />
/// <reference path="~/scripts/closure-library/closure/goog/events/eventtype.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/component.js" />
/// <reference path="~/scripts/closure-library/closure/goog/ui/splitpane.js" />
/// <reference path="~/scripts/closure-library/closure/goog/style/style.js" />
/// <reference path="~/scripts/closure-library/closure/goog/dom/viewportsizemonitor.js" />
/// <reference path="~/scripts/app/ui/map.js" />
/// <reference path="~/scripts/app/ui/panelstack.js" />
/// <reference path="~/scripts/app/options.js" />

goog.provide("clincqc.ui");

goog.require("goog.dom");
goog.require("goog.events");
goog.require("goog.events.EventType");
goog.require("goog.ui.SplitPane");
goog.require("goog.ui.SplitPane.Orientation");
goog.require("goog.ui.Component");
goog.require("goog.dom.ViewportSizeMonitor");
goog.require("goog.style");
goog.require("clincqc.ui.Map");
goog.require("clincqc.ui.PanelStack");
goog.require("clincqc.ui.HomePanel");
goog.require("clincqc.options");

clincqc.ui.map = null;
clincqc.ui.gmap = null;

clincqc.ui.splitPane = null;
clincqc.ui.pnlUi = null;
clincqc.ui.panelStack = [];

clincqc.ui.sizemon = null;

clincqc.ui.init = function() {
    this.pnlUi = new clincqc.ui.PanelStack();
    this.pnlUi.push(new clincqc.ui.HomePanel());
    this.map = new clincqc.ui.Map(clincqc.options.getInitMapOptions());

    this.splitPane = new goog.ui.SplitPane(this.pnlUi, this.map, goog.ui.SplitPane.Orientation.HORIZONTAL);
    this.splitPane.render(goog.dom.getDocument().body);
    goog.style.setHeight(this.splitPane.getElement(), "100%");
    this.splitPane.setFirstComponentSize(300);
    
    goog.events.listen(this.splitPane, goog.ui.Component.EventType.CHANGE, goog.bind(this.map.notifyResize, this.map));

    this.sizemon = new goog.dom.ViewportSizeMonitor();
    goog.events.listen(this.sizemon, goog.events.EventType.RESIZE, this.handleWindowResize_);

    this.gmap = this.map.getMap();
};

clincqc.ui.handleWindowResize_ = function(e) {
    clincqc.ui.splitPane.setSize(clincqc.ui.sizemon.getSize());
};