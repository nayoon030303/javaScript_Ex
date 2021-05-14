
//Ex3-이벤트 버블링 멈추기
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