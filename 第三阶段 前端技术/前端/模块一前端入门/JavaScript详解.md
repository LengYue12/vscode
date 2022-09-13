# JavaScript详解

JavaScript是一种网页编程技术，用来向HTML页面添加交互行为

## 1. js的组成
* ECMAScript:定义**核心语法**，关键字，运算符等系列标准
* DOM：文档对象模型，js为了方便操作HTMl页面而形成的DOM对象                  DOM是操控HTML页面用的
* BOM：浏览器对象模型，是对浏览器窗口进行访问和操作                                    BOM是操控浏览器用的



## 2. HTML与JavaScript结合方式

如何在HTML页面中使用JS

### 2.1 行内脚本

在标签的里面用js代码

### 2.2 内部脚本

使用<script></script>

标准写在<head>和<body>之间

### 2.3 外部脚本

<script src="js/xx.js"></script>

以上使用脚本的优先级，谁在上，谁先执行



## 3.JavaScript的使用

### 3.1 变量

* 因为js是弱类型语言，所以，在定义变量的时候，所有的数据类型都是var                       声明时用var                          本身有number，String，布尔类型
* 数值类型：number
  * 不区分整型数值和浮点型数值
  * 所有数字都采用64位
* 字符串：String
  * 首尾由单引号或双引号括起                    转义：\
* 布尔类型
  * true和false	也代表1和0
  * 实际运算中true=1，false=0



#### 3.1.1 自动类型转换

数字 + 字符串 ：数字转换为字符串		10 + 'a' -> 10a

数字 + 布尔值：true转换为1，false转换为0	true+5 -> 6

字符串 + 布尔值：布尔值转换为字符串true或false	true+'a' -> truea

布尔值 + 布尔值 ： 布尔值转换为数值1或0	true+true -> 2



#### 3.1.2 数据类型转换函数

* parseInt：强制转换为整数
  * 如果不能转换，则返回NaN(NaN属性用于指示某个值不是数字，如果不是数字就返回NaN)
  * 如：parseInt("6.32") = 6
* parseFloat：强制转换成浮点数
  * 如果不能转换，则返回NaN
  * parseFloat("6.32") = 6.32
* typeof：查询数值当前类型，返回string/number/boolean/object
  * 如：typeof("test"+3) = "string"



#### 3.1.3 null与undefined

* null 空引用，代表"没有值" 或 "无对象"

* undefined 未定义     声明了变量但从未赋值或者对象属性不存在

  

####3.1.4 算术运算 





#### 3.1.5 关系运算

* 严格相等：===

  * 类型相同
  * 数值相同

  判断值：==

* 非严格相等：!==





#### 3.1.6 逻辑运算

* 逻辑非(!)、逻辑与(&&)、逻辑或(||)
* 逻辑运算的操作数均为boolean表达式



* 我要吃两碗拉面**或者**10个包子才能吃饱！问题是，我只吃了两碗面，饱了！我只吃10个包子，饱了！
* 我要吃两碗拉面**并且**10个包子才能吃饱！问题是，我只吃了两碗面，没饱！我只吃了10个包子，没饱！



#### 3.1.7 控制语句

if else, if elseif else, switch() case, for, while





### 3.2 常用字符串API

* length:获取字符串的长度（字符串中字符的个数） 属性，没有小括号                  
  * var str = "hello";		str.length;
* toUpperCase/toLowerCase :转大小写
  * var name = "zhangfei";	大写name.toUpperCase();	小写name.toLowerCase();
* charAt(下标) ： 返回某个下标上的字符
  * str.charAt(x);		str.charCodeAt(x);	在Unicode编码中的编号
* indexof(字符)：查找字符串中字符出现的首次下标
* lastIndexof(字符)：查找字符串中字符最后一次出现的下标
* substring(开始,结束)：截取字符串中一部分（结束是不包含的）
  * 在长字符串中提取子字符串

* replace(旧的,新的)：将字符串中的旧字符替换成新字符
* split(分割的节点)：一个字符串切割成N个小字符串，所以返回的是数组类型、



### 3.3 数组

#### 3.3.1 创建数组

var arr1 = new Array();

#### 3.3.2 初始化数组的三种方式

