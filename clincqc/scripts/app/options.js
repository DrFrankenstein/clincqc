/// <reference path="~/scripts/google-maps-3-vs-1-0.js" />
/// <reference path="~/scripts/closure-library/closure/goog/base.js" />

goog.provide("clincqc.options");

clincqc.options.getCentre = function() {
    return new google.maps.LatLng(47.07, -74.23);
};

clincqc.options.getZoom = function() {
    return 6;
};

clincqc.options.getInitMapOptions = function() {
    return {
        center:     this.getCentre(),
        zoom:       this.getZoom(),
        mapTypeId:  google.maps.MapTypeId.ROADMAP
    };
};