# CSS

## 1.css介绍

css就是层叠样式表	通过CSS可以让HTML元素美丽的显示



## 2.CSS与HTML结合的方式

### 2.1 第一种方式 内联样式	行内样式表

也就是在**开始标签**中写上style(修饰)属性=键值对的方式

如：<h1 style="color:red">我爱你中国</h1>

### 2.2第二种方式 内部样式表

在head和body标签中间使用style标签

语法：

​	选择器{

​		属性：值

}

选择器就是要修饰的目标

h1{

​	color:blue;

}

### 2.3 第三种方式 外部样式表	外部引用方式

单独定义一个css文件

在head中用link标签引用外部的css文件

<llink href="xxx.css" rel="stylesheet"/>

还有一种是在style标签里面@import url(xxx.css);

外部导入css使用<link>和@import的区别？

1. 加载顺序不同
   * @import方式导入会先加载html，然后才导入css
   * link方式，会先加载样式表
2. @import方式导入css样式，不支持JavaScript，而link支持

三种样式表的优先级：采用就近原则

内联>内部>外部



## 3.CSS的使用

### 3.1 css中选择器

#### 3.1.1 元素（标签）选择器

它可以对页面上相同的标签进行统一的设置，它描述的就是标签的名称.

#### 3.1.2类选择器

类选择器在使用时使用"."来描述，它描述的是元素上的class属性值

#### 3.1.3 id选择器

它只能选择一个元素，使用 "#" 引入，引用的是元素的id属性值。
id选择器，比类选择器更具有唯一性

#### 3.1.4 选择器组

逗号合并选择器，谁和谁

#### 3.1.5 派生选择器

* 后代选择器：父子孙，曾孙，从孙...	选择器下的标签都会被选取，忽略层级	div  p:div下的所有p标签都被选取
* 子代选择器：父子关系（隔代不管）                  div   >   p:div的子级元素p别选取，只选取一级

#### 3.1.6 CSS伪类

* CSS伪类可对css的选择器添加一些特殊效果

* 伪类属性列表：				                          超链接的伪类：要遵守使用顺序，爱恨原则 LoVeHAte，**lvha**			

  * :link 未点击链接的样式。
  * :visited 访问过的样式
  * :hover 当鼠标悬浮在元素上方时，的样式
  * :active 激活，按住不松手的样式
  * :first-child 向元素的第一个子元素添加样式。

  

