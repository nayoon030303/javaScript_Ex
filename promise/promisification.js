function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
  
    document.head.append(script);
  }

//위 코드를 프라미스화 해보기 이해ok
let loadScriptPromise = function(src){
    return new Promise((resolve,reject)=>{
        loadScript(src,(err,scipt)=>{
            if(err)reject(err)
            else resolve(src);
        });
    })
}

//실무에선 하나가 아닌 여러 개의 함수를 프라미스화 해야 할 것이다. 헬퍼 함수 promisify(f)를 만들어보자

function promisify(f){
    return function(...args){ //래퍼 함수를 반환함
        return new Promise((resolve,reject)=>{
            function callback(err,result){ //f에서 사용할 커스텀 콜백
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            }

            args.push(callback); //위에서 만든 커스텀 콜백을 함수 f의 인수 끝에 추가합니다. 

            f.callback(this, ...args); //기본 함수를 호출합니다. 

        });
    };
};

//사용법 
let loadScriptPromise = promisify(loadScript);
