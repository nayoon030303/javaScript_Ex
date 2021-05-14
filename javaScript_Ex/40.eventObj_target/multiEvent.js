//Ex4-서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
function init(){

    const section = document.querySelector("#section4");
    const nodeList = section.querySelector(".notice-list");
    const tbody = section.querySelector("tbody");
   
    tbody.onclick = function(e){

        //엘리먼트 노드의 기본 행위 막기 
        e.preventDefault();
        let target = e.target;
       
        if(target.nodeName !== "A")return;

        if(target.classList.contains("sel-button")){
           
            let tr = target.parentElement;
            for(; tr.nodeName !="TR"; tr=tr.parentElement);
            tr.style.background = "yellow";

        }else if(target.classList.contains("edit-button")){

        }else if(target.classList.contains("sel-button")){

        }
    };
};

window.addEventListener("load",init);