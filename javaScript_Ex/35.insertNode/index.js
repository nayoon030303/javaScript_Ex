let init = function(){
    const section = document.querySelector("#section8");

    const noticeList = section.querySelector(".notice-list");
    const tbodyNode = noticeList.querySelector("tbody");
    const upBtn = section.querySelector(".up-button");
    const downBtn = section.querySelector(".down-button");
    //const currentNode  = tbodyNode.querySelector("tr"); 아래와 동일한 값
    const currentNode  = tbodyNode.firstElementChild;
   

    upBtn.onclick = function(){ 
        let prevNode = currentNode.previousElementSibling;
        if(prevNode===null){
            alert("더 이상 이동할 수 없습니다.");
        }else{
            //tbodyNode.removeChild(currentNode);
            //tbodyNode.insertBefore(currentNode,nextNode);

            //prevNode너 currentNode 뒤로가라
            currentNode.insertAdjacentElement("afterend",prevNode);
        }
    };
      

    downBtn.onclick = function(){
        let nextNode = currentNode.nextElementSibling;
        if(nextNode===null){
            alert("더 이상 이동할 수 없습니다.");
            return;
        }else{
            //tbodyNode.removeChild(nextNode);
            //tbodyNode.insertBefore(nextNode,currentNode);

            //nextNode너 currentNode너 앞으로 가라
            currentNode.insertAdjacentElement("beforebegin",nextNode);
            
        }
    };
   
}

window.addEventListener('load',init);