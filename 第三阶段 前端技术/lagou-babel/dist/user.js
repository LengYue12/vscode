"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var name = "孙悟空";
var age = 30;
var fn = function fn() {
    return "\u6211\u662F" + name + "!\u6211\u4ECA\u5E74" + age + "\u5C81\u4E86!";
};

// 声明模块并导出
exports.a = name;
exports.b = age;
exports.c = fn;
