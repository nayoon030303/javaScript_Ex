
function ex4(){

    //Ex 4: 
    let section4 = document.querySelector("#section-4");
    //let input = section4.querySelectorAll("input");

    let box = section4.querySelector(".box");
    let input1 = box.children[0];
    let input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
}

function ex3(){
   //Ex 3: querySelector 이용하기 
   let section3 = document.querySelector("#section-3");
   let txtX = section3.querySelector(".txt-x");
   let txtY = section3.querySelector(".txt-y");
   let btnAdd = section3.querySelector(".add-btn");
   let textSum = section3.querySelector(".txt-sum");

   btnAdd.onclick = function(){
       let x = parseInt(txtX.value);
       let y = parseInt(txtY.value);

       console.log(x+y);
       textSum.value = x+y;
   };
}

function ex2(){
    //Ex 2: 엘리번트 선택방법 개선하기
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
}

function init(){

    ex2();
    ex3();
    ex4();

};

window.addEventListener("load",init); 
