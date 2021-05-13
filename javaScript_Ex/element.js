
function init(){
    let btnPrint = document.getElementById("btn-print");

    let add = function(x,y){
        return x+y;
    }

    btnPrint.onclick = function printResult(){

        let btnPrint = document.getElementById("btn-print");

        btnPrint.value = "냨 클릭되었습니당";
        span1.innerText = "안녕하세요"
    
    };
}

//window.onload = init;
window.addEventListener("load",init);