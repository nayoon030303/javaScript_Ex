// 1. String concatenation

console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1 + 4 = ${1+4}`); //변수 값을 계산한후 ->String으로 변환

//2. Numeric operators
console.log(2+2); 
console.log(2-2);
console.log(3/2); 
console.log(2*3);
console.log(5%2);
console.log(2**3);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);// 3  3

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);// 3  4

const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);// 3  3

const postDcrement = counter--;
console.log(`postIncrement: ${postDcrement}, counter: ${counter}`);// 3 2

//4. Assignment operators
let x = 3;
let y = 6; 
x+=y;// x=9 , y=6
console.log(`x: ${x}, y: ${y}`);
x-=y;// x= 3, y=6
console.log(`x: ${x}, y: ${y}`);
x*=y;// x= 18, y=6
console.log(`x: ${x}, y: ${y}`);
x/=y;// x=3, y=6
console.log(`x: ${x}, y: ${y}`);

//5.Comparison operators
console.log(10<6);
console.log(10>6);
console.log(10<=6);
console.log(10>=6);

//6. Logical operators

const value1 = false;
const value2 = 4<2;


//변수<표현식<함수 순서로 
//처리하는데 오래 걸리는 것을 뒤로 배치!

//&&(and)
console.log(`and: ${value1 && value2 && check()}`);
//||(or)
console.log(`or: ${value1 || value2 || check()}`);

function check()
{
    for(let i =0; i<5; i++)
    {
        console.log('wait...');
    }
    return true;
}

// !(not)
console.log(!value1); //true

//7.Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion
//숫자든 문자든 똑같으면 true
console.log(stringFive == numberFive); //ture
console.log(stringFive != numberFive); //false

// === strict equality, no tpe conversion
//타입을 신경써서 비교한다.
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//Object equality by reference(주소)
const nayoon1 = {name: 'nayoon'};
const nayoon2 = {name: 'nayoon'};
const nayoon3 = nayoon1;

console.log(nayoon1 == nayoon2); //false
console.log(nayoon1 === nayoon2); //false
console.log(nayoon1 == nayoon3); //true
console.log(nayoon1 === nayoon3); //true

//Quiz
console.log(0 == false); // true
console.log(0 === false) //false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); //true
console.log(null=== undefined); //false