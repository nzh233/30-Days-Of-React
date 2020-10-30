var add = function(x){
    var sum = 1;
// 在函数表达式内部有一个求和的内部函数
    var tmp = function(x){
        sum = sum + x;// 求和
        return tmp;
    }
// 构建一个函数体的toString()函数
    tmp.toString = () => {
        return sum;
    }
    return tmp; // 返回的是一个函数体,如果该函数体有toString()方法,则会调用函数体的toString()方法
}
console.log(add(100)(2)(3));