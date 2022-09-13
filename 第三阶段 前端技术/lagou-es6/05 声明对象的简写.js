let name = `吕布`;
let age = 23;

// 传统的定义对象
let user1 = {
    name:name,
    age:age
};
console.log(user1);

// es6 新语法的简写
let user2 = {name,age};
console.log(user2);