/**
 * Ex 2: 엘리번트 선택방법 개선하기
 * 
 */

function init(){

    let section2 = document.getElementById("section-2");
    let inputs = section2.getElementsByTagName("input");

    let txtX = inputs[0];
    let txtY = inputs[1];
    let btnAdd = inputs[2];
    let textSum = inputs[3];

    btnAdd.onclick = function(){
        let x = parseInt(txtX.value);
        let y = parseInt(txtY.value);

        console.log(x+y);
        textSum.value = x+y;
    };
};

window.addEventListener("load",init); 
