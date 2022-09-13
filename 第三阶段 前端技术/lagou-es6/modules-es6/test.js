// import {a,b,c} from "./user.js";

// console.log(a);
// console.log(b);
// console.log( c() );
import * as info from "./user.js";  // 通过*来批量接收，as来指定接收的名字

console.log(info.a);
console.log(info.b);
console.log( info.c() );