//normal function
function greet(){
    console.log("hello");
}
//higher order function
function sing(callback){
    console.log("la,la,la");
    if(callback)
    callback();
}
//function that returns another function
function mult(factor){
    return function(x){
        return x* factor;
    }
}
let doubler = mult(2);
let tripler = mult(3);
let quad = mult(4);
vals=[10,8,9,4,-10,-5];
let newVal=vals.map(x=>x*2);
console.log(newVal);
let answer=vals.filter(function(value){
    return value<0;
})
console.log(answer);
function sum(acc,curVal){
    return acc+curVal;
}
let result=vals.reduce(sum);
console.log(result);


function createIncrementer(step){
    return (add) => {
        return add+step;
    }
}
let add2=createIncrementer(2)
let add5=createIncrementer(5)
console.log(add2(5));