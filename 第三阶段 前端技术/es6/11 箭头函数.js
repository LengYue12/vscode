// 传统
var f1 = function(a){
    return a*10;
}

console.log(f1(10));

// es6  
var f2 = a => a*10;
console.log(f2(20));


var f3 = (a,b) => {
    let sum = a + b;
    return sum;
}
console.log(f3(3,7));

// 可以将f3进行简化
var f4 = (a,b) => a+b;
console.log(f4(11,22));