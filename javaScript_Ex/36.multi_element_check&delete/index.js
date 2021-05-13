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
        console.log(inputs.length);
        for(let i=0; i<inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        }
    }

    swapBtn.onclick = function(){

    }
}

window.addEventListener('load',init);