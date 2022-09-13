$(".jia").click(function(){
   var x =  $(this).prev().text();  // 原来的商品次数
   x++;
   $(this).prev().text(x);  // 现在的次数

   var price = $(this).parent().prev().text();  // 单价
   var zong = x*price;
   $(this).parent().next().text(zong);  // 总价

   getTotal();
});

$(".jian").click(function(){
    var x =  $(this).next().text();  // 次数
    x--;
    if(x == 0){
        if(confirm("是否删除该商品？")){
            $(this).parents("tr").remove();
        }
    } else{
    $(this).next().text(x);

    var price = $(this).parent().prev().text();  // 单价
   var zong = x*price;
   $(this).parent().next().text(zong);  // 总价
}

    getTotal();
 });

// function getTotal(){
//     var sum = 0;    // 总价钱
//     var arr = $("tr:not(tr:first)").find("td:last");    // 获得除了第一个表格行的所有的最后一个单元格  td标签  dom对象
//     for(var i = 0; i < arr.length; i++){
//         sum += Number(arr[i].innerHTML);    // arr[i]就是每个最后一个单元格，就是td标签，就是DOM对象，所以用属性innerHTML
//     }

//     $("b").text(sum);   // 获得b标签的jq对象调用text方法放入总价钱
// }

function getTotal(){
    var sum = 0;    // 总价钱
    $("tr:not(tr:first)").find("td:last").each(function(){  // 遍历获取到的最后一个td标签
        sum += Number($(this).text());  // this就是每个td标签，text获取td标签里的价钱和sum相加，最后得到总价钱
    });

    $("b").text(sum);
}