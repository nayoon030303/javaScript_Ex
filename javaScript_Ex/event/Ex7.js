//Ex7-드래그 방식으로 박스 옮기기
function init(){
    const section = document.querySelector("#section7");

    const container = section.querySelector(".container");
    const box = section.querySelector(".box");

    let dragging = false;
    let offset = {x:0,y:0};
    container.onmousedown = function(e){
        if(e.target === box){ //박스를 눌렀을때만 드래그
            dragging = true;
        }
    };

    container.onmouseup = function(e){
        dragging = false;
    };

    container.onmousemove = function(e){
       if(!dragging)return;
        box.style.left  = (e.pageX-offset.x)+"px";
        box.style.top  = (e.pageY-offset.y)+"px";
    };

    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }

};

window.addEventListener("load",init);