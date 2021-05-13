/**
 * Ex 2: 엘리번트 선택방법 개선하기
 * 
 */

function init(){

    let section2 = document.getElementById("section-2");
    let txtX = section2.getElementsByClassName("txt-x")[0];
    let txtY = section2.getElementsByClassName("txt-y")[0];
    let btnAdd = section2.getElementsByClassName("add-btn")[0];
    let textSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function(){
        let x = parseInt(txtX.value);
        let y = parseInt(txtY.value);

        console.log(x+y);
        textSum.value = x+y;
    };
};

window.addEventListener("load",init); 
