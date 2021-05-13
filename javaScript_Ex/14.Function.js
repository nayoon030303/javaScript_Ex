
//Function 객체를 만들어 줌
//var add = new Function("x,y","return x+y");
//console.log(add(3,4)); //7

function add(x,y){

    console.log(arguments.length);
    console.log(arguments[0]); //6
    console.log(arguments[5]); //hello
    return x+y;
}

console.log(add(6,3,4,6,7,"hello")); //9

/**
 * 클로저 
 * 자바스크립트는 함수를 객체로 만든다.
 */
function f1(){ //f2에서 f1에 a를 참조하기 때문에 함수가 닫히지 않는다.
    let a = 1;
    return function f2(){
        return a;
    }
}

let f = f1();
let a = f();
console.log(a);