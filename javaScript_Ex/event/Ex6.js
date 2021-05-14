
//Ex6-마우스 좌표#클릭 위치에 박스 옮기기
function init(){
    const section = document.querySelector("#section6");

    const container = section.querySelector(".container");
    const box = section.querySelector(".box");

    container.onclick = function(e){
       // e.x,e.y : 클라이언트 영억
       //e.pageX,e.pageY: 스크롤을 내린 페이지의 영역
       //e.offsetX, e.offsetY: 클릭한 최전방의 기준 영역
       

       console.log(`e: ${e.x},${e.y}`);
       console.log(`clinet: ${e.clientX},${e.clientY}`);
       console.log(`page: ${e.pageX},${e.pageY}`);
       console.log(`offset: ${e.offsetX},${e.offsetY}`);

       box.style.position = "absolute";
       box.style.left = `${e.pageX}px`; //px단위를 써줘야한다.
       box.style.top =`${e.pageY}px`;
    };
};

window.addEventListener("load",init);