```js
// 第一种
var arr1 = new Array();
arr1[0] = 110;
arr1[1] = 119;
arr1[2] = 120;

// 第二种
var arr1 = new Array(10,"a", true);
// 第三种
var arr1 = [10, "a", true];

for(var i = 0; i < arr1.length; i++) {
	console.log(arr[i]);
}
```

#### 3.3.3 数组的常用的方法

* toString():将数组转换为字符串

  ```javascript
  var arr = [1,2,3,4];
  str = arr.toString();	// 将数组转换成字符串
  console.log(str + "类型为:" + typeof(str));
  ```

* join(连接符号)：将数组中每个元素用连接符号连接成一个新的字符串

```JavaScript
var arr = [1,2,3,4];
var str = arr.join("-");	// 将数组中每个元素用-进行连接，并形成一个全新的字符串
console.log(str + "类型为:" + typeof(str));	// 1-2-3-4 类型为：string
```

* concat(新元素);将原来的数组连接新元素，原数组不变。

```JavaScript
var arr = [1,2,3,4];
var arrnew = arr.concat(5,6);	// 在arr数组的后面添加新得元素，形成一个新数组，但是原数组是不变的
console.log(arrnew + "，类型为：" + typeof(arr2));	// 1,2,3,4,5,6	类型为	：object	
console.log("原数组：" + arr);		// 原数组：1,2,3,4
```

* slice(开始，结束)：在数组中提取一部分，形成新的数组

  * 1,2,3,4,5	slice(2,4)	结果：3,4

  ```JavaScript
  var arr = ['a','b','c','d','e','f','g','h'];
  var arrnew = arr.slice(2,4);	// 在arr数组中截取，从下标2开始(包含)，4结束(不包含)
  console.log(arrnew);	// ["c","d"]
  ```

* reverse(): 数组的反转(倒序)

  ```JavaScript
  var arr = [21,34,23,555];
  console.log(arr.toString());	// 21,34,23,555
  arr.reverse();	// 将数组中元素倒置
  console.log(arr.toString());	// 555,23,34,21
  ```

* sort():数组排序

  * arr.sort() 字符排序
  * arr.sort(func) 数值排序

  ```javascript
  var arr = [31,12,111,444];
  arr.sort();		// 字符排序（不会按照字面量的大小排）
  console.log(arr);	//[12,111,31,444] 
  
  
  var arr = [21,34,23,555];
  arr.sort(pai);		// 数字排序（会按照字面量的大小排）
  console.log(arr);	//[12,31,111,444]
  
  // 定义排序函数
  function pai(a,b){
  	return a-b;
  }
  ```



#### 3.4 Math数学对象

* Math对象用于执行数学任务
* 没有构造函数 Math()
* 直接把Math 作为对象使调用方法

```javascript
// 返回0~9之间任意一个随机数字
	var i = Math.random() * 10;
	var j = Math.floor(i);
	console.log(j);
```



#### 3.5 Number对象

Number.fixed(2);	自带四舍五入技能

```JavaScript
var n = new Number(12.345);
var n1 = n.toFixed(2);	// 12.35，固定两位小数，第三位小数四舍五入
console.log(n1);

var x = new Number(12.3);
var n2 = x.toFixed(2);	// 12.30，固定两位小数，位数不够，0来补齐
console.log(n2);
```



#### 3.6 正则表达式

对字符串执行模胡匹配的强大工具

```javascript
// 方式1
var age = "18";	// 判断：1~3位纯数字
var reg = /^\d{1,3}$/;	// 以/^开始，中间写正则内容，以$/结束
var b = reg.test(age);	// 验证age变量是否符号reg的匹配
if(b == true) {
	console.log("验证通过！");
} else{
	console.log("格式错误");
}

// 方式2
var name = "abc123";	// 大小写字母和数字的组合(特殊字符不能出现),5~8位
var reg = new regExp("^[a-z][A-Z][0-9]{5,8}$");	// 以^开始，中间写正则内容，以$结束
if(reg.test(name)) {
	console.log("验证通过！");
} else {
	console.log("格式错误");
}
```



####  3.7 日期对象

```javascript
var time = new Date();
var year = time.getFullYear();	// 年份
var month = time.getMonth() + 1;	// 月份从0开始，11结束，所以要加1
var day = time.getDate();		// 几号
var hour = time.getHours();		// 几点
var min = time.getMinutes();	// 分钟
var ss = time.getSeconds();		// 秒
var ms = time.getMilliseconds();	// 毫秒


var timestr = year + "年" + month + "月" + day + "号" + hour + "点" + min + "分" + ss + "秒" + ms + "毫秒";
console.log(timestr);
```



