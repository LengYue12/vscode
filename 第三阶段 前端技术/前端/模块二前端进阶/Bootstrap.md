#  Bootstrap

## 1.Bootstrap简介

* Bootstrap是**响应式**前端框架

支持移动设备	跟随着浏览器的设备而变化，这就是响应式

使用Bootstrap需要引入css、js、font字体

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"
    <title>三国演义</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body style="padding: 100px;">
    
    <h1>Hello,Bootstrap!</h1>
	<!-- 注意：这两个按钮的class样式是Bootstrap定义的 -->
    <button class="btn btn-primary">张飞</button>
    <button class="btn btn-success">关羽</button>
</body>
</html>
```



## 2. Bootstrap的使用

### 2.1 表格

#### 2.1.1 丰富的标签

* tabel为表格添加基础样式
* thead表格**标题行**的容器元素(<tr>)          **表头**
* <tbody>表格**主体**中的表格行的容器元素
* <tr> 表格行
* <td>默认的表格单元格
* <th>特殊的表格单元格，(居中和加粗的效果)。必须在**<thead>**内使用
* <caption>关于表格存储内容的描述或**总结**

#### 2.1.2 好看的类样式	在table中使用

* .table为任意table添加基本样式(只有横向分隔线)
* .table-striped在<tbody>内添加斑马线形式条纹，**隔行变色**
* .table-bordered为所有表格的单元格添加边框
* .table-hover在<tbody> 内容的任一行启用鼠标悬停状态，**鼠标悬停高亮突出显示**
* .table-condensed 让表格更加紧凑

#### 2.1.3 情景色样式

适合应用在<th>、<tr>，<td>

* .active **激活**效果(悬停颜色)	灰色
* .success 表示**成功**或积极的动作   绿色
* .info 表示**普通**的提示信息或动作  蓝色
* .warning 表示**警告**或需要用户注意   黄色
  * .danger 表示**危险**或潜在的带来的负面影响的动作    红色


### 2.1.4 响应式表格	就是不同的大小有不同的结果

表格的父元素设置响应式 ,**小于768px，出现边框**	.table-responsive	

```html
<body>
    <table class="table table-bordered table-hover table-condensed table-responsive">
        <caption>三国演义</caption>
        <thead>
            <tr>
                <th>属地</th>
                <th>名字</th>
                <th>职位</th>
            </tr>
        </thead>
        <tbody>
            <tr class="info">
                <td>魏国</td>
                <td>张辽</td>
                <td>五子良将</td>
            </tr>
            <tr class="active">
                <td>吴国</td>
                <td>吕蒙</td>
                <td>大都督</td>
            </tr>
            <tr  class="success">
                <td>蜀国</td>
                <td>关羽</td>
                <td>五虎上将</td>
            </tr>
            <tr class="warning">
                <td>晋国</td>
                <td>司马炎</td>
                <td>晋武帝</td>
            </tr>
            <tr class="danger">
                <td>蜀国</td>
                <td>诸葛亮</td>
                <td>蜀汉丞相</td>
            </tr>
        </tbody>
    </table>
</body>
```



### 2.2 表单

#### 2.2.1 表单布局

* 默认布局

![](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\5.png)

```html
<body style="padding: 100px;">
    <form>
        <div class="form-group">	<!-- 表单组 -->
            <label>邮箱</label>
            <input type="email" class="form-control" placeholder="请输入邮箱...">
        </div>
        <div class="form-group">
            <label>密码</label>
            <input type="password" class="form-control" placeholder="请输入密码...">
        </div>
        <div class="form-group">
            <button class="btn btn-primary">提交</button>
        </div>
    </form>
</body>
```

* 内联布局
  * 让所有的表单元素居于一行显示
  * 当小于768px时，自动还原成移动端样式

![6](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\6.png)

```html
<form class="form-inline">
```



#### 2.2.2 表单控件	class = "form-control" 表单控件

* 输入框

![7](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\7.png)

```html
<form>
       <div class="form-group">
           <label for="">输入框</label>
           <input type="text" class="form-control" placeholder="请输入文本..">
       </div>
    </form>
