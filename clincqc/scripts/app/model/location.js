/// <reference path="~/scripts/closure-library/closure/goog/base.js" />

goog.provide("clincqc.model.Location");

clincqc.model.Location = function (id, parentid, code, name) {
    this.id = id;
    this.parentid = parentid;
    this.code = code;
    this.name = name;
};

Location.prototype = {
    id: null,
    parentid: null,
    parent: null,
    code: "",
    name: "",

    fetchParent: function() {
    }
};