#### 3.8 函数

使用function定义函数

```javascript
function 函数名(形参列表){
	// 函数体
	return 返回值;
}
```

* 函数声明后不会执行，必须调用时才会执行
* 注意：
  * 形参：一定不要带数据类型
  * 函数后面不写分号

####  3.8.1 无返回值

```javascript
function qiuhe(a,b){
	var he = a + b;
	alert("两数之和：" + he);
}
qiuhe(3,4);
```

####  3.8.2 有返回值

```javascript
function qiuhe(a,b){
	var he = a + b;
	return "两数之和：" + he;
}
var s = qiuhe(3,4);
alert(s);
```

####  3.8.3 参数对象

在函数里面，可以参数列表的属性

```javascript
function test(a,b,c){
	console.log("传入" + arguments.length + "个参数");	// 3
	console.log("第2个参数是：" + arguments[1]):	// 2
}
test(1,2,3);
```

####  3.8.4 构造函数

使用function函数构造器来定义一个函数

```javascript
var fn = new function("a","b","return a * b");
var ji = fn(3,4);
console.log(ji);	// 12
```

####  3.8.5 匿名函数

没有名的函数

```javascript
var fn = function(a,b){	// 没有名字的函数，应该用一个变量来接收
	return a*10 + b;
}
console.log(fn(3,4));	// 34	
```

####  3.8.6 全局函数

* isNaN：检查其参数是否是**非数字值**    检测是否为数字，不是数字为true，是数字为false

  ```javascript
  console.log(isNaN(123));	// 数字，false
  console.log(isNaN("hello"));	// 非数字，返回true
  ```

* eval：用来转换字符串的运算

  ```javascript
  var str = "1+3";
  console.log(str); // 1+3, +会认定为一种字符符号而已，没有加法的作用
  
  console.log(eval(str));	// 4 	让字符串中的运算符号生效
  ```

* encodeURl与decodeURI

  ```javascript
  var name = "拉勾网";
  console.log(name);
  name = encodeURl(name);
  console.log("转码后：" + name);	
  name = decodeURl(name);
  console.log("解码后：" + name);	
  ```



#### 3.8.7 闭包

全局变量和局部变量

```javascript
a = 10;	// 全局变量，声明的时候可以不使用var
function test1(){
	b = 20;	// 不使用var声明的变量就是全局变量
	var c = 30;	// 用var声明，并且在函数的内部。这样的变量叫做局部变量，有效范围只能在其声明的函数内部 
	console.log(c);	
}
function test2(){
	console.log(c);	// c is not defined (c变量没有定义)
}
test1();
test2();
```

需求：统计方法执行了多少次

```javascript
function test1(){
	var count = 0;	// 局部变量
	function jia(){
		return count += 1;
	}
	return jia;
}
var fn = test1();	// fn ==> function jia(){return count += 1;}
fn();
fn();

console.log(fn());	// 每次调用方法，首先就是将变量还原为0
```

闭包就是一种保护私有变量的机制，保护里面私有变量不受外界干扰

就是形成一个不销毁的栈环境。不会被垃圾回收机制探测到



#### 3.9 弹框和输出

* 普通弹框 alert("hello,拉勾");

* 控制台输出 console.log("谷歌浏览器F12进入控制台");

* 在页面中输出 document.write("<h2>我爱你中国</h2>");  将<h2>元素输出到<body>中

* 确认框 confirm("确定删除吗？");            返回的是boolean类型

  ```javascript
  var b = confirm("确定删除吗？");
  	if(b) {
  		document.write("<h1>删除成功！</h1>");
  	} else{
  		document.write("<h1>你取消了操作</h1>");
  	}
  ```

* 输入框 prompt("请输入姓名：");

  ```javascript
  var name = prompt("请输入您的名字：");
  document.write("<h1>大名：" + name + "!</h1>");
  ```



## 4. DOM 操作

* 文档对象模型，就是将页面中所有的标签元素看成是一个对象(一片叶子)，主树干定义为根节点(根元素),所有的标签都是从根元素延伸出去的，摸清结构，找到某个标签就不再困难了
  * 在节点树中，顶端节点就是根节点(root)
  * 每个节点都有父节点(除了根节点)
  * 任何一个节点都可以拥有任意数量的子节点
  * 同胞是拥有相同父节点的节点

