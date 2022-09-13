"use strict";

var _user = require("./user.js");

var info = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(info.a); // import {a,b,c} from "./user.js"

// console.log(a);
// console.log(b);
// console.log(c());

console.log(info.b);
console.log(info.c());
