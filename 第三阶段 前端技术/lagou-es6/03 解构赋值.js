// var arr = [1,2,3];

// // 传统的js
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a);
// console.log(b);
// console.log(c);

// // es6的解构
// var [x,y,z] = arr;
// console.log(x,y,z);

// ------------------------------------

var user = {
    username:"吕布",
    weapon:"方天画戟",
    horse:"赤兔马"
};

// 传统的js
let mingzi = user.username;
let wuqi = user.weapon;
let zuoji = user.horse;
console.log("姓名是：" + mingzi + "武器是：" + wuqi + "坐骑是：" + zuoji);

// es6的解构
let {username,weapon,horse} = user; // 注意：解构的变量名必须是对象中的属性名
console.log("姓名是：" + username + "武器是：" + weapon + "坐骑是：" + horse);
