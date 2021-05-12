/**
 *  == 값을 비교 
 *  === 주소값 비교 
 * 
 * 상수를 변수에 참조 시킬때 똑같은 값이 이미 있다면 같이 참조
 * new Number(3); 새로운 주소에 참조
 */

let x = 3;
let y = 3;

console.log(x==y); //true
console.log(x===y); //true