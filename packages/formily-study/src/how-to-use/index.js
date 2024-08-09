"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@formily/reactive/src/index");
var observableData = (0, index_1.observable)({
    age: 18,
});
(0, index_1.autorun)(function () {
    console.log(observableData.age);
});
