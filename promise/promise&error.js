/**
 * setTimeout에서의 에러 
 * 
 * 아래 예시에서 .catch가 트리거 될까요? 이유와 함께 .cathc가 트리거 될지 안 될지를 맞춰보세요
 */

new Promise(function(resolve, reject){
    setTimeout(()=>{
        throw new Error("에러 발생!");
    },1000);
}).catch(alert);

//출력: 에러 발생 틀림

/**
 * '암시적 'try...catch'가 함수 코드를 감싸고 있으므로 모든 동기적 에러는 '암시적 try..catc'에서 처리됩니다. 
 * 하지먄 setTimeout에 들어간 에러는 비동기적 에러(?)
 * 
 * 하지만 여기에서 에러는 executor가 실행되는 동안이 아니라 나중에 발생합니다. 따라서 프라미스는 에러를 처리 할 수 없습니다.
 */
