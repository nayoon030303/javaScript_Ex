function init(){

    let txtX = document.getElementById("txt-x");
    let txtY = document.getElementById("txt-y");
    let btnAdd = document.getElementById("btn-add");
    let textSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        textSum.value = x+y;
    };
};

window.addEventListener("load",init); 
