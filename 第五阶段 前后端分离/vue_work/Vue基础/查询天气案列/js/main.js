/**
 *  请求地址:http://wthrcdn.etouch.cn/weather_mini
    请求方法:get
    请求参数:city (要查询的城市名称)
    响应内容:天气信息
 */

 var VM = new Vue({
     el:"#app",
     data:{
         // model，定义城市信息，和View视图进行双向绑定
        city:'',
        // 定义数组保存 天气信息
        weatherList:[]
     },
     // 编写查询天气的方法
     methods: {
         // v-on指令 绑定的回车查询事件
         searchWeather:function(){
             console.log("天气查询");
             console.log(this.city);

             // 调用接口
             // 保存this
             that = this;
             axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function(resp){
                 // 访问成功   将获取到的天气信息展示，放到数组中
                 console.log(resp.data.data.forecast);
                 // 获取天气信息  保存到weatherList
                 that.weatherList=resp.data.data.forecast;
             },function(err){
                
             });
         }
     },
 })