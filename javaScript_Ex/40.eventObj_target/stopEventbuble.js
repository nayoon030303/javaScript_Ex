


//Ex2-버블링을 이용한 사용자 이벤트 처리하기
function init(){
    const section = document.querySelector("#section3");
    let imgList = section.querySelector(".img-list");
    let currentImg = section.querySelector(".current-img");
    let addBtn = section.querySelector(".add-button");
   

    imgList.onclick = function(e){
        console.log("imgList");
        if(e.target.nodeName !="IMG")return;
        currentImg.src = e.target.src;
    };

    addBtn.onclick = function(e){
        
        e.stopPropagation();
        
        console.log("addbtn");
        let img = document.createElement("img");
        img.src = "img/1.jpg";
        currentImg.insertAdjacentElement("afterend",img);
    };
    
    
};


window.addEventListener("load",init);