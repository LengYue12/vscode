# 1.ES6

ES6是JavaScript语言的下一代标准	ES6就是js的全新版本，是js的升级版



## 2.1Node环境

**Node.js就是运行在服务端的JavaScript**

Node.js就是脱离浏览器环境运行的JavaScript程序，基于谷歌的V8引擎



在终端运行js文件	node 文件名



## 2.2 NPM环境

* npm就是仓库系统，管理Node.js包的

在终端中输入 npm -v  查看当前npm版本



* 项目初始化

  * dos命令	npm init	-y	默认值初始化
  * 最后会生成package.json文件，这个是包的配置文件，相当于maven的pom.xml

   

* 设置镜像和存储地址

  * 经过下面的配置，以后所有的 npm install 都会经过淘宝的镜像地址下载

    npm config set registry https://registry.npm.taobao.org

    

  * 设置npm下载包时保存在本地的地址（建议英文目录）

    npm config set prefix "E:\\repo_npm"

    

  * 查看npm配置信息

    npm config list



* 使用 **npm install 安装依赖包**的最新版
  * npm install jquery
* 安装指定版本库
  * npm install jquery@1.9.1



## 3. ES6的基本语法

**ES标准就是通用语法规则**



### 3.1 let声明变量

let和var声明变量有什么区别？

1. 作用域不同		var声明的变量是全局变量	let声明的变量是局部变量

```javascript
{
  var a = 0; // var声明的变量是全局变量
  let b = 0; // let声明的变量是局部变量
}
console.log(a);
console.log(b); //b is not defined：b没有定义
```

2. 声明次数不同			var 可以声明多次		let只能声明一次

```javascript
// var可以声明多次
// let只能声明一次
var m = 1;
var m = 2;
let n = 3;
let n = 4; //SyntaxError: Identifier 'n' has already been declared（语法错误：n已
经声明过了）
console.log(m);
console.log(n);
```

3. 声明与使用顺序不同		var 声明的便会全局存储		let 声明的变量只能在执行后才存储

```javascript
// var 声明的变量会全局存储
// let 声明的变量只能在执行后才存储
console.log( x ); //没有报错，输出：undefined
var x = "苹果";
console.log(y);  //y is not defined（y没有定义）
let y = "香蕉";
```



### 3.2 const声明常量

const声明常量，为只读变量，**一旦声明之后其值不允许改变，一旦声明必须初始化**

```js
const PI = 3.14;
```



### 3.3 解构赋值

是对赋值运算符的扩展，针对**数组**和**对象**进行模式匹配，然后对其中的变量进行赋值

* 数组解构

```javascript
var arr = [1,2,3];

// 传统的js
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a,b,c);

// es6的解构
var [x,y,z] = arr;
console.log(x,y,z);
```



* 对象解构

```javascript
var user = {
    username : "吕布",
    weapon : "方天画戟",
    horse:"赤兔马"
};

// 传统的js
let mingzi = user.username;
let wuqi = user.weapon;
let zuoji = user.horse;

console.log("姓名:" + mingzi + "武器:" + wuqi + "坐骑:" + zuoji);

// es6的解构
let {username,weapon,horse} = user; // 注意解构的变量名必须是对象中的属性名
console.log("姓名:" + username + "武器:" + weapon + "坐骑:" + horse);
```



### 3.4 模版字符串

加强版的字符串，用反引号**``**来定义多行字符串，还可以在字符串中加入变量和表达式

* 定义多行字符串            在``中直接回车就是换行的效果

```javascript
let str1 = `滚滚长江东逝水，
浪花淘去英雄，
是非成败转头空！`
console.log(str1);
```

* 字符串插入变量和表达式		在``中直接用${变量名}或${表达式}

```javascript
let name = "吴亦凡";
let age = 31;
// 传统的拼接字符串
var info1 = "我叫" + name + "我今年" + age + "岁了";
console.log(info1);
// es6的拼接字符串

var info2 = `我叫${name}我明年${age+1}岁了`;
console.log(info2);

```

* 字符串中调用函数		在``中直接用${函数名()}

```javascript
function test(){
    return "吃喝玩乐";
}

let str = `悲催的人生,从${test()}开始`;
console.log(str);
```



### 3.5 声明对象的简写

**定义对象的时候，可以用变量名作为属性名**

```javascript
let name = `吴亦凡`;
let age = 31;

// 传统的定义
let user1 = {
    name : name,
    age : age
};
console.log(user1);

// es6新语法中的简写
let user2 = {name,age};
console.log(user2);
```



### 3.6 定义方法简写	省略function

```javascript
 let name = `吴亦凡`;
let age = 31;

// 传统的定义
let user1 = {
    name : name,
    age : age
};
console.log(user1);

// es6新语法中的简写
let user2 = {name,age};
console.log(user2);
```



### 3.7 对象拓展运算符

{...}将参数对象中所有可以遍历的属性拿出来，然后拷贝给新对象

* 拷贝对象（深拷贝）