```html
<html>
    <head>
        <meta charset="utf-8">
        <title>拉勾教育</title>
    </head>
    <body>
        <h1>
            第一节：HTML DOM
        </h1>
        <p>
            Hello world！
        </p>
    </body>
```

从上面的HTML中：

* <html>节点没有父节点；它是根节点

* <head>和<body>的父节点是<html>节点

* 文本节点"Hello world!"的父节点是<p>节点

并且：

* <html>节点拥有两个子节点：<head>和<body>

* <head>节点拥有两个子节点：<meta>和<title>节点

并且：

* <head>元素是<html>元素的首个子节点
  
  </head>

  

* <body>元素是<html>元素的最后一个子节点

* <h1>元素是<body>元素的首个子节点
  
  
  
* <p>元素是<body>元素的最后一个子节点



### 4.1 DOM访问	通过DOM文档对象模型去找到页面中某一个元素节点

* getElementById:通过id属性获得元素节点对象
  * 当账户为空时，阻止表单提交

```html
<body>
    <form action="xxx" onsubmit="return login()">
        <p>账号:<input id="username"/></p>
        <p>电话:<input id="phone"/></p>
        <p><button>登录</button></p>
    </form>
    
    <script>
    	function login(){
            var name = document.getElementById("username").value;
            if(name == ""){
                alert("账号不能为空！");
                return false;	// 阻止表单提交
            }
            return true;	// 放行，让表单提交
        }
    </script>
</body>
```

* getElementByName：通过name属性获得元素节点对象
  * 购物车全选效果

```html
<body>
  <h2>我的购物车</h2>
  <table border="1" cellspacing="0">
   <tr>
    <td><input type="checkbox" onchange="quan(this)" /> 全选</td>
    <td>名称</td>
    <td>单价</td>
   </tr>
   <tr>
    <td><input type="checkbox" name="one" />1</td>
    <td>功能性饮料-尖叫</td>
    <td>4.0</td>
   </tr>
   <tr>
    <td><input type="checkbox" name="one" />2</td>
    <td>火腿肠</td>
    <td>2.0</td>
   </tr>
   <tr>
    <td><input type="checkbox" name="one" />3</td>
    <td>包子</td>
    <td>1.5</td>
   </tr>
  </table>
  <p>
   <button>提交订单</button>
  </p>
  <script>
   function quan(all) {
    var arr = document.getElementsByName("one");
    for (var i = 0; i < arr.length; i++) {
     arr[i].checked = all.checked; // 将全选框的状态，赋值给每一个复选框
   }
  }
  </script>
</body>
```

* getElementsByTagName：通过标签名称获得元素节点对象集
  * 表格隔行变色

```html
<body>
  <table border="1" cellspacing="0">
   <tr>
    <td><input type="checkbox" onchange="quan(this)" /> 全选</td>
    <td>名称</td>
    <td>单价</td>
   </tr>
   <tr>
    <td><input type="checkbox" name="one" />1</td>
    <td>功能性饮料-尖叫</td>
    <td>4.0</td>
    </tr>
   <tr>
    <td><input type="checkbox" name="one" />2</td>
    <td>火腿肠</td>
    <td>2.0</td>
   </tr>
   <tr>
    <td><input type="checkbox" name="one" />3</td>
    <td>包子</td>
    <td>1.5</td>
  </table>
  <script>
   var rows = document.getElementsByTagName("tr"); //通过标签名获得元素对象
集合
   for (var i = 0; i < rows.length; i++) {
     if(i % 2 == 1){ // 奇数
      rows[i].style.backgroundColor = "pink";
    }
  }
  </script>
</body>
```



### 4.2 DOM修改

1. 改变一个<p>元素的HTML内容：

```html
<body>
    <button onlick="test()"> 
        点我试试
    </button>
    
    <script>
    	function test(){
            document.getElementById("hello").innerHTML = "走哇，喝点去~";
        }
    </script>
    
    <h2 id="hello">
        你好！
    </h2>
</body>
```

2. 改变<h2>的HTML样式 可以文字，样式风格

```html
<body>
  <button onclick="chou()">你瞅啥</button>
 
  <script>
    function chou(){
      document.getElementById("hello").style.color = "red";
      document.getElementById("hello").style.fontFamily = "华文彩云";
   }
  </script>
  <h2 id="hello">你好！</h2>
</body
```

