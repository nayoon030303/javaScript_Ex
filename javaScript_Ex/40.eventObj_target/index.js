const section = document.querySelector("#section1");

let imgs = section.querySelectorAll(".img");
let currentImg = section.querySelector(".current-img");


function checkedImg(e){
    currentImg.src = e.target.src;
}

function init(){
    

    for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = checkedImg;
    }
    
}


window.addEventListener("load",init);