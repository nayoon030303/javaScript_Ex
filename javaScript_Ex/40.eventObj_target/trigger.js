//Ex5-Trigger

function init(){
    const section = document.querySelector("#section5");

    const fileBtn = section.querySelector(".file-button");
    const fileTriggerBtn = section.querySelector(".file-trigger-button");

    fileTriggerBtn.onclick = function(){

        let event = new MouseEvent("click",{
            'view':window,
            'bubbles':true,
            'cancelable':true
        });

        fileBtn.dispatchEvent(event);
    }
};

window.addEventListener("load",init);