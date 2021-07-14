//과제  promise

/**
 * 두번 resolve 하기?
 * 아래 코드의 실행 결과를 예측해보세요
 */

let promise = new Promise((resolve,reject)=>{
    resolve(1);

    setTimeout(()=>resolve(2),1000);
});

promise.then(alert);

//예상 결과: 1을 출력


/**
 * 프라미스로 지연 만들기 
 * 
 * 내장 함수 setTimeout은 콜백을 사용합니다. 프라미스를 기반으로 하는 동일 기능 함수를 만들어보세요.
 * 함수 delay(ms)는 프라미스를 반환해야 합니다. 반환되는 프라미스는 아래와 같이 .then을 붙일 수 있도록 ms이후에 이행되어야 합니다. 
 */

function delay(ms){
    return new Promise((resolve,reject)=>{
        //setTimeout(()=>resolve(),ms);
        setTimeout(()=>resolve,ms); //resolve인수 없이 호출
    });
}

delay(3000).then(()=>alert('3초후 실행'));


/**
 * 프라미스로 애니케이션이 적용된 원 만들기
 * 
 * 콜백을 이용한 움직이는 원에서 작성한 함수 shwoCircle를 다시 작성해 봅시다. 이번엔 콜백을 받는 대신
 * 프리마스를 반환하도록 해 봅시다. 
 * 
 * 함수는 다음 처럼 사용할 수 있어야 합니다. 
 */

showCircle(150,150,100).then(div=>{
    div.classList.add('message-ball');
    div.append("Hello,word!");
});