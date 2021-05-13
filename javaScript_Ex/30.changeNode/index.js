//엘리먼트 노드 속성 변경

function init(){
    let section = document.querySelector("#section5");
    let srcInput = section.querySelector(".src-input");
    let changeButton = section.querySelector(".change-button");
    let img = section.querySelector(".img");

    changeButton.onclick = function(){
        img.src = `img/${srcInput.value}.jpg`
        console.log(img.src);
    }
}

window.addEventListener("load",init);