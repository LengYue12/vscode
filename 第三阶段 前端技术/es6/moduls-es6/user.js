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