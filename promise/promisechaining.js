//프라미스 체이닝

/**
 * 프라미스: then vs. catch
 * 
 * 아래 두 코드 조각을 보세요. 두 코드는 동일하게 동작할까요?
 * 모든 상황을 고려하여 두 코드 조각이 동일하게 동작할지 아닐지를 판단해 보세요
 */

promise.then(f1).catch(f2);
//f1에서 error가 났을때만 

promise.then(f1,f2);
//resolve f1, reject f2
//=>결론: 같지 않다.

