//Ex9-박스의 옵셋 영역 좌표 이용하기<
function init(){
    const section = document.querySelector("#section9");

    const container = section.querySelector(".container");
    const status = section.querySelector(".status");
    let current = null;

    let dragging = false;
    let offset = {x:0,y:0};
    let position = {left: container.offsetLeft, top:container.offsetTop};
    console.log(position);
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
      
       let x = e.pageX-offset.x-position.left;
       let y = e.pageY-offset.y-position.top;

       current.style.left  = x + "px";
       current.style.top  = y + "px";

       status.innerText = `(x,y): ${x}, ${y}`
    };

};

window.addEventListener("load",init);