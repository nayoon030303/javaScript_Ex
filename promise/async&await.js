// //async함수 
// async function f(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(1),1000);
//     });

//     let result = await promise;
    
//    console.log(result);
// }

// f().then(alert); //1

// async function f1(){
//     return Promise.resolve(1);
// }

// f().then(alert); //1



// //과제 

//async와 await를 상요하여 코드 변경하기 
//프라미스 체이닝 챕터의 예시 중 하나를 .then/catch 대신 async/await를 사용해 다시 작성해 봅시다. 
async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
        let json = await response.json();
        return json;
        //return response.json();
    
    }else{
        return new Error(response.status);
    }
}

// loadJson('no-such-user.json').catch(alert);

// //async와 await를 사용해서 '다시 던지기' 예시 재작성하기 

// {
//     class HttpError extends Error {
//         constructor(response) {
//           super(`${response.status} for ${response.url}`);
//           this.name = 'HttpError';
//           this.response = response;
//         }
//       }
      
//       async function loadJson(url){
//         let response = await fetch(url);
//         if(response.status == 200){
//             let json = await response.json();
//             return json;
//             //return response.json();
        
//         }else{
//             return new Error(response.status);
//         }
//     }


//     //유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
//     async function demoGithubUser(){
//        let user;

//        while(true){
//            let name = prompt("GitHub username을 입력하세요.", "iliakan");
//            try{
//                user = await loadJson(`https://api.github.com/users/${name}`);
//                break;
//            }catch{
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
//               } else {
//                 throw err;
//               }
//            }
//            alert(`이름: ${user.name}.`);
//            return user;
//        }

//     }
// }

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }

function f(){
    wait().then(console.log(result));
}
f();