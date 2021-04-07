//q1. 배열안에 원소들을 하나의 string으로 만들기
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join(' and ');
    console.log(result)
}

//q2. 주어진 string을 배열로 변환하는 문제
{
    const fruits = '🍇,🍎,🍌,🍉'
    const result1 = fruits.split(',');
    console.log(result1)
    //limit 제한 2직전까지 
    const result2 = fruits.split(',',2);
    console.log(result2)
}

//q3. 배열의 순서를 거꾸로 만들기
{
    const array = [1,2,3,4,5];
    const result =  array.reverse();
    console.log(result);
    console.log(array);
}

//04. 첫번째와 두번쨰 요소가 삭제된 배열 새로만들기
{
    const array = [1,2,3,4,5];
    //const result = array.splice(0,2);
    //change to array 3,4,5
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}


class Student {
    constructor(name,age,enrolled,score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88),
];

//05. score가 90인 student를 find
{
   /* const result = student.find(function(student,index){
        return student.score === 90;
       // console.log(student,index);
    });*/

    const result = student.find((student)=>student.score ===90);
    console.log(result);
}

//06. enrolled가 true인 student만 찾아서 make array
{
    //필터를 이용해서 원하는 값만 받아올 수 있다.
    const result = student.filter((student)=>student.enrolled);
    console.log(result);
}

//07. 점수만 들어있는 array
{
    const result = student.map((student)=>student.score);
    console.log(result);
}

//08.배열안에 학생들의 점수가 있는지 없는지 확인
{
    /*some: 한명이라도 조건에 해당된다면 return true */
    const result = student.some((student)=>student.score<50)
    console.log(result);

    /*enery: array의 모든 요소들이 조건을 충족해야한다. */
    const result2 = !student.every((student)=>student.score>=50)
    console.log(result2);
}

//09.학생들의 평균점수 구하기
{
    //reduceRight: start to right
    const result = student.reduce((prev,curr)=>{
        console.log('---');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    },0);
    //0에서부터 +
    console.log(result/student.length);
}

//10.학생들의 모든 점수를 string으로 변환
{
    //함수를 다같이 사용할 수 있다.
    const result = student.map((studuet)=>studuet.score).join();
    console.log(result);
    
    console.clear();

    const result1 =student
    .map((student)=>student.score)
    .filter((score) =>score>=50)
    .join();
    console.log(result1);
}

//bonus: 학생들의 점수를 정렬해서 string으로 변환
{
    const result = student
    .map((student)=>student.score)
    .sort((a,b)=>a-b)
    .join();
    console.log(result);
}