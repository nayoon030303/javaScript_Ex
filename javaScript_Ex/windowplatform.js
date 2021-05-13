/**
 * window 객체 
 * window.alert() == alert()
 * window는 생략이 가능하다
 */

//입력되는 값은 String
//let x = prompt("x의 값을 입력하세요",0); //3
//let y = prompt("x의 값을 입력하세요",0); //4
//alert(x+y); //34

//parseInt() string->Number
//x = parseInt(x);
//y = parseInt(y);
//alert(x+y); //7

let ex1 = parseInt("12abc3"); // 12
console.log(ex1);

let answer = confirm("정말로 삭제 하시겠습니다.?");
if(answer)
    alert("삭제되었습니다.");