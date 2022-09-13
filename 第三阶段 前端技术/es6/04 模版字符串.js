/*
let str = "1\n2";

console.log(str);

let str1 = `滚滚长江东逝水，
浪花淘去英雄，
是非成败转头空！`
console.log(str1);
*/
// ------------------------------------

/*
let name = "吴亦凡";
let age = 31;
// 传统的拼接字符串
var info1 = "我叫" + name + "我今年" + age + "岁了";
console.log(info1);
// es6的拼接字符串

var info2 = `我叫${name}我明年${age+1}岁了`;
console.log(info2);
*/

// -------------------

function test(){
    return "吃喝玩乐";
}

let str = `悲催的人生,从${test()}开始`;
console.log(str);