```javascript
let user1 = {
    name : "项羽",
    age : 34
};

let user2 = {...user1}; // 深拷贝（克隆）

console.log(user1);
console.log(user2);
```

* 合并对象

吞噬合并，两个对象合并成一个对象

```javascript
let user1 = {
    name : "项羽",
    age : 34
};

let user2 = {
    head : "诸葛亮"
};

let user = {...user1,...user2};

console.log(user);
```



### 3.8 函数的默认参数

形参位置已声明，但不传入实参

```javascript
function test(name, age = 18){
    console.log(`我叫${name},我今年${age}岁了`);
};

test("吕布",33);    // 我叫吕布,我今年33岁了
test("貂蝉");       // 我叫貂蝉,我今年18岁了 
test("关羽",null);  // 我叫关羽,我今年null岁了
test("马超","");    // 我叫马超,我今年岁了
test("张飞",undefined); // 我叫张飞,我今年18岁了
```



### 3.9 函数的不定参数

定义方法时，不确定有几个参数		形参传 ...arr数组

```javascript
function test( ...arg ){
    console.log(`传入了${arg.length}个参数`);
    for(var i = 0; i < arg.length; i++){
        console.log(arg[i]);
    }
}

test(1);
test(1,2);
test(1,2,3,4,5,6);
test("姜","维",50);
```



### 3.10 箭头函数

语法：参数 => 函数体

* 当箭头函数只有一个参数时，()可以省略

* 当箭头函数没有参数或者有多个参数，要用()括起来
* 当箭头函数的函数体有多行语句，用{}括起来，表示代码块
* 当只有一条语句，并且需要返回时，可以省略{}，结果会自动返回

```javascript
// 传统
var f1 = function(a){
    return a*10;
}

console.log(f1(10));

// es6  
var f2 = a => a*10;
console.log(f2(20));


var f3 = (a,b) => {
    let sum = a + b;
    return sum;
}
console.log(f3(3,7));

// 可以将f3进行简化
var f4 = (a,b) => a+b;
console.log(f4(11,22));
```



### 3.12 模块化

将一个js文件声明成一个模块导出后，另一个js文件才能引入这个模块	先导出，再引入



* 传统的模块化

user.js文件

```javascript
function addUser(name){
    return `保存${name}成功`;
}

function removeUser(id){
    return `删除${id}号用户！`
}

// 声明模块并导出
// module.exports = {
//     save : addUser,
//     delete : removeUser
// }

// 声明模块并导出的简写
module.exports={
    addUser,
    removeUser
}
```

test.js

```javascript
let user = require("./user.js");    // 引入user模块

console.log(user);

let result1 = user.addUser("吕布");
let result2 = user.removeUser(101);

console.log(result1);
console.log(result2);
```



* ES6的模块化	全新的语法

user.js

```javascript
let name = "孙悟空";
let age = 30;
let fn = function () {
    return `我是${name}!我今年${age}岁了!`
}

// 声明模块并导出
export {
    name,
    age,
    fn
};
```

test.js

```javascript
import {name,age,fn} from "./user.js"

console.log(name);
console.log(age);
console.log(fn());
```



### 3.13 babel环境

babel是一个**转码器**，可以将es6的代码转为es5的代码，从而在现有的环境中运行



* 安装babel客户端环境
  * 在终端中打开，运行命令：

```javascript
npm install --global babel-cli
```

* 查看版本

```javascript
babel --version
```



* 安装转码器	



### 3.14 ES6模块化的另一种写法

* as的用法
  * user.js：如果你不想暴露模块当中的变量名字，可以通过as来进行操作

```javascript
let name = "孙悟空";
let age = 30;
let fn = function () {
    return `我是${name}!我今年${age}岁了!`
}

// 声明模块并导出
export {
    name as a,
    age as b,
    fn as c
};
```

* test.js

```javascript
import {a,b,c} from "./user.js";

console.log(a);
console.log(b);
console.log(c());
```



* 也可以接收整个模块

就是把整个模块全部的内容加载到info变量里

test.js

```JavaScript
import * as info from "./user.js";	// 通过*来批量接收，as来指定接收的名字

console.log(info.a);
console.log(info.b);
console.log(info.c());

```



* 默认导出

可以将所有需要导出的变量放入一个对象中，然后通过default export进行导出

```javascript
/******************************导出*********************************/
export default{
    name:"吕布",
    eat(){
        return "吃点啥！";
    }
}

/******************************导入*********************************/
import p  from "./person.js";

console.log(p.name,p.eat());
```



* **重命名export和import**		导入和导出的重命名

如果导入的多个文件中，变量名字相同，即会产生命名冲突的问题，
为了解决该问题，ES6为提供了重命名的方法，当你在导入名称时可以这样做：

```javascript
/******************************student1.js*********************************/
export let name = "我是来自student1.js";

/******************************student2.js*********************************/
export let name = "我是来自student2.js";

/******************************test_student.js*********************************/
import {name as name1} from "./student1.js";
import {name as name2} from "./student2.js";

console.log(name1); //  我是来自student1.js
console.log(name2); //  我是来自student2.js
```

