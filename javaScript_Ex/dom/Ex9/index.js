const init = function(){
   
    const section = document.querySelector("#section9");

    const noticeList = section.querySelector(".notice-list");
    const allCheckbox = section.querySelector(".overall-checkbox");
    const tbodyNode = noticeList.querySelector("tbody");
    const delBtn = section.querySelector(".del-button");
    const swapBtn = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){ //checkbox의 값이 바뀐다면
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']"); //input중 checkbox만 가져옴
        for(let i=0; i<inputs.length; i++){
            inputs[i].checked = allCheckbox.checked;
        }
    };

    delBtn.onclick = function(){
        
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked"); //선택된 checkbox만 가져옴
        for(let i=0; i<inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        }
    };

    swapBtn.onclick = function(){
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");
        console.log(inputs.length);
        if(inputs.length!==2){
            alert("엘리먼트는 2개를 선택해야만 합니다.");
            return;
        }

        let trs = [];
        for(let i=0; i<inputs.length; i++){
            trs.push(inputs[i].parentElement.parentElement);
        }

        //두개의 element 위치 바꾸기 
        let cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);

    };
};

window.addEventListener('load',init);