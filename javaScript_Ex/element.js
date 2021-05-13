function printResult(){
    btnPrint.value = "냨 클릭되었습니당";
    span1.innerText = "안녕하세요"

    //btnPrint.type = "text";
}

function init(){
    btnPrint.onclick = printResult;
}

window.onload = init;