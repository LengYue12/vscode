/*
{
    var a = "唐心"; // var声明的变量是全局变量
    let b = "玲玲"; // let声明的变量是局部变量
}

console.log(a);
console.log(b); // b is not defined: b没有定义
*/

// ---------------------------------------

/*
var m = "吴亦凡";
var m = "蔡徐坤";
let n = "邓伦";
let n = "郑爽"; // SyntaxError: Identifier 'n' has already been declared(语法错误：n已经声明过了)

console.log(m);
console.log(n);
*/

// -----------------------------------

// var 声明的变量会全局存储
console.log(x); // undefined
var x = "西瓜";

console.log(y);
let y = "苹果";