
//Ex2-버블링을 이용한 사용자 이벤트 처리하기
function init(){
    const section = document.querySelector("#section2");
    let imgList = section.querySelector(".img-list");
    let currentImg = section.querySelector(".current-img");

   

    imgList.onclick = function(e){
        if(e.target.nodeName !="IMG")return;
        currentImg.src = e.target.src;
    };
    
}


window.addEventListener("load",init);