```

* 文本框

![8](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\8.png)

```html
<div class="form-group">
        <label for="">文本框</label>
        <textarea class="form-control" cols="30" rows="5"></textarea>
    </div>
```

* 复选框
  * checkbox 默认
  * checkbox-inline 内联  一行显示

![9](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\9.png)

```html
<div class="checkbox">
        <label>
            <input type="checkbox"> 抽烟
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox"> 喝酒
        </label>
    </div>

    <hr>
    <div class="checkbox-inline">
        <label>
            <input type="checkbox"> 洗澡
        </label>
    </div>
    <div class="checkbox-inline">
        <label>
            <input type="checkbox"> 烫头
        </label>
    </div> 
```

* 复选按钮

![11](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\11.png)

```html
<form>
<div class="btn-group" data-toggle="buttons">
        <label class="btn btn-primary">
            <input type="checkbox"> 音乐
        </label>
        <label class="btn btn-primary">
            <input type="checkbox"> 体育
        </label>
        <label class="btn btn-primary">
            <input type="checkbox"> 美术
        </label>
        <label class="btn btn-primary">
            <input type="checkbox"> 电脑
        </label>
    </div>
</form>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```

* 单选框

![10](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\10.png)

```html
<label class="radio">
        <input type="radio" name="sex"> 男
    </label>
    <label class="radio">
        <input type="radio" name="sex"> 女
    </label>

    <hr>
    <label class="radio-inline">	<!-- 内联样式 -->
        <input type="radio" name="gender"> 男
    </label>
    <label class="radio-inline">
        <input type="radio" name="gender"> 女
    </label>
```

* 单选按钮 		两个按钮来回切换

![12](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\12.png)

```html
<div class="btn-group" data-toggle="buttons">
        <label class="btn btn-primary">
            <input type="radio" name="gender"> 男
        </label>
        <label class="btn btn-primary">
            <input type="radio" name="gender"> 女
        </label>
    </div>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```



### 2.3 多样化的按钮

![13](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\13.png)

* 默认白，主要蓝，成功绿，信息蓝，警告黄，危险红

```html
<button class="btn btn-default">默认按钮</button>
    <button class="btn btn-primary">主要按钮</button>
    <button class="btn btn-success">成功按钮</button>
    <button class="btn btn-info">信息按钮</button>
    <button class="btn btn-warning">警告按钮</button>
    <button class="btn btn-danger">危险按钮</button>
    <button class="btn btn-link">连接按钮</button>
```



* 按钮大小

![15](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\15.png)

```html
<button class="btn btn-primary btn-lg">超大按钮(高清大屏台式机)</button>
    <button class="btn btn-primary">大按钮(笔记本屏幕)</button>
    <button class="btn btn-primary btn-sm">小按钮(平板电脑)</button>
    <button class="btn btn-primary btn-xs">超小按钮(手机)</button>
```



* 按钮状态
  * 激活状态：深色背景，深色边框，阴影
  * 禁用状态：当禁用一个按钮时，颜色变淡50%，并失去渐变

![14](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\14.png)

```html
<button class="btn btn-default">默认按钮</button>
    <button class="btn btn-default active">默认按钮</button>
    <button class="btn btn-default" disabled>禁用按钮</button>	<!-- 禁用按钮属性disabled -->
```



### 2.4 图片

* **img-rounded** 图片圆角
* **img-Circle** 图片变成圆形
* **img-thumbnail**：添加一些内边距和一个灰色的边框

![16](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\16.png)

```html
	<img src="img/1.jpg" class="img-rounded" width="30%">
    <img src="img/1.jpg" class="img-circle" width="30%">
    <img src="img/1.jpg" class="img-thumbnail" width="30%">
