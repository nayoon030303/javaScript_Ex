function init(){
    const section = document.querySelector("#section6");

    const container = section.querySelector(".container");
    const box = section.querySelector(".box");

    container.onclick = function(e){
       // e.x,e.y
       //e.offsetX, e.offsetY
       //e.clientX, e.pageX

       console.log(`${e.x},${e.y}`);
       box.style.position = "absolute";
       box.style.left = `${e.x}px`; //px단위를 써줘야한다.
       box.style.top =`${e.y}px`;
    };
};

window.addEventListener("load",init);