#### 4.2.1 添加节点

点击按钮，在页面中创建一张图片

```html
<body>
  <button onclick="add()">添加</button>
  <div></div>
  <script>
    function add(){
      var img = document.createElement("img"); // <img>
      img.setAttribute("src","../lagou-html/img/cat.gif"); // <img
src="../lagou-html/img/cat.gif">
      img.setAttribute("title","小猫咪"); // <img src="../lagou-
html/img/cat.gif" title="小猫咪">
      img.setAttribute("id","cat"); // <img src="../lagou-
html/img/cat.gif" title="小猫咪" id="cat">
      var divs = document.getElementsByTagName("div");
      divs[0].appendChild(img);
   }
  </script>
</body>
```

#### 4.2.2 删除节点

点击按钮，删除图片

```html
<body>
  <button onclick="add()">添加</button>
  <button onclick="del()">删除</button>
  <div>
  </div>
  <script>
    function add(){
     。。。略。。。
   }
    function del(){
      var img = document.getElementById("cat");
      img.parentNode.removeChild(img);  // 必须通过父节点，才能删除子节点
      }
  </script>
</body>
```

#### 4.2.3 替换节点

把刚创建的图片替换成另一张

```html
<body>
  <button onclick="add()">添加</button>
  <button onclick="del()">删除</button>
  <button onclick="rep()">替换</button>
  <div>
  </div>
  <script>
    function add(){
      。。。略。。。
   }
    function del(){
      。。。略。。。
   }
    function rep(){
      var imgold = document.getElementById("cat");
      // 通过修改元素的属性，做的替换
      // img.setAttribute("src","../lagou-html/img/2.jpg");
      var imgnew = document.createElement("img");
      imgnew.setAttribute("src","../lagou-html/img/1.jpg");
      imgold.parentNode.replaceChild( imgnew, imgold );
   }
  </script>
</body>
```

### 4.3 事件

js捕获某个动作而做出的反馈

#### 4.3.1 窗口事件

只能在body和frameset中好使

* onload 当文档被载入时执行

```html
<body onload="test()">
    <script>
    	function test(){
            document.write("哈哈哈");
        }
    </script>
</body>
```

#### 4.3.2 表单元素事件

仅在表单元素中有效

* onblur 当元素失去焦点时执行脚本
* onfocus 当元素获得焦点时执行脚本

```html
<body>
 <script>
  function a() {
   console.log("获得焦点==被激活");
  }
  function b() {
   console.log("失去焦点");
  }
 </script>
 <form action="">
  <p>帐号：<input onfocus="a()" onblur="b()" /></p>
  <p>密码：<input /></p>
 </form>
</body>
```

#### 4.3.3 鼠标事件

* onclick 当鼠标被**单击**时执行脚本
* ondbclick 当鼠标被**双击**时执行脚本
* onmouseout 当鼠标指针**移出**某元素时执行脚本
* onmouseover 当鼠标指针**悬停**于某元素之上时执行的脚本

```html
<style>
  img{
    width: 30%;
    border: 5px solid white;
    }
</style>
<body>
 
  <img src="img/logo.png" onmouseover="shang(this)" onmouseout="xia(this)"
onclick="dan()">
  <img src="img/logo.png" onmouseover="shang(this)" onmouseout="xia(this)"
ondblclick="shuang()">
  <img src="img/logo.png" onmouseover="shang(this)" onmouseout="xia(this)" >
  <script>
    function dan(){
      alert("点了一下");
   }
    function shuang(){
      alert("连续快读点两下");
   }
    function shang(img){
      img.style.border = "5px solid red";
   }
    function xia(img){
      img.style.border = "5px solid white";
   }
  </script>
</body>
```

#### 4.3.4 键盘事件

* onkeydown 按下去
* onkeyup 弹上来

```html
<script>
  window.onkeydown = function(){
    // event：事件源（按键）
    // console.log( "按键编码："+event.keyCode );
    if(event.keyCode == "13"){ // 回车键
      alert("登录成功！");
    }
 }
  window.onkeyup = function(){
    console.log(event.keyCode); // 按住按键不松手是不会触发的。当松手时，按键回弹则
触发
 }
</script>
```

#### 4.3.5 事件冒泡

