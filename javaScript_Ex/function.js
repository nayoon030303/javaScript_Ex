///Function




//1.Fuction declaraion
//fuction name(param1, param2){ body... return;}
function printHello(){
    console.log('Hello~');
}
printHello();

function log(message){
    console.log(message);
}
log("안녕하세요");

function multiple(num1, num2){
    return num1*num2;
}
console.log(multiple(3,4));

//2.Parameters
//premitive 타입: value가 저장
//object 타입: reference(주소값)이 저장
function chageName(person){
    person.name = 'corder';
}
person ={name:'na yoon'};
console.log(person)
chageName(person)
console.log(person)


//3.Default parameter
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi~','nayoon');
showMessage('Hi~');

//4.Rest parameter 
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

}
printAll('kim','na','yoon');

//5.Local scope
let globalMessage = 'global';

function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); error
}
printMessage();
//console.log(message); error

//6.Return a value
function sum(a,b){
    return a+b;
    //만약 return값이 없다면 return undefined;를 생략한것
}
console.log(`sum:${sum(1,2)}`);

//7. Early return, Early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic..
}


//1.fuction_expression
//a function declaraion can be called earlier that it is defined.(hoisted)
//일반 함수 선언은 선언하기도 전에 사용할수있다.

const print = function(){ //anonymous fuction
    console.log('print');
};

print();
const printAgain = print;
printAgain();

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'Love you'){
        printYes();
    }else{
        printNo();
    }
};
//anonymous fuction
const printYes = function(){
    console.log('yse');
};
//named function
//bertter debugging in debugger's stack traces
//recursions
const printNo = function print(){
    console.log('no');
};
randomQuiz('Love you',printYes,printNo);
randomQuiz('I am',printYes,printNo);


//3.Arrow function
//always anonymous
const simplePrint = function(){
    console.log('simplePrint');
};
//간결하다 
const simple = () => console.log('simplePrint');
const add =(a,b)=>a+b;
const simpleMultiply = (a,b)=>{
    //do something mroe
    return a*b;
};

//4.IIFE: Immediately Invoked Function Expression 
//선언과 동시에 호출
(function hello(){
    console.log('IIFE');
})();



//Fuctino Quiz

function calculate(command, a,b){
    if(command === 'add'){
        return a+b;
    }else if(command ==='substract'){
        return a-b;
    }else if(command ==='divide'){
        return a/b;
    }else if(command ==='multiply'){
        return a*b;
    }else if(command ==='remainder'){
        return a%b;
    }else{
        return 'error 잘못 입력하셨습니다.';
    }
}

console.log(`${calculate('ㅇㅇ',3,4)}`);



