


function init(){
    const section = document.querySelector("#section1-1");

    const tbody = section.querySelector("tbody");
    const delBtn = section.querySelectorAll(".del-button");

    const delNode = function(e){
        tbody.removeChild( e.target.parentElement.parentElement);
       
    }
  
    for(let i=0; i<delBtn.length; i++){
        delBtn[i].onclick = delNode;
    }
};


window.addEventListener("load",init);