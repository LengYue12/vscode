let name = "吴亦凡";
let age = 31;
let fn = function(){
    return `我是${name}!我今年${age}岁了!`;
}

// 声明模块并导出
export{
    name as a,
    age as b,
    fn as c
}