```

响应式图片

```html
<img src="img/1.jpg" class="img-responsive">
```



### 2.5 下拉菜单组件

![17](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\17.png)

```html
<div class="dropdown">

        <button class="btn btn-primary" data-toggle="dropdown" >拉勾教育 <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a href="#">前沿技术</a></li>
            <li><a href="#">名师制作</a></li>
            <li><a href="#">24小时导师</a</li>
        </ul>
    </div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
```

用法的核心

1. 外围容器使用**class="dropdown"**包裹
2. 内部**点击按钮事件**要绑定**data-toggle="dropdown"**                     数据切换的事件，特效是下拉框
3. 下拉列表菜单元素的类使用 **class= dropdown-menu**



### 2.6 分页组件    class="pagination"

![18](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\18.png)

```html
<ul class="pagination">
        <li class="previous"><a href="#"> &laquo;</a></li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="next"><a href="#"> &raquo;</a></li>
    </ul>
```



![19](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\19.png)

```html
<ul class="pager">
```



### 2.7 栅格系统  实现相应式的基本的原理  class="container"  响应式

* **bootstrap的栅格系统会将整个页面水平方向上平均分成12个小格子**
* 水平方向划分成12个单元格

![25](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\25.png)

```html
<style>
    .a{
        height: 50px;
        border: 1px solid black;
        background-color: #eeeeee;
    }
</style>
<body>

    <!-- 控制在水平线上占几个格 -->
    
    <!-- 容器 -->
    <div class="container">

        <!-- 在一行里控制大小 -->
        <div class="row">

            <!-- col-lg-3 当大屏幕时，一个div占3份，一行显示4个div -->
            <!-- col-md-4 当中屏幕时，一个div占4份，一行显示3个div -->
            <!-- col-sm-6 当小屏幕时，一个div占6份，一行显示2个div -->
            <!-- 当超小屏幕时，一个div占12份，一行显示1个div，默认 -->

            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
            <div class="col-lg-3 col-md-4 col-sm-6 a">x</div>
        </div>
    </div>
</body>
```



### 2.8 缩略图组件

* 配合响应式的栅格系统	一行显示4个照片

![21](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\21.png)

当浏览器变小时，一行显示两个

![22](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\22.png)

```html
<body>

    <!-- 控制在水平线上占几个格 -->
    
    <!-- 容器 -->
    <div class="container">

        <!-- 在一行里控制大小 -->
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="thumbnail">
                    <img src="img/1.jpg">
                </div>
            </div>

            <!-- 其余3张图片 -->
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="thumbnail">
                    <img src="img/1.jpg">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="thumbnail">
                    <img src="img/1.jpg">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="thumbnail">
                    <img src="img/1.jpg">
                </div>
            </div>
            
        </div>
    </div>
</body>
```

* 自定义内容	图文并茂

![23](C:\Users\zs\Desktop\学习\阶段三\02模块二前端高级(jQuery、ES6、Bootstrap)\02模块二前端高级(jQuery、ES6、Bootstrap)\06 任务六 (Bootstrap)\02_图片\23.png)

```html
<!-- 容器 -->
    <div class="container">

        <!-- 在一行里控制大小 -->
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="thumbnail">
                    <img src="img/唐心.jpg">
                    
                    <!-- 标题 -->
                    <div class="caption">
                        <h3>视频标题</h3>
                        <p>视频介绍:美女众多...</p>
                        <p>
                            <a href="#" class="btn btn-primary">试看</a>
                            <a href="#" class="btn btn-warning">购买</a>
                        </p>
                    </div>
                </div>
            </div>

			<!-- 其余3个省略 -->
            
        </div>
    </div>

