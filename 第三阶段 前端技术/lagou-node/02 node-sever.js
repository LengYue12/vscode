const http = require("http");   // node中自带的require引入方法，http也是node中自带的服务对象
http.createServer(function(request,response){

    // 发出http请求的头部信息
    // http的状态码：200；ok
    // 请求的内容类型：text/plain
    response.writeHead(200,{"Conten-Type":"text/plain"});

    // 响应的数据"hello,welcome!"，此时，并不支持中文
    response.end("hello,Welcome!");
}).listen(8888);    // 监听端口

console.log("服务器已启动，请访问：http://127.0.0.1:8888");