```html
<style>
  #father {
   width: 200px;
    height: 200px;
   background: black;
   padding: 10px;
 }
  #child {
   width: 100px;
   height: 100px;
   background: greenyellow;
 }
</style>
<body>
  <div id="father">
   <div id="child"></div>
  </div>
 
  <script>
   // 代码不重要，重要是知道这个事件发生，是正常现象
   document.getElementById("father").addEventListener("click", function() {
    alert("父级元素的事件被触发：" + this.id);
  });
   document.getElementById("child").addEventListener("click", function(e) {
    e.stopPropagation()  //取消事件的冒泡机制
    alert("子级元素的事件被触发：" + this.id);
  });
  </script>
</body>
```

先子，后父。事件的触发顺序**自内向外**，这就是事件冒泡

#### 4.3.6 事件捕获

```html
<style>
  #father {
   width: 200px;
   height: 200px;
   background: black;
   padding: 10px;
 }
  #child {
   width: 100px;
   height: 100px;
   background: greenyellow;
 }
 </style>
 <body>
  <div id="father">
   <div id="child"></div>
  </div>
  <script>
    document.getElementById("father").addEventListener("click",function(){
      alert("父级：" + this.id);
   },true);
    document.getElementById("child").addEventListener("click",function(){
      alert("子级：" + this.id);
   },true);
  </script>
 </body>
```

先父，后子。**自外向内**，事件捕获，和事件冒泡相反

### 4.4 面向对象OOP

* 使用Object创建通用对象

```javascript
var user = new Object();
user.name = "吕布";
user.age = 21;
user.say = function(){
	console.log("大家好，我叫：" + this.name + ",我今年" + this.age + "岁了！");
}
user.say();
```

* 使用构造函数创建对象

```javascript
function userinfo(name age){
	this.name = name;
	this.age = age;
	this.say = function(){
		console.log("大家好，我叫：" + this.name + ",我今年" + this.age + "岁了！");
	}
}
var user = new userinfo("张飞",32);
user.say();
```

* 使用直接量

```html
var user = {
	username : "孙悟空",
	age : 30;
	say : function(){
		console.log("大家好，我叫：" + this.username + ",我今年" + this.age + "岁了！");
	}
};

user.say();
```

### 4.5 json

json数据传递格式

{

​	属性1: 值1,

​	属性1: 值1,

...

}

```html
<script>
	var json1 = {
        "username" : "吕布",
        "age" : 31
    };
    console.log("姓名：" + json1.username + ", 年龄：" + json1.age + "岁");
    
    // json数组
    var jsonarr = [{"name":"貂蝉","age":18},{"name":"小乔",age:17}];
    console.log("貂蝉"jsonarr[0].age"岁了");
    console.log("小乔"jsonarr[1].age"岁了");
    
    // 复杂的json对象
    var long = {
      name:"赵云",
      sex:"男",
      hobby:["玉兰白龙驹","龙胆亮银枪","青釭剑"]
    };
    console.log(long.name + "的主攻武器：" + long.hobby[1]);
</script>
```



## 5. BOM操作	操控浏览器

就是JavaScript对浏览器的一些常规操作的方法

### 5.1 window对象

```html
<button onclick="kai()">极速入职</button>
<script>
	function kai(){
		window.open("http://lagou.com","拉勾网","width=300px,height=300px");
    }
</script>
```

### 5.5.1 screen 屏幕对象

得到电脑的分辨率

```html
<button onclick="test()">获取</button>
<script>
	function test(){
        console.log("宽：" + screen.width + "px,高：" + screen.height + "px" );
    }
</script>
```

### 5.5.2 location定位

包含有关当前 URL 的信息，通常用来做页面跳转

```html
<button onclick="test()">测试</button>
<script>
	function test(){
		console.log("当前页面的URL路径地址：" + location.href);
        location.reload();	// 重新加载当前页面，刷新
        location.href = "http://lagou.com";	// 跳转页面
    }
</script>
```

### 5.5.3 history浏览器历史

history对象会记录浏览器的痕迹

* a.html

```html
<a href="b.html">去b页面</a>
```

* b.html

```html
<button onclick="hui()">返回</button>
<script>
  function hui(){
    //history.go(-1); //上一级页面
    history.back(); // 与go(-1)是等价的
 }
</script>
```

### 5.5.4 navigator 导航

