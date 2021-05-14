
//Ex 1-선택된 이미지 보여주기:event target 
function init(){
    const section = document.querySelector("#section1");

    let imgs = section.querySelectorAll(".img");
    let currentImg = section.querySelector(".current-img");

    function checkedImg(e){
        currentImg.src = e.target.src;
    }

    for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = checkedImg;
    }
    
}


window.addEventListener("load",init);