//q1. 배열안에 원소들을 하나의 string으로 만들기
{
    const fruits = ['apple','banana','orange'];
    console.log(fruits.join());
}

//q2. 주어진 string을 배열로 변환하는 문제
{
    const fruits = '🍇,🍎,🍌,🍉';
    const result = fruits.split();
    console.log(result);
}

//q3. 배열의 순서를 거꾸로 만들기
{
    const array = [1,2,3,4,5];
    array.reverse();
}