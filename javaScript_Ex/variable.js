//why?
//JavaScript is very flexible
//flexible == dangerous
//added ECMAScript 5
'use strict';

// 2.Variable
//let (added in ES6)
{
    let name = 'nayoon';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);

//var (dont't ever use this;)
//var hoisting(어디에 선언한것 상관 없이 선언을 끌어 올려주는 것 )
//has no block scope
//인터넷explore는 6지원 x...;; 무시하고 개발
console.log(age);
age = 4;
console.log(age);
var age;


//3. Constants(Immutable)<->Mutable
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const daysIndex = 7;
const maxNumber = 5;


//4.Variable types
//primitive, single item: number, string, boolean, null,, undefiedn,symbol
const count = 17;
const size =  13.4;
//따움표x ~표시 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number-speicla numberic values:
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/3;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 12333333333333455556666667n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


//5.string
const char = 'c';
const nayoon = 'nayoon';
const greeting = 'hello' + nayoon;
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloNayoon = `hi ${nayoon}`;
console.log(helloNayoon);
console.log(`value: ${helloNayoon}, type: ${typeof helloNayoon}`);
console.log('value:' + helloNayoon + ' type:' + typeof helloNayoon);


//6. boolean
//false: 0,null, undefined, NaN,''
const canRead = true;
const test = 3<1; //false

//null(내가 지정해준다.)
let nothing = null;

//undefined(선언은 되었지만 값을 지정x)
let x;
let y  = undefined;

//symbol, create unique identifiers for objects;(식별자로 주요 이용)
//만약 string으로 식별자를 주게된다면 다른 모듈,파일에서 동일한 식별자를 사용했을 때 동일한 식별자로 간주
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1==gsymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //Symbol을 출력하기 위해서 description를 붙여야한다. 

//7. Dynamic typing: dynamically typed language
let text = 'Hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 3;
console.log(`value: ${text}, type: ${typeof text}`);//3, number
text = '3'+text;
console.log(`value: ${text}, type: ${typeof text}`);//33, string
text = text/'3';
console.log(`value: ${text}, type: ${typeof text}`); //11, number
//console.log(text.charAt(0)); Error:에러