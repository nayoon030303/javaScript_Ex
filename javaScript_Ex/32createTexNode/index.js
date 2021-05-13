//엘리먼트 노드 속성 변경
function ex1(){
    let section = document.querySelector("#section6");

    let menuList = document.querySelector(".menu-list");
    let titleInput = document.querySelector(".title-input");
    let addBtn = document.querySelector(".add-button");
    let delBtn = document.querySelector(".del-button");
    
    addBtn.onclick = function(){
        let input = titleInput.value;
        let textNode = document.createTextNode(input);//새로운 노드를 생성
        menuList.appendChild(textNode);
    };

    delBtn.onclick = function(){
        var textNode = menuList.childNodes[0]; //첫번쨰 노드를 가져옴
        menuList.removeChild(textNode);
    };
}

function ex2(){
    let section = document.querySelector("#section7");

    let titleInput = document.querySelector(".title-input");
    let addBtn = document.querySelector(".add-button");
    let delBtn = document.querySelector(".del-button");
    let menuList = document.querySelector(".menu-list");
  
    
    addBtn.onclick = function(){
        let input = titleInput.value;
        let txtNode = document.createTextNode(input);//새로운 노드를 생성

        let aNode = document.createElement("a");
        aNode.href="";
        aaNode.appendChild(txtNode)

        let liNode = document.createElement("li");
        liNode.appendChild(aNode);

        menuList.appendChild(liNode);
       
    };

    delBtn.onclick = function(){
        var textNode = menuList.childNodes[0]; //첫번쨰 노드를 가져옴
        menuList.removeChild(textNode);
    };
}

function init(){
    ex1();
    ex2();
};

window.addEventListener("load",init);