​	a:link {color: #FF0000}  未访问的链接 
​	a:visited {color: #00FF00} 已访问的链接 
​	a:hover {color: #FF00FF}  鼠标移动到链接上 
​	a:active {color: #0000FF} 选定的链接 



### 3.2 CSS基本属性

#### 3.2.1 文本属性

* 改变字体样式：font-family : value;
* 字体大小：font-size : value;                    font-size:5em;        默认字体大小的5倍
  * px：像素
  * em：倍数
* 字体加粗：font-weight : bold;
* 文本颜色：color : value;
* 文本排列 对齐方式：text-align : left/right/center;
* 文字修饰  下划线：text-decoration : underline;
* 行高：line-height : value;
* 首行文本缩进：text-indent : value （2em）;



#### 3.2.2 背景属性

* background-color 设置元素的背景颜色。
* background-image 把图像设置为背景                        background-image:url('img/1.jpg');

* background-repeat 设置背景图像的墙纸效果，是否平铺
  * repeat：平铺方式
  * repeat-x：横向平铺
  * repeat-y：纵向平铺
  * no-repeat：不平铺
* background-position 设置背景图像的起始位置
* 1：控制水平方向 x轴： 正值，向右移动； 负值，向左移动
* 2：控制垂直方向 y轴： 正值，向下移动； 负值，向上移动

​	/*图片向右移动50px，向下移动100px(可以为负值)*/

​		background-position:50px,100px;



* background-attachment 背景图像是否固定或者随着页面的其余部分滚动

  * 默认值是 scroll：默认情况下，背景会随文档滚动
  * 可取值为 fixed：背景图像固定，并不会随着页面的其余部分滚动，常用于实现称为水印的图
    像

  

  #### 3.2.3 列表属性

  CSS列表属性作用如下：

  设置不同的列表项标记为有序列表
  设置不同的列表项标记为无序列表
  设置列表项标记为图像
  有两种类型的列表：
  无序列表 - 列表项标记用特殊图形（如小黑点、小方框等）
  有序列表 - 列表项的标记有数字或字母
  使用CSS，可以列出进一步的样式，并可用图像作列表项标记。
  none：无标记。（去除标记）
  disc：默认。标记是实心圆。
  circle：标记是空心圆。
  square：标记是实心方块。
  decimal：标记是数字。
  decimal-leading-zero：0开头的数字标记。(01, 02, 03, 等。)
  lower-roman：小写罗马数字(i, ii, iii, iv, v, 等。)
  upper-roman：大写罗马数字(I, II, III, IV, V, 等。)
  lower-alpha：小写英文字母The marker is lower-alpha (a, b, c, d, e,等。)
  upper-alpha：大写英文字母The marker is upper-alpha (A, B, C, D, E,等。)



#### 3.2.4 边框

CSS边框属性允许指定一个元素边框的样式和颜色	

设置边框

选择器{

​		border:像素 边框线  颜色;

}

none:默认无边框		dotted：定义一个点线边框	dashed：虚线边框	solid：实线边框	double：双线	groove：3D凹槽	

ridge：3D脊边框	inset：3D嵌入边框	outset：3D突出边框



#### 3.2.5 轮廓属性

轮廓是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
轮廓和边框的区别：

* 边框 (border) 可以是围绕元素内容和内边距的一条或多条线；边框保护元素
* 轮廓是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。轮廓保护边框

outline:像素	边框线	颜色;	轮廓



#### 3.2.6 盒子模型

用来设计和页面布局的



* margin(外边距) - 盒子和盒子之间的距离
* border(边框) - 盒子的保护壳
* padding(内边距/填充) - 内填充，盒子边与内容之间的距离
* content(内容) - 盒子的内容，显示的文本或图像



### 3.3 CSS定位

#### 3.3.1默认定位

* 块级元素：h1-h6，p，div等，自上而下，垂直排列（自动换行），可以改变宽高
* 行内元素：a，b，span，等，从左向右，水平排列（不会换行）；不能改变宽高
* 行内块元素：input，img等，从左向右，水平排列（自动换行），可以改变宽高

使用display属性，可以进行转换		display:inline-block;	将元素显示成行内块



#### 3.3.2 浮动定位

* 让元素飞起来，不仅可以靠着左边或右边，还可以消除块级的霸道特性（独自占一行）。

* float取值
  * none：不浮动
  * left：贴着左边 浮动
  * right：贴着右边 浮动



#### 3.3.3 相对定位

和原来的自己的位置进行比较，进行移动定位（偏移）	自己和自己比

position：relative;	相对定位：相对与自己原来的位置进行移动

top:30px;	上偏移30

left:50px;	左偏移50



#### 3.3.4 绝对定位

 本元素与已定位的祖先元素的距离

* 如果父元素定位了，就以父级为参照物

* 如果父级没定位，找爷爷级，爷爷定位了，以爷爷为参照物

* 如果爷爷没定位，继续向上找，都没定位的话，body是最终选择

  <div class='yeye'> 
      <div class='baba'>
          <div class='a'>1</div>
          <div class='b'>2</div>
          <div class='c'>3</div>
      </div>
  </div>

  position:absolute;	绝对定位

  top:30px;

  left:50px;



#### 3.3.5 固定定位

将元素的内容固定在页面的某个位置，当用户向下滚动页面时元素框并不随着移动

position:fixed;	固定定位	

top:100px;	偏移

left:30px;



#### 3.3.6 z-index

如果有重叠元素，使用z轴属性，定义上下层次			谁的z值大，谁在上面



注意：

* z轴属性，要配合相对或绝对定位来使用
* z值没有额定数值(整型就可以)



## 4. CSS3

### 4.1 圆角

border-radius：左上 右上 右下 左下;		border-radius:1px 10px 30px 50px;
border-radius：四个角;			border-radius:30px;	一个值就代表四个角一样
border-radius：50%; 圆形



### 4.2 盒子阴影

box-shadow：1 2 3 4 5;		 box-shadow:20px 20px 30px 10px black;
1：水平阴影
2：垂直阴影
3：模糊半径 虚化
4：扩张半径 影子
5：颜色



### 4.3 渐变

#### 4.3.1 线性渐变

在直线上渐渐的变化颜色

background:linear-gradient([方向/角度]，颜色列表)；		background:linear-gradient(red,black)；	红色到黑色渐变

background:linear-gradient(to left, red, black)；从红色到黑色去左边

background:linear-gradient(30deg,red,black)；30度红到黑



#### 4.3.2 径向渐变

以圆心向外发散

background: radial-gradient(颜色列表);



### 4.4 背景

#### 4.4.1 背景位置

background-origin：指定了背景图像的位置区域

* border-box : 背景贴边框的边
* padding-box : 背景贴内边框的边
*  content-box : 背景贴内容的边

#### 4.4.2 背景裁切

background-clip:

* border-box 边框开切
* padding-box 内边距开切
* content-box 内容开切

#### 4.4.3 背景大小

background-size:

* cover 缩放成**完全覆盖**背景区域最小大小
* contain 缩放成**完全适应**背景区域最大大小



### 4.5 过渡动画

#### 4.5.1 过渡

从一个状态到另一个状态中间缓慢的过程

transition{1 2 3 4}

1. 过渡或动画模拟的css属性

2. 完成整个过渡所使用的时间（2s内完成）

3. 过渡函数                         linear匀速               ease：逐渐慢下来              ease-in ：加速              ease-in-out：先加速后减速

4. 过渡开始出现的延迟时间

   transition:width 2s linear 1s;	1秒过后，div在2秒内匀速缓慢的变宽

   div:hover{width:300px;} 	触发div变宽



#### 4.5.2 动画

从一个状态到另一个状态，过程中每个时间点都可以控制。

* 关键帧：@keyframes 动画帧 { from{} to{} } 或者{ 0%{} 20%{}... }
* 动画属性：animation{ 1 , 2 , 3 , 4 , 5 }
  1：动画帧
  2：执行时间
  3：过渡函数
  4：动画执行的延迟（可省略）
  5：动画执行的次数

infinite ：无限次

alternate ：来回执行（交替执行，一去一回）