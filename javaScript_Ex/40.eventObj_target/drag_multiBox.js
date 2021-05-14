//Ex8-여러개 박스 드래그 방식으로 옮기기
function init(){
    const section = document.querySelector("#section8");

    const container = section.querySelector(".container");
    const box = section.querySelector(".box");
    let current = null;

    let dragging = false;
    let offset = {x:0,y:0};
    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){ //박스를 눌렀을때만 드래그
           
            dragging = true;

            current = e.target; 
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    container.onmouseup = function(e){
        dragging = false;
    };

    container.onmousemove = function(e){
       if(!dragging)return;
       current.style.left  = (e.pageX-offset.x)+"px";
       current.style.top  = (e.pageY-offset.y)+"px";
    };

};

window.addEventListener("load",init);