//Promise.all
let promise = Promise.all([
    new Promise(resolve=>setTimeout(()=>resolve(1),3000)),
    new Promise(resolve=>setTimeout(()=>resolve(2),2000)),
    new Promise(resolve=>setTimeout(()=>resolve(3),1000)),
]).then(response=>{
    console.log(response);
});

//url이 담긴 배열을 fetch를 써서 처리하는 예시 
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // fetch를 사용해 url을 프라미스로 매핑합니다.
//   let requests = urls.map(url => fetch(url));
  
//   // Promise.all은 모든 작업이 이행될 때까지 기다립니다.
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => alert(`${response.url}: ${response.status}`)
// ));


//Error가 날때 
// Promise.all([
//     new Promise((resolve,reject)=>setTimeout(()=>resolve(1),1000)),
//     new Promise((resolve,reject)=>setTimeout(()=>reject(new Error('에러발생')),3000)),
//     new Promise((resolve,reject)=>setTimeout(()=>resolve(1),2000))
// ]).then(requests=>{
//     requests.forEach(re=>console.log(req));
// })

//Promise.allsettled
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
//   ];
  
//   Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => { // (*)
//       results.forEach((result, num) => {
//         if (result.status == "fulfilled") {
//           alert(`${urls[num]}: ${result.value.status}`);
//         }
//         if (result.status == "rejected") {
//           alert(`${urls[num]}: ${result.reason}`);
//         }
//       });
//     });


//Promise.race

Promise.race([
    new Promise(resolve=>setTimeout(()=>resolve(1),3000)),
    new Promise(resolve=>setTimeout(()=>resolve(2),2000)),
    new Promise(resolve=>setTimeout(()=>resolve(3),1000)),
]).then(result=>console.log(result));