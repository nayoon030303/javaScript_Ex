//엘리먼트 노드 속성 변경

function init(){
    let section = document.querySelector("#section5");
    let imgSelect = document.querySelector(".img-select");
    let srcInput = section.querySelector(".src-input");
    let changeButton = section.querySelector(".change-button");
    let img = section.querySelector(".img");
    let colorInput = section.querySelector(".color-input");
    
    changeButton.onclick = function(){
        //img.src = `img/${srcInput.value}.jpg`;
        //img.src = `img/${imgSelect.value}`;
        img.src = `img/${srcInput.value}`;

        //style 방법 2가지
        //img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;

        console.log(img.src);
    }
}

window.addEventListener("load",init);