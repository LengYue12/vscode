let name = `吴亦凡`;
let age = 31;

// 传统的定义
let user1 = {
    name : name,
    age : age
};
console.log(user1);

// es6新语法中的简写
let user2 = {name,age};
console.log(user2);