window.navigator 对象包含有关访问者浏览器的信息;

```html
<script>
  var str = "";
  str += "<p>浏览器的代号："+ navigator.appCodeName +"</p>";
  str += "<p>浏览器的名称："+ navigator.appName+"</p>";
  str += "<p>浏览器的版本："+ navigator.appVersion+"</p>";
  str += "<p>硬件平台："+ navigator.platform+"</p>";
  str += "<p>用户代理："+ navigator.userAgent +"</p>";
  str += "<p>启用Cookies："+navigator.cookieEnabled+"</p>";
 
  document.write(str);
</script>
```

### 5.1.5 存储对象

用起来和我们在java中map很相似，都是键值对的方式存数据

#### 5.1.5.1 本地存储 localStorage

在关闭窗口或标签页或将会删除数据

* 保存数据

```javascript
localStorage.setItem("name","curry");
```

* 提取数据

```javascript
localStorage.getItem("name");
```

* 删除数据

```javascript
localStorage.removeItem("name");
```

多样化操作

```javascript
// 三种方式保存数据
localStorage["a"] = 1;
localStorage.b = 2;
localStorage.setItem("c",3);
   
// 查看数据类型
console.log( typeof localStorage["a"] )
console.log( typeof localStorage["b"] )
console.log( typeof localStorage["c"] )
// 第一种方式读取
var a = localStorage.a;
console.log(a);
   
// 第二种方式读取
var b = localStorage["b"];
console.log(b);
// 第三种方式读取
var c = localStorage.getItem("c");
console.log(c);
```

#### 5.1.5.2 会话存储 sessionStorage

会话，就是保持浏览器别关闭。
关闭浏览就等于结束了一次会话。
开启浏览器就意味着创建了一次会话。

* 保存数据

```javascript
sessionStorage.setItem("name", "klay");
```

* 提取数据

```javascript
var lastname = sessionStorage.getItem("name");
```

* 删除指定键的数据

```javascript
sessionStorage.removeItem("name");
```

* 删除所有数据

```javascript
sessionStorage.clear();
```



### 5.2 计时操作

### 5.2.1 周期性的定时器 setInterval

setInterval(1,2)：周期性触发代码exp （常用）
1：执行语句
2：时间周期，单位为毫秒

* 案例：闪烁的字体 （1秒1变色）

```html
<body>
  <h1 id="title">拉勾网：极速入职</h1>
  <script>
   var colors = ["red","blue","yellow","pink","orange","black"];
   var i = 0;
   function bian(){
    document.getElementById("title").style.color = colors[i++];
    if(i == colors.length){
      i = 0; // 颜色重新开始
   }
  }
   setInterval(bian,100); // 每隔0.1秒，执行一次bian函数
  </script>
</body>
```

* 案例：在闪烁字体的基础上扩展，闪烁的电子时钟

```html
<body>
 <h1 id="title"></h1>
  <script>
   var colors = ["red","blue","yellow","pink","orange","black"];
   var i = 0;
   function bian(){
    document.getElementById("title").style.color = colors[i++];
    if(i == colors.length){
      i = 0; // 颜色重新开始
   }
  }
   function time(){
    var d = new Date();
    var str = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"号
"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    document.getElementById("title").innerHTML = str; 
  }
   setInterval(bian,100); // 每隔1秒，执行一次变色函数bian
   setInterval(time,1000); // 每隔1秒，执行一次时间函数time
  </script>
 </body>
```

#### 5.2.2 停止定时器 clearInterval

案列：模拟年会抽奖

```html
<body>
  <img id="tu" src="../lagou-html/img/1.jpg" width="50%" />
  <br />
  <button onclick="begin()">开始</button>
  <button onclick="stop()">停止</button>
  <script>
   var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
   function begin() {
    timer = setInterval(bian, 100); // 没有使用var，所以timer是全局变量
  }
   function stop() {
    clearInterval(timer); // 停止定时器
  }
   function bian() {
    var i = Math.floor(Math.random() * arr.length); // 0-4
    document.getElementById("tu").src = "../lagou-html/img/" + arr[i];
  }
  </script>
</body
```

#### 一次性定时器 setTimeOut

相当于延迟的效果，只执行一次

```html
<script>
 function bian(){
   document.body.style.backgroundColor = "red";
 }
 //3秒之后调用
 setTimeout(bian,3000);
</script>
```