```



### 2.9 模态框组件	模拟动态的弹框

* **data-toggle="modal"	触发类型：模态框modal**
* **data-target="#myModal"   触发的节点**
* **data-backdrop = "static" 点击空白处，不会关闭模态框**
* **data-dismiss="modal"   **   **点击关闭模态框**



* 框架的结构
  * **就是一个按钮，通过触发模态框事件(data-toggle='modal')，通过触发的目的(data-target="#myModal")来把原本的div显示，div必须通过模态框的两个事件才能把框弹出来**，通过按钮来控制模态框

```html
<body style="padding: 20px;">
    
    <!-- data-toggle='modal'  触发模态框事件 -->
    <!-- data-target="#myModal"  数据作用在myModal框组件上 -->
    <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" >弹框</button>

    <!-- 声明定义模态框组件 -->
    <div class="modal" id="myModal" data-backdrop="static">
        <!-- 声明窗口 -->
        <div class="modal-dialog">
            <!-- 内容声明 -->
            <div class="modal-content">
                <!-- 1.框的标题 -->
                <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">友情提示</h4>
                </div>
                <!-- 2.框内信息 -->
                <div class="modal-body">
                    服务器错误，请稍后再试！
                </div>
                <!-- 3.框的按钮 -->
                <div class="modal-footer">
                    <button class="btn btn-info">确定</button>
                    <button class="btn btn-default" data-dismiss="modal">取消</button>
                </div>
                
            </div>
        </div>
    </div>

```



## 3.1首页轮播大图

* carousel 轮播组件

```html
<!-- 容器 -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">

        <!-- 滚动圆点区 -->
        <!-- carousel 轮播图 -->
        <ol class="carousel-indicators">
            <li data-slide-to="0" data-target="#myCarousel"></li>
            <li data-slide-to="1" data-target="#myCarousel"></li>
            <li data-slide-to="2" data-target="#myCarousel"></li>
        </ol>
    

        <!-- 图片区 -->
        <!-- carousel-inner 折所有照片 -->
        <div class="carousel-inner">
            <!-- item 项   active 默认第一张 -->
            <div class="item active ">
                <img src="img/1.jpg" width="100%">
            </div>
            <div class="item">
                <img src="img/2.jpg" width="100%">
            </div>
            <div class="item">
                <img src="img/3.jpg" width="100%">
            </div>
        </div>

        <!-- 左右切换 -->
        <a href="#myCarousel" data-slide="prev" class="carousel-control left">
            <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a href="#myCarousel" data-slide="next" class="carousel-control right">
            <span class="glyphicon glyphicon-chevron-right"></span>
        </a>


    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</div>
```

**data 属性解释：**
1. **data-slide 接受关键字 prev 或 next，用来改变幻灯片相对于当前位置的位置；**
2. **data-slide-to 来向轮播底部创建一个原始滑动索引，data-slide-to="2" 将把滑动块移动到一个特**
**定的索引，索引从 0 开始计数。**
3. **data-ride="carousel"属性用户标记轮播在页面加载时开始动画播放**



## 3.2 响应式导航条  随着浏览器的大小，显示的内容变化

* **data-toggle="collapse"  数据切换的事件，效果是折叠**
* **data-target="#nav"  折叠效果的目标是下面的#nav容器**

```html
<!-- 容器 -->
    <!-- navbar 默认的导航条样式 -->
    <div class="navbar navbar-default">
        <!-- 响应式容器 -->
        <div class="container">
            <!-- 导航条头部 -->
            <div class="navbar-header">
                <a href="#" class="navbar-brand">三国演义之我的重生</a>
                <!-- data-toggle="collapse"  数据切换的事件，特效是折叠  -->
                <!-- data-target="#nav" 折叠效果的目标是下面的#nav容器 -->
                <button class="navbar-toggle" data-toggle="collapse" data-target="#nav">
                    <span class="sr-only"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <!-- 导航项 -->
            <div id="nav" class="collapse navbar-collapse"> 
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#"><span class="glyphicon glyphicon-home"></span>国家</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-camera"></span>姓名</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-tint"></span>职位</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-earphone"></span>联系我们</a></li>
                </ul>
            </div>
        </div>
    </div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
```

